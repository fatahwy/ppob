import { PageProps } from '@/types'
import React, { ChangeEvent, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Card from '@/Components/Card'
import ProductType from '@/types/product'
import TextInput from '@/Components/TextInput'
import { rupiah, toInteger } from '@/libs/BaseHelper'
import PrimaryButton from '@/Components/PrimaryButton'
import axios from 'axios'
import { toast } from 'react-toastify'
import { router } from '@inertiajs/react'
import Api from '@/libs/Api'

export default function Show({ data, product }: PageProps & { product: ProductType }) {
    const [form, setForm] = useState(product);
    const [loading, setLoading] = useState(false);

    const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
        let value: string | number = e.target.value;

        switch (e.target.name) {
            case 'price':
            case 'commission':
                const val = parseInt(e.target.value.replaceAll('.', ''));
                value = val >= 0 ? val : value;
                break;
            default:
                break;
        }

        setForm((state) => ({ ...state, [e.target.name]: value }))
    }

    const onSubmit = async () => {
        setLoading(true)
        const res = await Api.put(`/admin/product/${product.id}`, form)
        if (res) {
            router.get('/admin/product')
            return;
        }
        setLoading(false)
    }

    return (
        <AuthenticatedLayout data={data}>
            <div className='flex flex-col md:flex-row md:justify-between gap-y-5 items-center'>
                <div className="text-2xl dark:text-white">Update Product : {product.name}</div>
                <div className='text-xl dark:text-white'>Selling Price: {rupiah(form.price + form.commission)}</div>
            </div>
            <Card className='grid lg:grid-cols-2 gap-5 md:px-10 p-6'>
                <TextInput disabled={loading} title='Name' name='name' value={form.name} onChange={updateForm} />

                <TextInput disabled={loading} title='Price' name='price' value={toInteger(form.price)} onChange={updateForm} />

                <TextInput disabled={loading} title='Commission' name='commission' value={toInteger(form.commission)} onChange={updateForm} />
            </Card>
            <div className="flex justify-end">
                <PrimaryButton disabled={loading} loading={loading} onClick={() => onSubmit()}>Update</PrimaryButton>
            </div>
        </AuthenticatedLayout>
    )
}
