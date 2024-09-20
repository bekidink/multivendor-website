import React from 'react'
import MarketCarousel from './MarketCarousel'
import { getData } from '@/lib/getData'

const MarketList =async () => {
  const markets=await getData('markets')
  return (
    <div className='text-white py-16'>
      <div className="bg-slate-50 dark:bg-lime-900 rounded-lg p-4">
      <h2 className='py-2 text-center text-2xl text-slate-900 dark:text-slate-50 mb-3'>Shop By Market</h2>
      <MarketCarousel markets={markets}/>
      
      </div>
      
     
    </div>
  )
}

export default MarketList
