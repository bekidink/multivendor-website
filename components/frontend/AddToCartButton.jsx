"use client"
import { addToCart } from '@/hook/slice/cartslice'
import { BaggageClaim } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function AddToCartButton({product}) {
    const dispatch =useDispatch()
    function handleAddToCart(){
        dispatch(addToCart(product))
        toast.success("Item added Successfully")
    }
  return (
    <button onClick={()=>handleAddToCart()} className='flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white'>
      <BaggageClaim/>
      <span>Add</span>
      </button>
  )
}

