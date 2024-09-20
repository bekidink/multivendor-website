import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}){
    try {
        const training=await db.training.findUnique({
            
            where:{
               id,
            },
            
        })
        return NextResponse.json(training)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch training",error},{status:500})
    }
}
export async function PUT(request,{params:{id}}){
    try {
        const {title,slug,categoryId,imageUrl,description,isActive,content}=await request.json()
        const existingTraining =await db.training.findUnique({
            where:{
                id
            }
        })
        if(!existingTraining){
            return NextResponse.json({
                data:null,
                message:"Not Found"
            },{status:404})
        }
        const updatedTraining=await db.training.update({
            where:{id},
            data:{title,slug,categoryId,imageUrl,description,isActive,content}
        })
        return NextResponse.json(updatedTraining)
    } catch (error) {
        return NextResponse.json({message:"Failed to update training",error},{status:500})
    }
}
export async function DELETE(request,{params:{id}}){
    try {
        const existingtraining=await db.training.findUnique({
            
            where:{
               id,
            },
           
        })
        if(!existingtraining){
            return NextResponse.json({
                data:null,
                message:"training Not Found"
            },{status:404})
        }
        const deletedtraining=await db.training.delete({
            
            where:{
               id,
            },
           
        })
        return NextResponse.json(deletedtraining)
    } catch (error) {
        return NextResponse.json({message:"Failed to delete training",error},{status:500})
    }
}