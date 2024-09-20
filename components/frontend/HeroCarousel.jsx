"use client"
import React from 'react'
import { Carousel } from 'nuka-carousel';
import Link from 'next/link';
import Image from 'next/image';
export default function HeroCarousel  ({banners}) {
   
  return (
   <Carousel  className='overflow-hidden ' showDots showArrows   >
       {banners.map((banner,i)=>{
        return (
          <Image key={i} width={712} height={384} src={banner.imageUrl} className='w-full' alt=''/>

        )
       })}
        
    
       
 
    
 <Image width={384} height={384} src={"/img.jpg"} className='w-full' alt=''/>
    {/* <img src='/img.jpg' className='h-[350px] w-full' />
    <img src='/img.jpg' className='h-[350px] w-full' />
    <img src='/img.jpg' className='h-[350px] w-full' />
    <img src='/img.jpg' className='h-[350px] w-full' />
    <img src='/img.jpg' className='h-[350px] w-full'/> */}
   </Carousel>
  )
}

