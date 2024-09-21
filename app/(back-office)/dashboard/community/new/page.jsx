import FormHeader from '@/components/backoffice/FormHeader'
import NewTrainingForm from '@/components/backoffice/NewTrainingForm'
import { getData } from '@/lib/getData'
import React from 'react'

const page = async() => {
  const categoriesData=await getData("categories")||[]
  let categories=[]
  if(categoriesData){
    categories=categoriesData?.map((category)=>{
      return{
        id:category.id,
        title:category.title
      }
    })
  }
  
  return (
   <div>
     <FormHeader title={"New Training"}/>
    {categories && <NewTrainingForm categories={categories}/>}
   </div>
  )
}

export default page
