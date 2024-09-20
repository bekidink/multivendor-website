import React from 'react'

export default function OverViewCards({sales,products}) {
 const productsCount=products.length.toString().padStart(2,"0");
 const salesCount=sales.length;
 const totalSales=sales.reduce((acc,item)=>acc + item.total,0)
 const analytics=[
    {
        title:"Products",
        count:productsCount,
        unit:"",
        link:"dashboard/products",
        icon:""
    },
    {
        title:"Sales",
        count:salesCount,
        unit:"",
        link:"dashboard/sales",
        icon:""
    },
    {
        title:"Total Revenue",
        count:totalSales,
        unit:"",
        link:"dashboard/sales",
        icon:""
    }
 ]
    return (
    <div>
      
    </div>
  )
}
