
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BreadCrumb from './BreadCrumb'
import Sorting from './Sorting'
import Filters from './Filters'
import FilterdProducts from './FilterdProducts'

export default function FilterComponent({category,products}) {
 const {title,slug}=category
 const productCount=category.products.length;
    return (
    <div>
     <div className="bg-white space-y-6 text-slate-900 py-8 px-4 text-xs">
        <BreadCrumb title={title} resultCount={productCount}/>
        <Sorting title={title} slug={slug} isSearch={category?.isSearch} />
     </div>
     <div className="grid grid-cols-12 py-8">
        <div className="col-span-3">
<Filters slug={slug}/>
        </div>
        <div className="col-span-9">
  {products.length>0 && <FilterdProducts products={products} productCount={productCount}/> }          

        </div>
     </div>
    </div>
  )
}
