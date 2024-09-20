"use client"
import React, { useState } from 'react'
import NavButton from './NavButton'
import { useForm } from 'react-hook-form';
import TextInput from '@/components/Forminputs/TextInput';
import { Circle, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateonBoardingFormDataFormData } from '@/hook/slice/onBoardingSlice';
import ItemsInput from '@/components/Forminputs/ItemsInput';

export default function FarmDetails() {
  const currentStep=useSelector((store)=>store.onboarding.currentStep)
  const onboardingData=useSelector((store)=>store.onboarding.onBoardingFormData)   
  const dispatch=useDispatch()
  const initialtags= []
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState(initialtags);
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
        defaultValues:{
          ...onboardingData
        }
  });
  // const initialShippingCost=onboardingData.shippingCost || ""
  // const [shippingCost,setShippingCost]=useState(initialShippingCost)
async function processData(data){
  data.products=tags
  dispatch(updateonBoardingFormDataFormData(data))
  dispatch(setCurrentStep(currentStep+1))
}
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-600">Shipping Details</h2>
         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
         <TextInput
            label={"What is the size of Your Lands in Accres"}
            name={"landSize"}
            errors={errors}
            register={register}
            type="number"
            className="w-full"
          />
           <TextInput
            label={"What is your main Crop that you Cultivate"}
            name={"mainCrop"}
            errors={errors}
            register={register}
            className="w-full"
          />
          
          <ItemsInput setItems={setTags} items={tags} itemTitle="Product"/>

        </div>
<NavButton/>
        
      
    </form>
  )
}
