import AddToCartButton from '@/components/frontend/AddToCartButton'
import Breedcrumb from '@/components/frontend/Breedcrumb'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'
import ProductImageCarousel from '@/components/frontend/ProductImageCarousel'
import ProductShareButton from '@/components/frontend/ProductShare'
import { getData } from '@/lib/getData'
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ProductDetail({params:{slug}}) {
 const product=await getData(`products/product/${slug}`)
 const{id}=product
 const catId=product.categoryId;
 const category=await getData(`categories/${catId}`)
 const categoryProducts=category.products
const similarProducts=categoryProducts.filter((product)=>product.id!==id)
 const baseUrl=process.env.NEXT_PUBLIC_BASE_URL
const urlToShare=`${baseUrl}/products/${slug}`
 return (
    <div>
        <Breedcrumb/>
        {product && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
       <ProductImageCarousel productImages={product.productImages} thumbnail={product.imageUrl}/>
        <div className="col-span-full sm:col-span-2 lg:col-span-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className='text-xl lg:text-3xl font-semibold'>{product.title}</h2>
            <ProductShareButton urlToShare={urlToShare}/>
          </div>
         <div className="border-b border-gray-500">
         <p className='py-2 '>
          {product.description}
          </p>
          <div className="flex items-center gap-8 mb-4">
          <p>SKU: {product.sku}</p>
          <p className='bg-lime-100 py-1.5 px-4 rounded-full text-slate-900'>
            <b>Stock</b>:{product.productStock}</p>
          </div>
         </div>
          <div className="flex items-center gap-4 pt-4 border-b border-gray-500 pb-4">
            <div className="flex items-center gap-4">
            <h4 className='text-2xl'>{product.salePrice}</h4>
            <del className='text-slate-400 text-sm'>{product.productPrice}</del>
            </div>
            <p className='flex items-center '>
                <Tag className='w-4 h-4 text-slate-400 me-2'/>
                Save 50% right now</p>
          </div>
          <div className="flex justify-between items-center py-6">
            <AddToCartButton product={product}/>
           
          </div>
        </div>
        
      </div> }
      
      <div className=" bg-white dark:bg-slate-700 my-8 rounded-xl p-4">
        <h2 className='mb-4 text-2xl font-semibold text-slate-400 ml-3'>Similar Products</h2>
       {similarProducts &&  <CategoryCarousel products={similarProducts}/>}
       
       </div>
    </div>
  )
}
