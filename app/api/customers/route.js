import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request){
    try {
        const users=await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            },
            where:{
                role:"USER"
            },
            include:{
                profile:true
            }
        })
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch users",error},{status:500})
    
    }
}