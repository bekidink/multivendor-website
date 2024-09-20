"use client"

import * as React from "react"
import { ChevronsUpDown, Circle, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"

export default function PriceFilter({slug}) {
  const searchParams=useSearchParams()
  const minParam=searchParams.get("min")
  const maxParam=searchParams.get("max")
    const priceRanges=[{
        display:"under 200",
        max:200
    },
    {
        display:"Between 200 and 500",
        max:500,
        min:200
    },
    {
        display:"Between 500 and 1000",
        max:1000,
        min:500
    },
    {
        display:"Above 100",
        
        min:1000
    },
]
    const [isOpen, setIsOpen] = React.useState(false)
    const router=useRouter()
    const {handleSubmit,reset,register}=useForm()
    function onSubmit(data){
const {min,max}=data;
console.log('log')
if(min && max){
  router.push(`/category/${slug}?min=${min}&max=${max}`)
  // reset()
}else if(min){
  router.push(`/category/${slug}?min=${min}`)
  // reset()
} else if(max){
  router.push(`/category/${slug}?max=${max}`)
  // reset()
}
    }
  return (
    // <Collapsible
    //   open={isOpen}
    //   onOpenChange={setIsOpen}
    //   className="w-[350px] space-y-2"
    // >
    //   <div className="flex items-center justify-between space-x-4 px-4">
      
    //     <CollapsibleTrigger asChild >
        
    //       <Button variant="ghost" size="sm" className="w-9 p-0">
    //       <h2>Price</h2>
    //         <Plus className="h-4 w-4" />
           
    //       </Button>
    //     </CollapsibleTrigger>
    //   </div>
    //   <div className="rounded-md border px-4 py-3 font-mono text-sm">
    //     @radix-ui/primitives
    //   </div>
    //   <CollapsibleContent className="space-y-2">
    //     <div className="rounded-md border px-4 py-3 font-mono text-sm">
    //       @radix-ui/colors
    //     </div>
    //     <div className="rounded-md border px-4 py-3 font-mono text-sm">
    //       @stitches/react
    //     </div>
    //   </CollapsibleContent>
    // </Collapsible>
 <div >
  <div className="">
    <div className="flex justify-between  items-center">
    <h2 className="text-xl font-medium">Price</h2>
    <Link href={`/category/${slug}`} className="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-blue-500 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</Link>
    </div>
    <div className="flex flex-col gap-3">
    {
      priceRanges.map((range,i)=>{
        return (
          <Link className={`${(range.min && range.min==minParam)|| (range.max && range.max==maxParam)||(range.min&&range.max&&range.min==minParam&&range.max==maxParam)?" flex gap-2 items-center text-blue-600":" flex gap-2 items-center"}`} key={i} href={range.max && range.min ?`/category/${slug}?max=${range.max}&min=${range.min}`:range.max? `/category/${slug}?max=${range.max}`:`/category/${slug}?min=${range.min}`}>
           <Circle className="w-4 h-4 flex-shrink-0"/>
            {range.display}
          
          </Link>
        )
      })
    }
    </div>
    <form action="" onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4 my-4">
 <div className="col-span-1">
  <input {...register("min")} type="number" id="cvv-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-600" placeholder="Min"/>
 </div>
 <div className="col-span-1">
  <input {...register("max")} id="cv" type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-600" placeholder="Max"/>
 </div>
 <div className="col-span-1">
  <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    Go

  </button>
 </div>
    </form>
  </div>
 </div>
  )
}
