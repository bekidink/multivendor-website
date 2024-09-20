import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}){
    try {
        const coupon=await db.coupon.findUnique({
            
            where:{
               id,
            },
           
        })
        return NextResponse.json(coupon)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Categories",error},{status:500})
    }
}
export async function PUT(request,{params:{id}}){
    try {
        const{title,couponCode,expiryDate}=await request.json()
        const existingCoupon =await db.coupon.findUnique({
            where:{
                id
            }
        })
        if(!existingCoupon){
            return NextResponse.json({
                data:null,
                message:"Not Found"
            },{status:404})
        }
        const updatedCoupon=await db.coupon.update({
            where:{id},
            data:{title,couponCode,expiryDate}
        })
        return NextResponse.json(updatedCoupon)
    } catch (error) {
        
    }
}
export async function DELETE(request,{params:{id}}){
    try {
        const existingcoupon=await db.coupon.findUnique({
            
            where:{
               id,
            },
           
        })
        if(!existingcoupon){
            return NextResponse.json({
                data:null,
                message:"coupon Not Found"
            },{status:404})
        }
        const deletedcoupon=await db.coupon.delete({
            
            where:{
               id,
            },
           
        })
        return NextResponse.json(deletedcoupon)
    } catch (error) {
        return NextResponse.json({message:"Failed to delete coupon",error},{status:500})
    }
}