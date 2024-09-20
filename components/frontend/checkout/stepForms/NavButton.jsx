"use client"
import { setCurrentStep } from '@/hook/slice/checkoutSlice'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function NavButton() {
    const currentStep=useSelector((store)=>store.checkout.currentStep)
    const dispatch=useDispatch()
    async function handlePrevious(){
dispatch(setCurrentStep(currentStep-1))
 }
    return (
    <div className='flex justify-between items-center'>
        {currentStep>1&&(  <button 
        onClick={handlePrevious}
        type='button' className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 dark:bg-lime-600 hover:bg-slate-800 dark:hover:bg-lime-700">
            <ChevronLeft className='w-5 h-5 mr-2'/>
            <span>Previous</span>

        </button>)}
        <button type='submit' className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 dark:bg-lime-600 hover:bg-slate-800 dark:hover:bg-lime-700">
            <ChevronRight className='w-5 h-5 mr-2'/>
            <span>Next</span>

        </button>
      
      
    </div>
  )
}
