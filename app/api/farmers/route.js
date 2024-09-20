import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
try {
    // const {code,contactPerson,contactPersonPhone,email,name,notes,phone,physicalAddress,terms,products,landSize,mainCrop,userId,isActive}=await request.json()
   const farmerData=await request.json()
    const newFarmer=await db.farmerProfile.create({
        data:{
            code:farmerData.code,
            contactPerson:farmerData.contactPerson,
            contactPersonPhone:farmerData.contactPersonPhone,
            email:farmerData.email,
            name:farmerData.name,
            notes:farmerData.notes,
            phone:farmerData.phone,
            physicalAddress:farmerData.physicalAddress,
            terms:farmerData.terms,
            isActive:farmerData.isActive,
            products:farmerData.products,
            landSize:parseFloat(farmerData.landSize),
            mainCrop:farmerData.mainCrop,
            userId:farmerData.userId
        }
    })
    return NextResponse.json(newFarmer)
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"Failed to create Farmer",error},{status:500})
}
}
export async function GET(request){
    try {
        const farmers=await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            },
            where:{
                role:"FARMER"
            },
            include:{
                farmerProfile:true
            }
        })
        return NextResponse.json(farmers)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch users",error},{status:500})
    
    }
}