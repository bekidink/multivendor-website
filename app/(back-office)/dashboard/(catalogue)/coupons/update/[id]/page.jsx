import FormHeader from '@/components/backoffice/FormHeader'
import NewCouponForm from '@/components/backoffice/NewCouponForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateCoupon({params:{id}}) {
  const coupon=await getData(`coupons/${id}`)
  return (
    <div>
     <FormHeader title={"Update Coupon"}/>
     <NewCouponForm updateData={coupon}/>
    </div>
  )
}
