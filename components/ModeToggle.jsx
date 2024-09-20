"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

export default function ModeToggle() {
  const { theme,setTheme } = useTheme()
  const[mounted,setMounted]=React.useState(false)
  React.useEffect(()=>{
    setMounted(true)
  },[])
  if(!mounted){
    return null;
  }
  return (
    <button className='text-lime-700 dark:text-lime-500' onClick={()=>setTheme(theme==='dark'?"light":"dark")}>
      {theme==="dark"?<Sun/>:<Moon/>}
    </button>
  )
}
