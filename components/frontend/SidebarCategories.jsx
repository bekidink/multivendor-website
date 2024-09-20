import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function  SidebarCategories ()  {
   const categoriesData=await getData('categories')
    const categories=categoriesData.filter((category)=>category.products.length>0)
    console.log(categories)
  return (
    <div className="col-span-3 sm:block bg-white border border-gray-200 rounded-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700  text-slate-800 overflow-hidden shadow-md">
    <h2 className='bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-50 py-4 px-6 font-semibold border-b border-gray-300 dark:border-gray-600'>
        Shop By Category
    </h2>
    <div className="py-3 px-6 h-[300px] overflow-y-auto flex flex-col gap-4">
       
        {categories.map((category,i)=>{
            return (
                <Link key={i} href={`/category/${category.slug}`} className='flex items-center gap-3 text-slate-800 dark:text-slate-50 hover:bg-slate-50 dark:hover:bg-slate-600 duration-500 transition-all rounded-md'>
                <Image className='w-14 h-14 rounded-full object-cover border border-lime-300' width={556} height={556} src={category.imageUrl} alt=''/>
                <span className='text-sm'>{category.title}</span>
                </Link>
            )
        })}
    </div>
  </div>
  )
}

