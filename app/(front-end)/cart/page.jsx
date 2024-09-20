"use client"
import Breedcrumb from '@/components/frontend/Breedcrumb'
import CartItems from '@/components/frontend/CartItems'
import CartProduct from '@/components/frontend/CartProduct'
import CartSubTotal from '@/components/frontend/CartSubTotal'
import EmptyCart from '@/components/frontend/EmptyCart'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItem=useSelector((state)=>state.cart) 
  const subTotal=cartItem.reduce((acc,currentItem)=>{
   return acc+currentItem.salePrice*currentItem.qty
  },0).toFixed(2)??0
  console.log(cartItem)
  return (
    <div>
      <Breedcrumb/>
      {cartItem.length>0 ? <div className="grid grid-cols-12 gap-6 md:gap-12">
       <CartItems cartItem={cartItem}/>
      <CartSubTotal subTotal={subTotal}/>
      </div>:(
        <EmptyCart/>
      )}
     
    </div>
  )
}

export default Cart
