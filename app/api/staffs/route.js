import { NextResponse } from "next/server"

export async function POST(request){
try {
    const staffData=await request.json()
    return NextResponse.json(staffData)
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"Failed to create Staff",error},{status:500})
}
}