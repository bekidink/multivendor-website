// import db from "@/lib/db";
// import { generateOrderNumber } from "@/lib/generateOrderNumber";
// import { data } from "autoprefixer";
// import { NextResponse } from "next/server";
// export async function POST(request){
//     try {
//         const {
//             orderItems,
//             checkoutData

//         } =await request.json()
//         const generatedOrderNumber = generateOrderNumber(8);
//         const {
//             city,

// country,

// email,

// firstName,

// lastName,

// paymentMethod,

// phone,

// shippingCost,

// streetAddress,

// userId,

// district

//         }=checkoutData
//         const newOrder=await db.order.create({
//             data:{
//                 userId,
//                 email,
//                 firstName,
//                 lastName,
//                 phone,
//                 streetAddress,
//                 city,
//                 country,
//                 district,
//                 shippingCost:parseFloat(shippingCost),
//                 paymentMethod,
//                 orderNumber:generatedOrderNumber

//             }
//         })
//         const newOrderItems=await db.orderItem.createMany({
// data:orderItems.map((item)=>({
//     productId:item.id,
//     quantity:parseInt(item.qty),
//     price:parseFloat(item.salePrice),
//     orderId:newOrder.id,
//     vendorId:item.vendorId,
//     title:item.title,
//     imageUrl:item.imageUrl
// }))
//         })
// console.log(orderItems)
//     return NextResponse.json(newOrder)
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({
//             message:"Failed to create order",error
//         },{status:500})
//     }
// }

import db from "@/lib/db";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { checkoutData, orderItems } = await request.json();
    const {
      city,

      country,

      email,

      firstName,

      lastName,

      paymentMethod,

      phone,

      shippingCost,

      streetAddress,

      userId,

      district,
    } = checkoutData;

    // Create orderNumber function
    function generateOrderNumber(length) {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;
    }

    // Use the Prisma transaction
    const result = await db.$transaction(async (prisma) => {
      // Create order and order items within the transaction
      const newOrder = await db.order.create({
        data: {
          userId,
          shippingCost: parseFloat(shippingCost),
          orderNumber: generateOrderNumber(8),
          email,
          firstName,
          lastName,
          phone,
          streetAddress,
          city,
          country,
          district,
          paymentMethod,
        },
      });

      const newOrderItems = await db.orderItem.createMany({
        data: orderItems.map((item) => ({
          orderId: newOrder.id, // Ensure you associate the items with the order
          productId: item.id,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          imageUrl: item.imageUrl,
          title: item.title,
          vendorId:item.vendorId
        })),
      });

      // Calculate total amount for each product and create a sale for each
      const sales = await Promise.all(
        orderItems.map(async (item) => {
          const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty);

          const newSale = await db.sale.create({
            data: {
              orderId: newOrder.id,
              productId: item.id,
              vendorId: item.vendorId,
              total: totalAmount,
              productTitle:item.title,
              productImage:item.imageUrl,
              productQty:parseInt(item.qty),
              productPrice:parseFloat(item.salePrice)
            },
          });

          return newSale;
        })
      );

      return { newOrder, newOrderItems, sales };
    });

    console.log(result.newOrder, result.newOrderItems, result.sales);

    // Return the response
    // return new Response(JSON.stringify(result.newOrder), {
    //   status: 200,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    return NextResponse.json(result.newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create order",
        error,
      },
      { status: 500 }
    );
    // return new Response(
    //   JSON.stringify({
    //     message: "Failed to create Order",
    //     error: error.message,
    //   }),
    //   {
    //     status: 500,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
  }
}
export async function GET(request){
    try {
        const orders=await db.order.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                orderItems:true
            }
        })
        return NextResponse.json(orders)
    } catch (error) {
        return NextResponse.json({
            message:"Failed to Fetch Orders",
            error
        },{status:500})
    }
}

