'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Page() {
    const {data:session,status}=useSession()
    const {name}=session?.user
  return (
    <div>
      welcome {name}
    </div>
  )
}
