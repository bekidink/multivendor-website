"use client"
import ImageInput from '@/components/Forminputs/ImageInput'
import SelectInput from '@/components/Forminputs/SelectInput'
import SubmitButton from '@/components/Forminputs/SubmitButton'
import TextareaInput from '@/components/Forminputs/TextArea'
import TextInput from '@/components/Forminputs/TextInput'
import ToggleInput from '@/components/Forminputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewMarketForm = ({categories,updateData={}}) => {
  const initialImageUrl=updateData?.logoUrl ?? ""
  const[imageUrl,setImageUrl]=useState(initialImageUrl)  
  const[loading,setLoading]=useState(false)
 
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
    defaultValues: {
      isActive: true,
      ...updateData
    },
  });
  const isActive = watch("isActive");
  const router=useRouter()
  function redirect(){
 router.push("/dashboard/markets")
  }
  async function onSubmit(data){
    setLoading(true)
    const slug=generateSlug(data.title)
    data.slug=slug
    data.logoUrl=imageUrl
    data.catagoryIds=[]
    makePostRequest(setLoading,'api/markets',data,'Market ',reset,redirect)
console.log(data)
  }
    return (
    <div>
    
     <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label={"Market Title"} name={"title"} errors={errors} register={register} />
           <SelectInput label={"Select Categories"} name={"categoryIds"} register={register} errors={errors} className='w-full' options={categories}  />
           <TextareaInput label={"Market Description"} name={"description"} register={register} errors={errors} />
           <ImageInput label={"Market Image"} imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='imageUploader' />
           <ToggleInput
  label="Publish your Market"
   name={isActive}
   trueTitle="Active"
   falseTitle="Draft"
   register={register}
  />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={"Create Market"} loadingButtonTitle={"Creating Market please wait..."}/>
     </form>
    </div>
  )
}

export default NewMarketForm
