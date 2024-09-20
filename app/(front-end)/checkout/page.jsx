"use client"
import CartBanner from '@/components/frontend/checkout/CartBanner'
import StepForm from '@/components/frontend/checkout/StepForm'
import Steps from '@/components/frontend/checkout/Steps'
import React from 'react'

export default function page() {
    const steps=[
      {
        number:1,
        title: "Personal Information"
      }  
     ,
     {
      number:2,
      title: "Shipping Address"
    }  
   ,
   {
    number:3,
    title:  "Payment Method"
  } 
        ,
        {
          number:4,
          title:   "Order Summary"
        } 
       ,
       
]
  return (
    <div className='bg-slate-200 dark:bg-slate-900 min-h-screen'>
        <div className="max-w-3xl p-6 my-6 mx-auto border border-slate-300  rounded-lg">
<Steps steps={steps}/>
<div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <CartBanner/>
    <StepForm/>
</div>
        </div>
      
    </div>
  )
}
