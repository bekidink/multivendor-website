import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{slug}}){
    try {
        const market=await db.market.findUnique({
            
            where:{
               slug,
            },
          
        })
        return NextResponse.json(market)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Categories",error},{status:500})
    }
}

