import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import db from "@/lib/db";
import {v4 as uuidv4} from "uuid"
import base64url from "base64url";
import { Resend } from "resend";
import {EmailTemplate} from "@/components/Email-templates"
import { data } from "autoprefixer";
export async function PUT(request){
    const resend= new Resend(process.env.RESEND_API_KEY)
    try {
        const {email}=await request.json()
        const existinguser=await db.user.findUnique({
            where:{
                email,
            }
        })
        if(!existinguser){
            return NextResponse.json({
                data:null,
                message:'user not found'
            })
        }
        const rawToken=uuidv4()
        const token=base64url.encode(rawToken)
        // const updateUser=await db.user.update({
        //     where:{
        //         email
        //     },
        //     data:{
        //         passwordResetToken:token
        //     }
        // })
        const linkText="Reset Password"
        const userId=existinguser.id
        const name=existinguser.name
        const redirectUrl=`reset-password?token=${token}&id=${userId}`
        const sendMail=await resend.emails.send({
            from :"beki <info@jazzafricaadventures.com>",
            to:email,
            subject:"Account Verification from Auth System",
            react:EmailTemplate({name,redirectUrl,linkText})
        })
        console.log(sendMail,'send email')
        return NextResponse.json({
            data:null,
            message:"user updated successfully"
        })
    } catch (error) {
        
    }
}