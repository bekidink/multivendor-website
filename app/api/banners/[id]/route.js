import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}){
    try {
        const category=await db.banner.findUnique({
            
            where:{
               id,
            },
            
        })
        return NextResponse.json(category)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Categories",error},{status:500})
    }
}

export async function DELETE(request,{params:{id}}){
    try {
        const existingCategory=await db.banner.findUnique({
            
            where:{
               id,
            },
           
        })
        if(!existingCategory){
            return NextResponse.json({
                data:null,
                message:"Category Not Found"
            },{status:404})
        }
        const deletedCategory=await db.banner.delete({
            
            where:{
               id,
            },
           
        })
        return NextResponse.json(deletedCategory)
    } catch (error) {
        return NextResponse.json({message:"Failed to delete Category",error},{status:500})
    }
}
export async function PUT(request,{params:{id}}){
    try {
        const {title,link,imageUrl,isActive}=await request.json()
        const existingbanner =await db.banner.findUnique({
            where:{
                id
            }
        })
        if(!existingbanner){
            return NextResponse.json({
                data:null,
                message:"Not Found"
            },{status:404})
        }
        const updatedBanner=await db.banner.update({
            where:{id},
            data:{title,link,imageUrl,isActive}
        })
        return NextResponse.json(updatedBanner)
    } catch (error) {
        
    }
}