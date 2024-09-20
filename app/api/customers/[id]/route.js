import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function PUT(request,{params:{id}}){
    try {
       
        const{ name,     
            firstName ,    
            lastName  ,    
            userName  , 
            dateOfBirth,   
            email    ,     
            profileImage ,
            phone     ,    
            streetAddress ,
            city       ,   
            country   ,    
            district}=await request.json()
        const existingCoupon =await db.userProfile.findUnique({
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
        const updatedCoupon=await db.userProfile.update({
            where:{id},
            data:{name,     
                firstName ,    
                lastName  ,    
                userName  , 
                dateOfBirth,   
                email    ,     
                profileImage ,
                phone     ,    
                streetAddress ,
                city       ,   
                country   ,    
                district}
        })
        return NextResponse.json(updatedCoupon)
    } catch (error) {
        
    }
}