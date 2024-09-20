import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}){
    try {
        console.log(id,'id')
        const order=await db.order.findMany({
            where:{
               userId: id,
            },
            orderBy:{
                createdAt:"desc"
            },
            include:{
                orderItems:true
            }
        })
    return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json({
            message:"Failed to Fetch Order",error
        },{status:500})
    }
}
export async function DELETE(request,{params:{id}}){
    try {
        const existingOrder=await db.order.findUnique({
            where:{
                id
            }
        })
        if(!existingOrder){
            return NextResponse.json({
                data:null,
                message:"Order not found"
            },{status:404})
        }
        const deletedOrder=await db.order.delete({
            where:{
                id
            }
        })
        return NextResponse.json(deletedOrder)
    } catch (error) {
        return NextResponse.json({
            data:null,
            message:"Failed to delete an order",error
        },{status:500})
    }
}