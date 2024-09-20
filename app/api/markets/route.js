import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
try {
    const {title,slug,logoUrl,description,isActive,categoryIds}=await request.json()
    const extistingMarket=await db.market.findUnique({
        where:{
            slug
        }
       })
       if(extistingMarket){
        return NextResponse.json({
            data:null,
            message:"Market already exists"
        },{status:409})
       }
       const newMarket=await db.market.create({
        data:{title,slug,logoUrl,description,isActive,categoryIds:[categoryIds]}
       })
    return NextResponse.json(newMarket)
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"Failed to create market",error},{status:500})
}
}
export async function GET(request){
    try {
        const markets=await db.market.findMany({})
        return NextResponse.json(markets)
    } catch (error) {
        
    }
}