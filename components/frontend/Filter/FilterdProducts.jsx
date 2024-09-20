import { getData } from '@/lib/getData'
import React from 'react'
import Product from '../Product'
import Paginate from './Pagination'

export default async function FilterdProducts({products,productCount}) {
//  const products=await getData("products")
const pageSize=2;
 const totalPages=Math.ceil(productCount/ pageSize)
    return (
    <div className="">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {products && products.map((product,i)=>{
        return <Product product={product} key={i}/>
      })}
      
    </div>
    <div className="px-8 py-4">
    <Paginate totalPages={totalPages}/>
    </div>
    </div>
  )
}
