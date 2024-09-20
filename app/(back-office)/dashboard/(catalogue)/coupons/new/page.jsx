"use client"
import FormHeader from '@/components/backoffice/FormHeader'
import NewCouponForm from '@/components/backoffice/NewCouponForm'

import React, { useState } from 'react'

const NewCoupon = () => {
  
  
    return (
    <div>
     <FormHeader title={"New Coupon"}/>
     <NewCouponForm/>
    </div>
  )
}

export default NewCoupon
