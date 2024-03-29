<?php

namespace App\Helper;

use App\Models\MstSetting;

class DigiflazzHelper
{
    protected $RC_SUCCESS = ['00'];
    protected $RC_PENDING = ['03', '99'];

    private $url_endpoint;
    private $api_userid;
    private $api_key;

    public function __construct()
    {
        $setting = MstSetting::first();

        $this->url_endpoint = 'https://api.digiflazz.com/v1/';
        $this->api_userid   = $setting->api_username;
        $this->api_key      = $setting->use_prod ? $setting->api_prod_key : $setting->api_dev_key;
    }

    public function curl($endpoint, $data = [])
    {
        $url = rtrim($this->url_endpoint, '/') . '/' . ltrim($endpoint, '/');

        $header = [
            'Content-type: application/json',
            'Accept: application/json'
        ];

        $json = json_encode($data);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 20);
        curl_setopt($ch, CURLOPT_TIMEOUT, 120);
        $result = curl_exec($ch);
        $error = curl_error($ch);
        $errno = curl_errno($ch);
        curl_close($ch);
        if ($errno) {
            return json_encode([
                'success'    => false,
                'message'    => $error,
                'connected'  => false
            ]);
        } else {
            $response = json_decode($result, true);

            if (isset($response['data']['rc'])) {
                $rc = $response['data']['rc'];
                $status = isset($response['data']['status']) ? $response['data']['status'] : 'pending';
                $status = strtolower($status);

                if (!in_array($rc, $this->RC_SUCCESS) && !in_array($rc, $this->RC_PENDING) && !in_array($status, ['sukses', 'pending'])) {
                    return json_encode([
                        'success'    => false,
                        'message'    => $response['data']['message'],
                        'connected'  => true,
                        'response'  => $response
                    ]);
                }
            }

            return json_encode([
                'success'   => true,
                'message'   => 'Request success',
                'connected'  => true,
                'response'  => $response
            ]);
        }
    }

    public function balance()
    {
        $result = $this->curl('/cek-saldo', [
            'cmd'   => 'deposit',
            'username' => $this->api_userid,
            'sign'  => md5($this->api_userid . $this->api_key . 'depo')
        ]);

        return $result;
    }

    public function validateNoPln($noPln)
    {
        $result = $this->curl('/transaction', [
            'commands'   => 'pln-subscribe',
            'customer_no' => $noPln,
        ]);

        return $result;
    }

    public function order($refId, $code, $sequence, $hp, $meter_pln = null)
    {
        if (!is_string($refId)) {
            $refId = "$refId";
        }

        if (!is_string($code)) {
            $code = "$code";
        }

        if (!is_string($hp)) {
            $hp = "$hp";
        }

        if (!is_string($meter_pln)) {
            $meter_pln = "$meter_pln";
        }

        $customer_no = ($meter_pln ?: $hp);

        if ($sequence > 1) {
            $customer_no = $sequence . '.' . $customer_no;
        }

        $result = $this->curl('/transaction', [
            'username'  => $this->api_userid,
            'buyer_sku_code' => $code,
            'customer_no' => $customer_no,
            'ref_id' => $refId,
            'sign' => md5($this->api_userid . $this->api_key . $refId)
        ]);

        return $result;
    }

    public function payBill($refId, $code, $sequence, $no)
    {
        if (!is_string($refId)) {
            $refId = "$refId";
        }
        if (!is_string($code)) {
            $code = "$code";
        }
        if (!is_string($sequence)) {
            $sequence = "$sequence";
        }
        if (!is_string($no)) {
            $no = "$no";
        }

        $result = $this->curl('/transaction', [
            "commands" => "pay-pasca",
            'username' => $this->api_userid,
            'buyer_sku_code' => $code,
            'customer_no' => $no,
            'ref_id' => $refId,
            'sign' => md5($this->api_userid . $this->api_key . $refId)
        ]);

        return $result;
    }

    public function productPrepaid()
    {
        $result = $this->curl('/price-list', [
            'cmd' => 'prepaid',
            'username' => $this->api_userid,
            'sign' => md5($this->api_userid . $this->api_key . 'pricelist')
        ]);

        return $result;
    }

    public function productPostpaid()
    {
        $result = $this->curl('/price-list', [
            'cmd' => 'pasca',
            'username' => $this->api_userid,
            'sign' => md5($this->api_userid . $this->api_key . 'pricelist')
        ]);

        return $result;
    }

    public function EditProdukPrabayar($code)
    {
        $result =  $this->curl('price-list', [
            'username' => $this->api_userid,
            'sign' => md5($this->api_userid . $this->api_key . 'pricelist'),
            'code' => $code
        ]);
        return $result;
    }

    public function checkPostpaid($product_code, $customer_no, $trx_id)
    {
        $result = $this->curl('/transaction', [
            'commands' => 'inq-pasca',
            'username' => $this->api_userid,
            'buyer_sku_code' => $product_code,
            'customer_no' => $customer_no,
            'ref_id' => "$trx_id",
            'sign' => md5($this->api_userid . $this->api_key . $trx_id),
        ]);


        return $result;
    }

    public function checkStatusPostpaid($product_code, $customer_no, $trx_id)
    {
        $result = $this->curl('/transaction', [
            'commands' => 'status-pasca',
            'username' => $this->api_userid,
            'buyer_sku_code' => $product_code,
            'customer_no' => $customer_no,
            'ref_id' => $trx_id,
            'sign' => md5($this->api_userid . $this->api_key . $trx_id),
        ]);
        return $result;
    }
}
