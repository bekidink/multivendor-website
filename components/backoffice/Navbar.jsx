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
        


   
       {status==="authenticated" && <UserAvater user={session?.user}/>}
       

       

       </div>
      </div>
  )
}

export default Navbar
