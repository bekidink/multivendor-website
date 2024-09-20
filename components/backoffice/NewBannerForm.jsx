"use client"
import ImageInput from '@/components/Forminputs/ImageInput'
import SelectInput from '@/components/Forminputs/SelectInput'
import SubmitButton from '@/components/Forminputs/SubmitButton'
import TextareaInput from '@/components/Forminputs/TextArea'
import TextInput from '@/components/Forminputs/TextInput'
import ToggleInput from '@/components/Forminputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewBannerForm = ({updateData={}}) => {
    const initialImageUrl=updateData?.imageUrl ?? ""
  const[imageUrl,setImageUrl]=useState(initialImageUrl)  
  const[loading,setLoading]=useState(false)
  const Id=updateData?.id ?? ""
  const markets=[
    {
      id:1,
      title:"Sproutes Farmers Market"
    },
    {
      id:2,
      title:"Sproutes Farmers Market"
    },
    {
      id:3,
      title:"Sproutes Farmers Market"
    },
    {
      id:4,
      title:"Sproutes Farmers Market"
    },
    {
      id:5,
      title:"Sproutes Farmers Market"
    }
  ]
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
    defaultValues: {
      isActive: true,
      ...updateData
    },
  });
  const isActive = watch("isActive");
  const router=useRouter()
  function redirect(){
 router.push("/dashboard/banners")
  }
  async function onSubmit(data){
    setLoading(true)
    
    data.imageUrl=imageUrl
    if(Id){
data.id=Id
makePutRequest(setLoading,`api/banners/${Id}`,data,'Banner',redirect)
    }else{
        makePostRequest(setLoading,'api/banners',data,'Banner ',reset,redirect)
    }
   
console.log(data)
  }
    return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label={"Banner Title"} name={"title"} errors={errors} register={register} className='w-full'/>
            <TextInput label={"Banner Link"} name={"link"} errors={errors} register={register} className='w-full'/>
           <ImageInput label={"Banner Image"} imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='imageUploader' />
           <ToggleInput
  label="Publish your Banner"
   name={isActive}
   trueTitle="Active"
   falseTitle="Draft"
   register={register}
  />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={ Id?"Update Banner":"Create Banner"} loadingButtonTitle={Id?"Updating Banner,please wait...":"Creating Banner please wait..."}/>
     </form>
    </div>
  )
}

export default NewBannerForm
