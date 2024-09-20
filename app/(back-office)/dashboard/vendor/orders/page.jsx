import PageHeader from '@/components/backoffice/PageHeader';
import { authOptions } from '@/lib/authOptions'
import { getData } from '@/lib/getData';
import { getServerSession } from 'next-auth'
import React from 'react'
import { DataTable } from '../../payments/data-table';
import { columns } from './columns';

export default async function page() {
    const session=await getServerSession(authOptions)
    const id=session?.user?.id;
    const role=session?.user?.role;
    const sales=await getData("sales")
    const farmerSales=sales.filter((sale)=>sale.vendorId===id)

  return (
    <div>
     <PageHeader heading={"Sales"} href={"/dashboard/coupons/new"} LinkTitle={"Add Coupon"}/>
     <div className="py-8">
      <DataTable data={role==="ADMIN"? sales:farmerSales} columns={columns} filterKeys={['title']} />
     </div>
    </div>
  )
}
