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
        {product && <div className="grid grid-cols-12 gap-5">
       <ProductImageCarousel productImages={product.productImages} thumbnail={product.imageUrl}/>
        <div className="col-span-6">
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
        <div className="col-span-3 sm:block bg-white border border-gray-200 rounded-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700  text-slate-800 overflow-hidden shadow-md">
        <h2 className='bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-50 py-4 px-6 font-semibold border-b border-gray-300 dark:border-gray-600'>
       DELIVERY & RETURNS
    </h2>
    <div className="px-4">
    <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
      <span>Beki Express</span>
      <Send/>
    </div>
    </div>
   <div className="py-3 text-slate-100 border-b border-gray-500">
    Eligible for Free Delivery
    <Link href={"#"}>View Details</Link>
   </div>
   <h2 className='text-slate-200 py-2'>Choose your Location</h2>
   <div className="border-b border-gray-500 mb-3">
   <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
   </div>
   <div className="border-b border-gray-500 mb-3">
   <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a state</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
   </div>
   <div className="border-b border-gray-500 mb-3">
   <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a city</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
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
