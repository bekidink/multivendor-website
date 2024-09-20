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

const NewCategoryForm = ({updateData={},markets}) => {
  const initialImageUrl=updateData?.imageUrl ?? ""
    const[imageUrl,setImageUrl]=useState(initialImageUrl)  
  const[loading,setLoading]=useState(false)
  const categoryId=updateData?.id ?? ""
  
  
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  const router=useRouter()
  function redirect(){
 router.push("/dashboard/categories")
  }
  const isActive = watch("isActive");
  async function onSubmit(data){
    setLoading(true)
    const slug=generateSlug(data.title)
    data.slug=slug
    data.imageUrl=imageUrl
    if(categoryId){
data.id=categoryId
makePutRequest(setLoading,`api/categories/${id}`,data,'Category',redirect)
    }else{
        makePostRequest(setLoading,'api/categories',data,'Category ',reset,redirect)

    }
console.log(data)
  }
    return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label={"Category Title"} name={"title"} errors={errors} register={register} className='w-full'/>
         <SelectInput label={"Select Market"} name={"marketIds"} register={register} errors={errors} className='w-full'  options={markets} multiple={true}/>
           <TextareaInput label={"Category Description"} name={"description"} register={register} errors={errors} />
           <ImageInput label={"Category Image"} imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='imageUploader' />
           <ToggleInput
  label="Publish your Category"
   name={isActive}
   trueTitle="Active"
   falseTitle="Draft"
   register={register}
  />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={categoryId?" Update Category": "Create Category"} loadingButtonTitle={categoryId?"Updating Category please wait...": "Creating Category please wait..."}/>
     </form>
    </div>
  )
}

export default NewCategoryForm
