import React from 'react'
import CartProduct from './CartProduct'
import EmptyCart from './EmptyCart'

export default function CartItems({cartItem}) {

  return (
    <div className="md:col-span-8 col-span-full">
         {cartItem.length>0 && <>
          <h2 className='py-2 mb-6 text-2xl'>Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 font-semibold text-sm mb-4">
            <h2 className='uppercase'>Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
         </>}
         {cartItem.length>0 ? cartItem.map((cart,i)=>(
 <CartProduct cart={cart} key={i}/>
         )):(
          <EmptyCart/>
         )}
         
          <div className="flex items-center gap-2 py-8">
            

    <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupon"/>
  
<button className='shrink-0 py-2 px-4 rounded-xl bg-lime-600'>Apply Coupon</button>
          </div>
        </div>
  )
}
