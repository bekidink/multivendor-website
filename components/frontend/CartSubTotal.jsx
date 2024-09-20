import Link from 'next/link'
import React from 'react'

export default function CartSubTotal({subTotal}) {
  const shipping=10;
  const tax=2;
  const totalPrice=(Number(subTotal) +Number(shipping)  + Number(tax) ).toFixed(2);
  return (
    <div className="md:col-span-4 col-span-full bg-white border border-gray-200 rounded-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700  text-slate-800 overflow-hidden shadow-md p-5 dark:text-slate-100 font-bold">
    <h2 className='text-2xl py-3'>
      Cart total
    </h2>
    <div className="flex items-center justify-between border-b border-slate-500 pb-6">
      <span>Subtotal</span>
      <span>{subTotal}</span>
    </div>
    <div className="flex items-center justify-between pb-4 mt-2">
      <span>Tax</span>
      <span>{tax}</span>
    </div>
    <div className="flex items-center justify-between py-4">
      <span>Shipping</span>
      <span>{shipping}</span>
    </div>
    <p className='border-b border-slate-500 pb-6 text-slate-400 font-normal'>We only charge for shipping when you hae over 2kg items</p>
    <div className="flex items-center justify-between pb-4 font-bold">
      <span>Total</span>
      <span>{totalPrice}</span>
    </div>
<div className="mt-8">
<Link href={"/checkout"} className=' bg-slate-900 dark:bg-lime-600 text-slate-50 rounded-lg py-2 px-4 font-normal'>
      Continue to Checkout
    </Link>
</div>
  </div>
  )
}
