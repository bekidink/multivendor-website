"use client"
import { decrementQty, incrementQty, removeFromCart } from '@/hook/slice/cartslice'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function CartProduct({cart}) {
  const dispatch=useDispatch()
  function handleCartItemDelete(cartId){
dispatch(removeFromCart(cartId))
toast.success("Item removed Successfully")
  }
  function handleDecrementQty(cartId){
    dispatch(decrementQty(cartId))
  }
  function handleIncrementQty(cartId){
    dispatch(incrementQty(cartId))
  }
  return (
    <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 font-semibold text-sm pb-3">
    <div className="flex justify-between items-center gap-2">
      <Image src={cart.imageUrl} width={249} height={249} alt='' className='rounded-xl w-20 h-20'/>
      <div className="flex flex-col">
        <h2>{cart.title}</h2>
      </div>
      </div>
     
    <div class="relative flex items-center max-w-[8rem]">
<button onClick={()=>handleDecrementQty(cart.id)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
    </svg>
</button>
<input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required  value={cart.qty}/>
<button onClick={()=> handleIncrementQty(cart.id)} type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
    </svg>
</button>
</div>
    <div className="flex items-center gap-2">
      <h4>{cart.salePrice*cart.qty}</h4>
     <button onClick={()=>handleCartItemDelete(cart.id)}>
     <Trash2 className='text-red-600 w-5 h-5'/>
     </button>
    </div>
    
  </div>
  )
}
