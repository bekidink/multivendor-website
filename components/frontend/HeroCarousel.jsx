"use client"
import React from 'react'
import { Carousel } from 'nuka-carousel';
import Link from 'next/link';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
export default function HeroCarousel  ({banners}) {
   console.log(banners)
  return (
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={85}
    totalSlides={banners.length}
    
  >
    <Slider>
      {banners.map((item,i)=>{
return (
  <Slide index={i} key={i}>
    <Image src={item.imageUrl} alt='' fill className='w-full h-full object-cover' />
  </Slide>
)
      })}
     
    </Slider>
    
  </CarouselProvider>
  )
}

