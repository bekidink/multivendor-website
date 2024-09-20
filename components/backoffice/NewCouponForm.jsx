"use client"
import ImageInput from '@/components/Forminputs/ImageInput'
import SubmitButton from '@/components/Forminputs/SubmitButton'
import TextareaInput from '@/components/Forminputs/TextArea'
import TextInput from '@/components/Forminputs/TextInput'
import ToggleInput from '@/components/Forminputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { convertIsoDateToNormal } from '@/lib/convertIsoDateToNormal'
import generateCouponCode from '@/lib/generateCouponCode'
import { generateIsoFormattedDate } from '@/lib/generateIsoFormattedDate'
import { generateSlug } from '@/lib/generateSlug'
import { X } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewCouponForm = ({updateData={}}) => {
  const {data:session,status}=useSession()
 
  if(status==="loading"){
    return <p>Loading...</p>
  }
  const expiryDateNormal=convertIsoDateToNormal(updateData.expiryDate)  
  const initialImageUrl=updateData?.imageUrl ?? ""
  const[imageUrl,setImageUrl]=useState(initialImageUrl)
  const Id=updateData?.id ?? ""
  const vendorId=session?.user?.id
  updateData.expiryDate=expiryDateNormal
  const[loading,setLoading]=useState(false)
  const{register,handleSubmit,watch,formState:{errors},reset}=useForm({
    defaultValues: {
      isActive: true,
      ...updateData
    },
  });
  const title=watch('title')
  const expiryDate=watch('expiryDate')
  const isActive = watch("isActive");
  const router=useRouter()
  function redirect(){
 router.push("/dashboard/coupons")
  }
  async function onSubmit(data){
    setLoading(true)
    data.vendorId=vendorId
    data.imageUrl=imageUrl
const couponCode=generateCouponCode(data.title,data.expiryDate)
const isoFormatedDate=generateIsoFormattedDate(data.expiryDate)
data.couponCode=couponCode
data.expiryDate=isoFormatedDate
if(Id){
    data.id=Id
makePutRequest(setLoading,`api/coupons/${Id}`,data,'Coupon',redirect)
}else{
    makePostRequest(setLoading,'api/coupons',data,'Coupon ',reset,redirect)
}
    
    setLoading(false)
  }
    return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label={"Coupon Title"} name={"title"} errors={errors} register={register}/>
            <TextInput label={"Expiry Date"} name={"expiryDate"} errors={errors} register={register} type='date' className='w-full'/>
           <ToggleInput
  label="Publish your Coupon"
   name={isActive}
   trueTitle="Active"
   falseTitle="Draft"
   register={register}
  />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={Id?"Update Coupon": "Create Coupon"} loadingButtonTitle={Id?"Updating Coupon please wait...":"Creating Coupon please wait..."}/>
     </form>
    </div>
  )
}

export default NewCouponForm
