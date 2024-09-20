import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}){
    try {
        const market=await db.market.findUnique({
            
            where:{
               id,
            },
          
        })
        return NextResponse.json(market)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Categories",error},{status:500})
    }
}

export async function DELETE(request,{params:{id}}){
    try {
        const existingmarket=await db.market.findUnique({
            
            where:{
               id,
            },
           
        })
        if(!existingmarket){
            return NextResponse.json({
                data:null,
                message:"market Not Found"
            },{status:404})
        }
        const deletedmarket=await db.market.delete({
            
            where:{
               id,
            },
           
        })
        return NextResponse.json(deletedmarket)
    } catch (error) {
        return NextResponse.json({message:"Failed to delete market",error},{status:500})
    }
}