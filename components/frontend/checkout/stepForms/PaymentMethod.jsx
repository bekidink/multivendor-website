import React, { useState } from 'react'
import NavButton from './NavButton'
import { Circle, CreditCard, HeartHandshake } from 'lucide-react'
import { useForm } from 'react-hook-form';
import { setCurrentStep, updateCheckoutFormData } from '@/hook/slice/checkoutSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function PaymentMethod() {
  const [paymentMethod,setPaymentMethod]=useState('')
  const currentStep=useSelector((store)=>store.checkout.currentStep)
  const existingFormData=useSelector((store)=>store.checkout.checkoutFormData)
  const dispatch=useDispatch()
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
       defaultValues:{
        ...existingFormData
       } 
  });
  
async function processData(data){
  data.paymentMethod=paymentMethod
  dispatch(updateCheckoutFormData(data))
  dispatch(setCurrentStep(currentStep+1))
} return (
    <form onSubmit={handleSubmit(processData)}>
     <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
           
<div className="col-span-full">
<h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Payment Method</h3>

<ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input  type="radio" id="cheap" name="cheap" value="cash-delivery" class="hidden peer" required onChange={(e)=>setPaymentMethod(e.target.value)}/>
        <label for="cheap" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
         <div className="flex gap-2 items-center">
          <HeartHandshake className='w-8 h-8 ms-3 flex-shrink-0'/>
          <div className="">
            <p>
              Cash On Delivery
            </p>
          </div>
          </div>  
          <Circle className='w-5 h-5 ms-3 '/> 
        </label>
    </li>
    {/* <li>
        <input   type="radio" id="creditCard" name="credit-card" value="creditCard" class="hidden peer" required onChange={(e)=>setPaymentMethod(e.target.value)} />
        <label for="creditCard" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
         <div className="flex gap-2 items-center">
          <CreditCard className='w-8 h-8 ms-3 flex-shrink-0'/>
            <p>Credit Card</p>
          </div>  
          <Circle className='w-5 h-5 ms-3 '/> 
        </label>
    </li> */}
    <li>
        <input  type="radio" id="credit-card" name="credit-card" value="credit-card" class="hidden peer" required onChange={(e)=>setPaymentMethod(e.target.value)}/>
        <label for="credit-card" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
         <div className="flex gap-2 items-center">
          <HeartHandshake className='w-8 h-8 ms-3 flex-shrink-0'/>
          <div className="">
            <p>
              Credit Card
            </p>
          </div>
          </div>  
          <Circle className='w-5 h-5 ms-3 '/> 
        </label>
    </li>
</ul>
</div>

        </div>
<NavButton/> 
    </form>
  )
}
