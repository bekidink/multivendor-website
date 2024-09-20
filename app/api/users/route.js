import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid"
import base64url from "base64url"
import {Resend} from "resend"
import EmailTemplate from "@/components/Email-templates";
export  async function POST(request){

    try {
        const resend=new Resend(process.env.RESEND_API_KEY)
        const {email,name,password,role,plan}=await request.json()
        const exitingUser=await db.user.findUnique({
            where:{
                email
            }
        })
        if(exitingUser){
            return NextResponse.json({
                data:null,
                message:"User Already exists"
            },{status:409})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const rawToken=uuidv4()
        const token=base64url.encode(rawToken)
        const newUser=await db.user.create({
            data:{
name,email,password:hashedPassword,role,plan,verificationToken:token
            }
        })
        if(role==="FARMER"){
            const userId=newUser.id;
            const linkText="Verify Account";
            const redirectUrl=`onboarding/${userId}token=${token}`;
            const sendMail=await resend.emails.send({
                from:"bereketdinku.com",
                to:email,
                subject:"Account Verification from beki-Ecom",
                react:EmailTemplate({name,redirectUrl,linkText})
            })
            console.log(sendMail)
        }
 
        return NextResponse.json({
            data:newUser,
            message:"User Created Successfully"
        },{status:201})
    } catch (error) {
        return NextResponse.json({
            error,
            message:"Server Error:Something went wrong",
        },{status:500})
    }
}
export async function GET(request){
    try {
        const users=await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({
            message:"Failed to fetch users",error
        },{status:500})
    }
}