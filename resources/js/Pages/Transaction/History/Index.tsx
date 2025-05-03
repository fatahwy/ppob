import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, router } from '@inertiajs/react';
import Card from '@/Components/Card';
import PaginateDataTable from '@/Components/PaginateDataTable';
import PrimaryButton from '@/Components/PrimaryButton';
import clsx from 'clsx';
import Transaction from '@/types/transaction';
import { formatDate, listStatus, rupiah } from '@/libs/BaseHelper';
import { PageProps } from '@/types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Index({ data }: PageProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleTrxAgain = async (row: Transaction) => {
        if (confirm('Are you sure want to repate this transaction again?')) {
            toast.info('Processing...');
            setIsLoading(true);
         
            const trxType = row.product.category.type;
            let data: any = {
                id_product: row.mst_product_id,
            }

            if (trxType === 'postpaid') {
                data.id_customer = row.target;
            } else if (row.mtrpln) {
                data.id_customer = row.mtrpln;
            } else {
                data.target = row.target;
            }

            const result = await axios.post(`/transaction/${trxType}`, data);
            if (result?.data?.data?.id) {
                toast.success(result.data.message);
                router.get(`/history/${result?.data?.data?.id}`)
            } else if (result.data?.message) {
                toast.error(result.data?.message);
            }
            setIsLoading(false);
        }
        return;
    }

    const columns = [
        {
            name: 'Name',
            selector: (row: Transaction) => row.product_name,
        },
        {
            name: 'Price',
            selector: (row: Transaction) => rupiah(row.total),
        },
        {
            name: 'Customer Number',
            selector: (row: Transaction) => row.mtrpln ? row.mtrpln : row.target,
        },
        {
            name: 'Status',
            selector: (row: Transaction) => {
                const status = listStatus[parseInt(row.status)]

                return <div className={clsx('px-3 py-2 rounded-xl text-white', status.color)}>{status.label}</div>
            },
        },
        {
            name: 'Date',
            selector: (row: Transaction) => formatDate(row.created_at),
        },
        {
            name: '',
            selector: (row: Transaction) => {
                return (
                    <div className='flex gap-2'>
                        <Link href={`/history/${row.id}`}>
                            <PrimaryButton>View</PrimaryButton>
                        </Link>
                        <PrimaryButton disabled={isLoading || parseInt(row.status) === 0} onClick={() => handleTrxAgain(row)}>
                            Trx Again
                        </PrimaryButton>
                    </div>
                )
            },
        },
    ];

    return (
        <AuthenticatedLayout
            data={data}
            title='History'
        >
            <div className='text-3xl dark:text-white'>History</div>
            <Card className='p-4'>
                <PaginateDataTable url='/history/list' columns={columns} />
            </Card>
        </AuthenticatedLayout>
    )
}
