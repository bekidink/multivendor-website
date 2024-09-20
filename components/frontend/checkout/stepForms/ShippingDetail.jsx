"use client"
import React, { useState } from 'react'
import NavButton from './NavButton'
import { useForm } from 'react-hook-form';
import TextInput from '@/components/Forminputs/TextInput';
import { Circle, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/hook/slice/checkoutSlice';

export default function ShippingDetail() {
  const currentStep=useSelector((store)=>store.checkout.currentStep)
  const existingFormData=useSelector((store)=>store.checkout.checkoutFormData)
  const dispatch=useDispatch()
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
        defaultValues:{
          ...existingFormData
        }
  });
  const initialShippingCost=existingFormData.shippingCost || ""
  const [shippingCost,setShippingCost]=useState(initialShippingCost)
async function processData(data){
  data.shippingCost=shippingCost
  dispatch(updateCheckoutFormData(data))
  dispatch(setCurrentStep(currentStep+1))
}
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-600">Shipping Details</h2>
         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label={"Street Address"} name={"streetAddress"} errors={errors} register={register} className='w-full'/>
            <TextInput label={"District Address"} name={"district"} errors={errors} register={register}  className='w-full'/>
            <TextInput label={"City"} name={"city"} errors={errors} register={register} className='w-full'/>
            <TextInput label={"Country"} name={"country"} errors={errors} register={register}  className='w-full'/>
            
          
<div className="col-span-full">
<h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>

<ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input  type="radio" id="cheap" name="cheap" value="8" class="hidden peer" required onChange={(e)=>setShippingCost(e.target.value)}/>
        <label for="cheap" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
         <div className="flex gap-2 items-center">
          <Truck className='w-8 h-8 ms-3 flex-shrink-0'/>
          <div className="">
            <p>UPS</p>
            <p>Delivery Cost:45</p>
          </div>
          </div>  
          <Circle className='w-5 h-5 ms-3 '/> 
        </label>
    </li>
    <li>
        <input   type="radio" id="expensive" name="expensive-cost" value="23" class="hidden peer" required onChange={(e)=>setShippingCost(e.target.value)} />
        <label for="expensive" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
         <div className="flex gap-2 items-center">
          <Truck className='w-8 h-8 ms-3 flex-shrink-0'/>
          <div className="">
            <p>UPS</p>
            <p>Delivery Cost:67</p>
          </div>
          </div>  
          <Circle className='w-5 h-5 ms-3 '/> 
        </label>
    </li>
    {/* <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for large websites</div>
            </div>
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li> */}
</ul>
</div>

        </div>
<NavButton/>
        
      
    </form>
  )
}
