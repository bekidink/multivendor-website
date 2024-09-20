"use client"
import ImageInput from '@/components/Forminputs/ImageInput'
import TextareaInput from '@/components/Forminputs/TextArea'
import ToggleInput from '@/components/Forminputs/ToggleInput'
import { ChevronRight, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import NavButton from './NavButton'
import { setCurrentStep, updateonBoardingFormDataFormData } from '@/hook/slice/onBoardingSlice'

export default function AdditionalInformation() {
  const [loading,setLoading]=useState(false)
  const [imageUrl, setImageUrl] = useState("");
  const onboardingData=useSelector((store)=>store.onboarding.onBoardingFormData)
  const cartItem=useSelector((state)=>state.cart) 
  const dispatch=useDispatch()
  const currentStep=useSelector((store)=>store.onboarding.currentStep)
  const subTotal=cartItem.reduce((acc,currentItem)=>{
   return acc+currentItem.salePrice*currentItem.qty
  },0).toFixed(2)??0
  const router=useRouter()
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
    defaultValues:{
      ...onboardingData
    }
  });
  async function processData(data){
    // data.userId=userId
    data.profileImageUrl = imageUrl;
    dispatch(updateonBoardingFormDataFormData(data))
    dispatch(setCurrentStep(currentStep+1))
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-600">Additional Information</h2>
         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
         <ImageInput label={"Farmer Profile"} imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='farmerImageUploader' />
         <TextareaInput
            label={"Farmer's Payment Terms"}
            name={"terms"}
            register={register}
            errors={errors}
          />
          <TextareaInput
            label={"Notes"}
            name={"notes"}
            register={register}
            errors={errors}
          />
          
        
         
        </div>
<NavButton/>
        
      
    </form>
  )
}
