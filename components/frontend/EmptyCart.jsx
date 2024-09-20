import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='md:text-2xl'>
        Your Cart is empty <Link className='text-slate-800 dark:text-lime-500' href={'/'}>Start Shopping</Link>
      </p>
    </div>
  )
}
