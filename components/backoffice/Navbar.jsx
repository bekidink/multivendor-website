"use client"
import { AlignJustify, Bell, LayoutDashboard, LogOut, PersonStanding, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ModeToggle from '../ModeToggle'
import Link from 'next/link'
import UserAvater from './UserAvater'
import { useSession } from 'next-auth/react'
  
const Navbar = ({setShowSidebar,showSidebar}) => {
 const {data:session,status}=useSession()
  return (
      <div className='flex items-center  justify-between dark:bg-slate-800 bg-white text-slate-50  h-20 px-8 py-8 z-50 fixed top-0 w-full sm:pr-[20rem]'>
      <Link href={"/dashboard"} className='sm:hidden'>
        Logo
      </Link>
        <button onClick={()=>setShowSidebar(!showSidebar)} className='text-lime-700 dark:text-lime-500'>
            <AlignJustify/>
        </button>
       <div className='flex space-x-3 '>
      <ModeToggle/>
        


<DropdownMenu>
  <DropdownMenuTrigger> <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300   dark:focus:ring-blue-800">
<Bell className='text-lime-700 dark:text-lime-500'/>
<span class="sr-only">Notifications</span>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">20</div>
</button></DropdownMenuTrigger>
  <DropdownMenuContent className="py-2 px-4">
    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
    <div className='flex items-center space-x-2'> 
       <Image src={'/img.jpg'} alt='' width={200} height={200} className='w-8 h-8 rounded-full'/>
        <div className="flex flex-col space-y-2">
            <p>Yellow Sweet Corn Stock out</p>
            <div className="flex items-center space-x-2">
                <p className='px-2 py-0.5 bg-red-700 text-white rounded-full text-center'>Stock Out</p>
                <p>Dec 12 2021- 12:40PM</p>
            </div>
        </div>
        <X/>
        </div>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
       <div className='flex items-center space-x-2'> 
       <Image src={'/img.jpg'} alt='' width={200} height={200} className='w-8 h-8 rounded-full'/>
        <div className="flex flex-col space-y-2">
            <p>Yellow Sweet Corn Stock out</p>
            <div className="flex items-center space-x-2">
                <p className='px-2 py-0.5 bg-red-700 text-white rounded-full text-center'>Stock Out</p>
                <p>Dec 12 2021- 12:40PM</p>
            </div>
        </div>
        <X/>
        </div>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
    <div className='flex items-center space-x-2'> 
       <Image src={'/img.jpg'} alt='' width={200} height={200} className='w-8 h-8 rounded-full'/>
        <div className="flex flex-col space-y-2">
            <p>Yellow Sweet Corn Stock out</p>
            <div className="flex items-center space-x-2">
                <p className='px-2 py-0.5 bg-red-700 text-white rounded-full text-center'>Stock Out</p>
                <p>Dec 12 2021- 12:40PM</p>
            </div>
        </div>
        <X/>
        </div>
        </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>   
       {status==="authenticated" && <UserAvater user={session?.user}/>}
       

       

       </div>
      </div>
  )
}

export default Navbar
