import Breedcrumb from '@/components/frontend/Breedcrumb'
import CategoryList from '@/components/frontend/CategoryList'
import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page({params:{slug}}) {
  const market=await getData(`markets/detail/${slug}`)
  const marketCategoryIds=market?.categoryIds
  const allCategories=await getData('categories')
  const categories=allCategories.filter((category)=>{
    return category.products.length>1
  })
  const marketCategories=allCategories.filter((category)=>marketCategoryIds.includes(category.id))
//  console.log( marketCategoryIds,allCategories)
  return (
    <>
    <Breedcrumb/>
    <div className=" text-slate-800 dark:text-slate-200 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700  overflow-hidden p-4 flex items-center gap-6">
    <div className="">
<Image src={market.logoUrl} alt='' height={50} width={50} className='w-16 h-16 rounded-full object-cover'/>
</div>
    <div className="">
    <h2 className='py-4 text-sm lg:text-4xl text-center'>{market.title}</h2>
     <p className='py-4 text-sm line-clamp-1 mb-4'>
    {market.description}
     </p>
    </div>
   
    </div>
    <div className='grid grid-cols-12 py-8 gap-4 w-full'>
      
      <div className="col-span-full sm:col-span-12 bg-blue-600 rounded-md">
        {marketCategories && marketCategories?.map((category,i)=>{
          return (
            <div className="py-8">
              <CategoryList isMarketPage={true} category={category}/>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
