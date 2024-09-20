"use client"
import { addToCart } from '@/hook/slice/cartslice'
import { BaggageClaim } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function Product({product}) {
    const dispatch=useDispatch()
    function handleAddToCart(){
dispatch(addToCart(product))
toast.success("Item added Successfully")
    }
  return (
    <div   className='rounded-lg mr-3 bg-white dark:bg-slate-900 overflow-hidden border shadow-md '>
   <Link href={`/products/${product.slug}`}>
   <Image src={product.imageUrl} alt='' width={556} height={556} className='w-full h-48 object-cover'/>
   </Link>
   <p className='px-4'>
   <Link href={`/products/${product.slug}`}>
    <h2 className='text-center text-slate-800 dark:text-slate-200 mt-2'>{product.title}</h2>
    </Link>
   </p>

   <div className="flex justify-between gap-2 pb-3 px-4">
    <p className='text-slate-800 dark:text-slate-200'>{product.salePrice}</p>
    <button onClick={handleAddToCart} className='flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white'>
      <BaggageClaim/>
      <span>Add</span>
      </button>
   </div>
  </div >
  )
}
