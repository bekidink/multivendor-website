import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'

const CategoryList = ({category,isMarketPage=false}) => {
  console.log(category.title)
  return (
    <div className='bg-white border border-gray-200 rounded-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700  text-slate-800 overflow-hidden shadow-md'>
      <div className='flex justify-between items-center bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-slate-50 py-4 px-6 font-semibold border-b border-gray-300 dark:border-gray-600'>
           <h2>Shop By {category.title}</h2>
           <Link className='bg-lime-900 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2' href={`/category/${category.slug}`}>See All</Link>
      
        </div>
        <div className="p-4 b-white dark:bg-slate-700">
        <CategoryCarousel products={category.products} isMarketPage={isMarketPage}/>
       </div>
    </div>
  )
}

export default CategoryList
