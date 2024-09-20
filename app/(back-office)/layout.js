"use client"
import Navbar from "@/components/backoffice/Navbar"
import Sidebar from "@/components/backoffice/Sidebar"
import { useState } from "react"



export default function Layout({ children }) {
  const [showSidebar,setShowSidebar]=useState(false)
  return (
   <div className="flex ">
    <Sidebar showSidebar={showSidebar}  setShowSidebar={setShowSidebar}/>
   <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
<Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
<main className=" mt-16 p-8 bg-slate-50 dark:bg-slate-900 text-slate-50 min-h-screen ">{children}</main>
   </div>

   </div>
  )
}
