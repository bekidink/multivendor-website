import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}){
    try {
const farmer=await db.user.findUnique({
    where:{
        id,
    },
    include:{
  farmerProfile:true
    }
})
        return NextResponse.json(farmer)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Farmer",error},{status:500})
    }
}
export async function DELETE(request,{params:{id}}){
    try {
        const existinguser=await db.user.findUnique({
            
            where:{
               id,
            },
           
        })
        if(!existinguser){
            return NextResponse.json({
                data:null,
                message:"user Not Found"
            },{status:404})
        }
        const deleteduser=await db.user.delete({
            
            where:{
               id,
            },
           
        })
        return NextResponse.json(deleteduser)
    } catch (error) {
        return NextResponse.json({message:"Failed to delete user",error},{status:500})
    }
}
export async function PUT(request,{params:{id}}){
   try {
    const {status,emailVerified}=await request.json()
    const existingUser=await db.user.findUnique({
        where:{
            id
        }
    })
    if(!existingUser){
        return NextResponse.json({
            data:null,
            message:"user Not Found"
        },{status:404})
    }
    const updateFarmer=await db.user.update({
        where:{
            id
        },
        data:{
            emailVerified,status
        }
    })
    return NextResponse.json(updateFarmer)
   } catch (error) {
    return NextResponse.json({message:"Failed to update status of farmer",error},{status:500})
   } 
}