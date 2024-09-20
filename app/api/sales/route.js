import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request){
        try {
            const orders=await db.sale.findMany({
                orderBy:{
                    createdAt:"desc"
                },
               
            })
            return NextResponse.json(orders)
        } catch (error) {
            return NextResponse.json({
                message:"Failed to Fetch Orders",
                error
            },{status:500})
        }
    }
    