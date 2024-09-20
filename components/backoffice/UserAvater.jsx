"use client"
import React from 'react'
import { AlignJustify, Bell, LayoutDashboard, LogOut, PersonStanding, Settings, Sun, User, X } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { generateInitials } from '@/lib/generateInitials'
export default function UserAvater({user}) {
    // const router=useRouter()
    const role=user?.role
    const initials=generateInitials(user?.name)
   async function handleLogout(){
   await signOut()
//    router.push("/")
    }

  return (
    <DropdownMenu>
    <DropdownMenuTrigger> <button>
    <div className='w-8 h-8 flex items-center justify-center rounded-full bg-slate-300 dark:bg-slate-900'>{initials}</div>
      {/* {image?(
         <Image src={'/img.jpg'} alt='' width={200} height={200} className='w-8 h-8 rounded-full'/>
      ):(
       
      )} */}
     </button></DropdownMenuTrigger>
    <DropdownMenuContent className="py-2 px-4">
      <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
         <Link href={'/dashboard'} className='flex items-center space-x-2 shadow-md border border-slate-600'>
         <LayoutDashboard className='mr-2 h-4 w-4'/>
          <span>Dashboard</span>
         </Link >
      </DropdownMenuItem>
      <DropdownMenuItem>
         <Link href={'/dashboard/profile'} className='flex items-center space-x-2'> <Settings className='mr-2 h-4 w-4'/>
          <span>Edit Profile</span></Link>
      </DropdownMenuItem>
      {role==="USER" && (
        <DropdownMenuItem>
        <Link href={'/dashboard/orders'} className='flex items-center space-x-2'> <Settings className='mr-2 h-4 w-4'/>
         <span>My Order</span></Link>
     </DropdownMenuItem>
      )}
      <DropdownMenuItem>
        <button className='flex items-center space-x-2'>  <LogOut className='mr-2 h-4 w-4'/>
          <span>Logout</span></button>
          </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
