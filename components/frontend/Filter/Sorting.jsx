"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

export default function Sorting({title,slug,isSearch}) {
    const pathname=usePathname()
    const searchParams=useSearchParams()
    const href=`/category/${slug}`
    const highToLow=`/category/${slug}?sort=desc`
    const lowToHigh=`/category/${slug}?sort=asc`
    const sortParam=searchParams.get("sort")
    const sortingLinks=[
    {
        title:"Relevance",
        href:`/category/${slug}`,
        sort:null
    },
    {
        title:"High To Low",
        href:`/category/${slug}?sort=desc`,
         sort:"desc"
    },
    {
        title:" Low To High",
        href:`/category/${slug}?sort=asc`,
         sort:"asc"
    },

   ]
    return (
    <div className="flex items-center justify-between">
            <h2 className='text-2xl font-medium'>{isSearch && "Search Results - "} {title}</h2>
        <div className="flex text-sm items-center gap-3">
            <p>Sort by:</p>
            <div className="flex items-center">
               {
                sortingLinks.map((sort,i)=>(
                    <Link key={i} className={`${sortParam===sort.sort?"bg-slate-800 text-lime-400 border border-lime-500 px-2 py-1":"border border-slate-500 px-2 py-1"}`} href={sort.href}>
                {sort.title}</Link>
                ))
               }
               
              
               
            </div>
        </div>
        </div>
  )
}
