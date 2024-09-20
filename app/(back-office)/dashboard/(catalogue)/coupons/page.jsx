import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import TableAction from '@/components/backoffice/TableAction'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { Download, Plus, Search, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

const page = async() => {
  const session=await getServerSession(authOptions)
  const role=session?.user?.role
  const id=session?.user?.id
  const coupons=await getData("coupons")
  const farmerCoupons=coupons.filter((coupon)=>coupon.vendorId===id)

  return (
    <div>
     <PageHeader heading={"Coupons"} href={"/dashboard/coupons/new"} LinkTitle={"Add Coupon"}/>
     <div className="py-8">
      <DataTable data={role==="ADMIN"? coupons:farmerCoupons} columns={columns} filterKeys={['title']} />
     </div>
    </div>
  )
}

export default page
