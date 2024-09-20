"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TrainingCarousel = ({trainings}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const slides=[
        {
        imageUrl:"/img.jpg",
        title:"vegtables"
      },
      {
        imageUrl:"/logo.png",
        title:"vegtables"
      },
      {
        imageUrl:"/img.jpg",
        title:"vegtables"
      },
      {
        imageUrl:"/logo.png",
        title:"vegtables"
      },
      {
        imageUrl:"/img.jpg",
        title:"vegtables"
      },
       {
        imageUrl:"/img.jpg",
        title:"vegtables"
      },
      {
        imageUrl:"/logo.png",
        title:"vegtables"
      },
      {
        imageUrl:"/logo.png",
        title:"vegtables"
      }
    ]
  return (
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="px-4"
>
 
  {trainings.map((slide,i)=>{
    return (
 <div  key={i} className='rounded-lg mr-3 bg-white dark:bg-slate-900 overflow-hidden'>
    <Link href={"#"}>
    <Image src={slide.imageUrl} alt='' width={556} height={556} className='w-full h-48 object-cover'/>
    </Link>
   
    <h2 className='text-center text-slate-800 dark:text-slate-200 my-2 text-2xl'>{slide.title}</h2>
    <p className='px-4 line-clamp-3 text-slate-800 dark:text-slate-100'>
    {slide.content}
    </p>
    <div className="flex justify-between items-center">
    <Link className='bg-lime-900 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2' href={"#"}>Read More</Link>
    <Link href={"#"} className='text-slate-800 dark:text-slate-100 '>
    Talk to Consolutant</Link>
    </div>
  </div >
    )
  })}
</Carousel>
  )
}

export default TrainingCarousel
