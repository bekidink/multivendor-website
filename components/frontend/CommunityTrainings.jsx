import React from 'react'
import TrainingCarousel from './TrainingCarousel'
import { getData } from '@/lib/getData'
import BlogCard from './BlogCard'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

const CommunityTrainings =async ({title,trainings}) => {
    // const trainings=await getData('trainings')
  return (
    <section className="py-12 bg-white rounded-md shadow-lg dark:bg-slate-700 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className=" mx-auto md:mx-0">
          <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 sm:text-4xl">
            {title}
          </h2>
          <Link href='/blogs' className=' bg-gray-900 py-3 px-5 rounded flex items-center'>
          See All
          <MoveRight className='flex-shrink-0 mx-2'/>
           </Link>
          </div>
          
          <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-slate-200">
            Create custom landing pages with Rareblocks that converts more visitors than any website.
          </p>
        </div>

      {
        trainings.map((item,i)=>(
          <BlogCard training={item} key={i}/>
        ))
      }
      </div>
    </section>
  )
}

export default CommunityTrainings
