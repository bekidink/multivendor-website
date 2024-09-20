"use client"
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartBanner() {
    const cartItem=useSelector((store)=>store.cart)
    const subtotal=cartItem.reduce((acc,currentItem)=>{
        return acc + currentItem.salePrice* currentItem.qty
    },0).toFixed(2) ??0
    return (
    <div className='bg-gray-100 rounded-xl mb-6'>
        <div className="p-4">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center flex-1">
                    <div className="inline-flex items-center justify-center flex-shrink-0 bg-gray-400 rounded-full w-9 h-9 text-gray-50">
                        <ShoppingBag className='w-6 h-6'/>
                    </div>
                    <p className="ml-3 text-base font-normal text-gray-900">
                        You have {cartItem.length} items in cart. Sub Total is
                        <spam className="font-bold"> {subtotal}</spam>
                    </p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <Link href={'/cart'} className="inline-flex items-center px-4 py-2 text-sm font-bold text-gray-600 transition-all duration-200 border border-gray-300 rounded-md bg-gray-50 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-offset-1 focus:ring-gray-500">
                        Edit cart

                    </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}
