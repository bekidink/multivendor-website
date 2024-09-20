import Footer from '@/components/frontend/Footer'
import NavBar from '@/components/frontend/NavBar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
      <div className='max-w-6xl mx-auto py-6 px-8 lg:px-0'>
      {children}
      </div>
    <Footer/>


    
    </div>
  )
}

export default Layout
