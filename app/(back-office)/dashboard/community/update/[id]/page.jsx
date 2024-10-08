import FormHeader from '@/components/backoffice/FormHeader'
import NewTrainingForm from '@/components/backoffice/NewTrainingForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function updateTraining({params:{id}}) {
    const training=await getData(`trainings/${id}`)||null
    const categoriesData=await getData("categories")||[]
  const categories=categoriesData.map((category)=>{
    return{
      id:category.id,
      title:category.title
    }
  })
  return (
    <div>
         <FormHeader title={"Update Training"}/>
      <NewTrainingForm categories={categories} updateData={training}/>
    </div>
  )
}
