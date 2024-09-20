"use client"
import ImageInput from '@/components/Forminputs/ImageInput'
import QuillEditor from '@/components/Forminputs/QuillEditor'
import SelectInput from '@/components/Forminputs/SelectInput'
import SubmitButton from '@/components/Forminputs/SubmitButton'
import TextareaInput from '@/components/Forminputs/TextArea'
import TextInput from '@/components/Forminputs/TextInput'
import ToggleInput from '@/components/Forminputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import generateCouponCode from '@/lib/generateCouponCode'
import { generateSlug } from '@/lib/generateSlug'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


const NewTrainingForm = ({categories,updateData={}}) => {
  const initialImageUrl=updateData?.imageUrl ?? ""
  const initialContent=updateData?.content ?? ""
  const[imageUrl,setImageUrl]=useState(initialImageUrl)
  const [content, setContent] = useState(initialContent);
//Custom Tool Bar
const Id=updateData?.id ?? ""
 
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
  router.push('/dashboard/community')
  }
  async function onSubmit(data){
    setLoading(true)
    const slug=generateSlug(data.title)
    data.slug=slug;
    data.imageUrl=imageUrl
    data.content=content
    if(Id){
      makePutRequest(setLoading,`api/trainings/${Id}`,data,'Training',redirect)
    }else{
      makePostRequest(setLoading,'api/trainings',data,'Training ',reset,redirect)
    }

   
    setLoading(false)
    setImageUrl("")
    setContent("")
  }
    return (
    <div>
     
     <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label={"Training Title"} name={"title"} errors={errors} register={register} className='w-full'/>
            <SelectInput label={"Select Category"} name={"categoryId"} register={register} errors={errors} className='w-full'  options={categories}/>
            <TextInput label={"Training Description"} name={"description"} errors={errors} register={register} />
           <ImageInput label={"Training Thumbnail"} imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='imageUploader' />
           <QuillEditor label={"Training Content"} value={content} onChange={setContent}/>
           <ToggleInput
  label="Publish your Training"
   name={isActive}
   trueTitle="Active"
   falseTitle="Draft"
   register={register}
  />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={Id? "Update Training":"Create Training"} loadingButtonTitle={Id? "Updating Training please wait...":"Creating Training please wait..."}/>
     </form>
    </div>
  )
}

export default NewTrainingForm
