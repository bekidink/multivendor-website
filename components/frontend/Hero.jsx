import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import HeroCarousel from './HeroCarousel'
import { CircleDollarSign, FolderSync, HelpCircle } from 'lucide-react'
import SidebarCategories from './SidebarCategories'
import { getData } from '@/lib/getData'

const Hero =async () => {
   const banners= await getData('banners')
  return (
    <div className='grid grid-cols-12 gap-8 mb-6 px-8 lg:px-0'>
      <SidebarCategories/>
      <div className=" col-span-full sm:col-span-7  overflow-hidden rounded-md bg-white dark:bg-slate-800">
        <HeroCarousel banners={banners}/>
      </div>
      <div className="col-span-2 hidden sm:block bg-white p-3 dark:bg-slate-800 rounded-lg">
<Link href={"#"} className="flex items-center space-x-1 mb-3">
    <HelpCircle className='shrink-0 w-5 h-5 text-lime'/>
    <div className="flex flex-col gap-2">
        <h2 className='uppercase'>Help Center</h2>
        <p className='text-[0.8rem] text-sm'>Guide to Customer Care</p>
    </div>
</Link>
<Link href={"#"} className="flex items-center space-x-1 mb-3">
    <FolderSync className='shrink-0 w-5 h-5 text-lime-500'/>
    <div className="flex flex-col gap-2">
        <h2 className='uppercase'>Easy Return</h2>
        <p className='text-[0.8rem] text-sm'>Quick Return</p>
    </div>
</Link>
<Link href={"/register-farmer"} className="flex items-center space-x-1 mb-3">
    <CircleDollarSign className='shrink-0 w-5 h-5 text-lime-500'/>
    <div className="flex flex-col gap-2">
        <h2 className='uppercase'>Sell on Beki</h2>
        <p className='text-[0.8rem] text-sm'>Million of Vistors</p>
    </div>
</Link>
<Image src={"/logo.png"} alt='' width={150} height={150} className='w-full'/>
      </div>
    </div>
  )
}

export default Hero
