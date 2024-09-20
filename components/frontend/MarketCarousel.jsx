"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MarketCarousel = ({markets}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
     
  return (
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="px-4"
>
 
  {markets.map((slide,i)=>{
    return (
 <Link href={`/market/${slide.slug}`} key={i} className='rounded-lg mr-3  '>
    <Image src={slide.logoUrl} alt='' width={556} height={556} className='w-full rounded-2xl'/>
    <h2 className='text-center text-slate-800 dark:text-slate-200 mt-2'>{slide.title}</h2>
  </Link >
    )
  })}
</Carousel>
  )
}

export default MarketCarousel
