import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET (request,{params:{slug}}){
    try {
        const product=await db.product.findUnique({
            where:{
                slug
            }
        })
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({
            message:"Failed to fetch product",error
        },{status:500})
    }
}