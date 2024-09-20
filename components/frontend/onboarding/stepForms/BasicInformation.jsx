"use client"
import SubmitButton from '@/components/Forminputs/SubmitButton'
import TextInput from '@/components/Forminputs/TextInput'
import ToggleInput from '@/components/Forminputs/ToggleInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import NavButton from './NavButton'
import { useDispatch, useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import { setCurrentStep, updateonBoardingFormDataFormData } from '@/hook/slice/onBoardingSlice'

export default function BasicInformation() {
  const {data:session,status}=useSession()
  const userId=session?.user?.id
  console.log(userId)
    const[loading,setLoading]=useState(false)

    const currentStep=useSelector((store)=>store.onboarding.currentStep)
const onboardingData=useSelector((store)=>store.onboarding.onBoardingFormData)   
const dispatch=useDispatch()
    const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
        defaultValues:{
          ...onboardingData
        }
      });
      
    async function processData(data){
      data.userId=userId
      dispatch(updateonBoardingFormDataFormData(data))
      dispatch(setCurrentStep(currentStep+1))
    }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-600">Personal Details</h2>
         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label={"First Name"} name={"firstName"} errors={errors} register={register} className='w-full'/>
            <TextInput label={"Last Name"} name={"lastName"} errors={errors} register={register} className='w-full'/>
            <TextInput label={"Email Address"} name={"email"} errors={errors} register={register} type='email' className='w-full'/>
            <TextInput label={"Phone Number"} name={"phone"} errors={errors} register={register} type='tel' className='w-full'/>
          
        </div>
<NavButton/>
        
      
    </form>
  )
}
