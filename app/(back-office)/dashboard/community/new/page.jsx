"use client"
import FormHeader from '@/components/backoffice/FormHeader'
import NewTrainingForm from '@/components/backoffice/NewTrainingForm'
import { getData } from '@/lib/getData'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getData("categories") || [];
      const formattedCategories = categoriesData.map((category) => ({
        id: category.id,
        title: category.title,
      }));
      setCategories(formattedCategories);
    };

    fetchData();
  }, []);
  return (
   <div>
     <FormHeader title={"New Training"}/>
    {categories && <NewTrainingForm categories={categories}/>}
   </div>
  )
}

export default Page
