import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}){
    try {
const farmer=await db.user.findUnique({
    where:{
        id,
    },
   select:{
    email:true,
    name:true,
    id:true,
    role:true,
    createdAt:true,
    profile:true
   }
})
        return NextResponse.json(farmer)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Farmer",error},{status:500})
    }
}