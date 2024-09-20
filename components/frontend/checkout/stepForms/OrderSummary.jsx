"use client"
import { ChevronRight, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

export default function OrderSummary() {
  const [loading,setLoading]=useState(false)
  const checkoutData=useSelector((store)=>store.checkout.checkoutFormData)
  const cartItem=useSelector((state)=>state.cart) 
  const dispatch=useDispatch()
  const subTotal=cartItem.reduce((acc,currentItem)=>{
   return acc+currentItem.salePrice*currentItem.qty
  },0).toFixed(2)??0
  const router=useRouter()
  async function submitData(){
   const orderItems=cartItem
   
    const data={
      orderItems,
      checkoutData
    }
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  const responseData=await response.json()
      if (response.ok) {
        setLoading(false);
        toast.success(`New Order Created Successfully`);
        router.push(`/order-confirmation/${responseData.id}`)
        
      } else {
        setLoading(false);
        if (response.status === 409) {
          toast.error("The Giving Warehouse Stock is NOT Enough");
        } else {
          toast.error("Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div className='my-6 space-y-3'>
      <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Order Summary</h3>

      {cartItem.map((cart,i)=>(
 <div key={i} className="flex items-center justify-between border-b border-slate-400 text-slate-400 font-semibold text-sm pb-3">
 <div className="flex justify-between items-center gap-2">
   <Image src={cart.imageUrl} width={249} height={249} alt='' className='rounded-xl w-20 h-20'/>
   <div className="flex flex-col">
     <h2>{cart.title}</h2>
   </div>
   </div>
  
 <div class="relative flex items-center max-w-[8rem]">

<input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required  value={cart.qty}/>

</div>
 <div className="flex items-center gap-2">
   <h4>{cart.salePrice}</h4>
  
 </div>
 
</div>
      ))}
      <div className='mt-4'>
        {loading?(
           <button   type='button' className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 dark:bg-lime-600 hover:bg-slate-800 dark:hover:bg-lime-700">
           <Loader2 className='w-5 h-5 mr-2'/>
           <span>Processing...</span>

       </button>
        ):(
          <button onClick={submitData}  type='button' className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 dark:bg-lime-600 hover:bg-slate-800 dark:hover:bg-lime-700">
          <ChevronRight className='w-5 h-5 mr-2'/>
          <span>Proceed to Payment</span>

      </button>
        )}
     
      </div>
    </div>
  )
}
