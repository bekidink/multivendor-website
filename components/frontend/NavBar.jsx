"use client"
import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import { HelpCircle, ShoppingCart, User } from 'lucide-react'
import ModeToggle from '../ModeToggle'
import HelpModal from './HelpModal'
import CartCount from './CartCount'
import { useSession } from 'next-auth/react'
import UserAvater from '../backoffice/UserAvater'

const NavBar = () => {
  const {data:session,status}=useSession()
  if(status==="loading"){
    return <p>Loading...</p>
  }
  return (
    <div className='bg-gray-50 dark:bg-lime-800'>
     
     <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8">
    <Link className='' href={"/"}>
        <Image src={"/logo.png"} alt='' className='w-24' width={24} height={24}/>
    </Link>
    <div className="flex-grow">
    <SearchForm/>
    </div>
    <div className="flex gap-8">
      {status==="unauthenticated"?(
        <Link href={"/login"}  className='flex items-center space-x-1 text-green-950 dark:text-slate-100'>
        <User/>
        <span>Login</span>
    </Link>
      ):(
        <UserAvater user={session?.user}/>
      )}


<HelpModal/>
<CartCount/>
    </div>
    <ModeToggle/>
     </div>
     
    </div>
  )
}

export default NavBar
