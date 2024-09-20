import db from "@/lib/db"
import { CaseSensitive } from "lucide-react"
import { NextResponse } from "next/server"

export async function POST(request){
try {
    const {barcode,categoryId,description,farmerId,productImages,isActive,isWholesale,productCode,productPrice,salePrice,sku,slug,tags,title,unit,wholesalePrice,wholesaleQty,productStock,qty}=await request.json()
    const extistingProduct=await db.product.findUnique({
        where:{
            slug,
        }
       })
       if(extistingProduct){
        return NextResponse.json({
            data:null,
            message:"Product already exists"
        },{status:409})
       }
       
       const newProduct=await db.product.create({
        data:{
            barcode,categoryId,description,userId:farmerId,imageUrl:productImages[0],productImages,isActive,isWholesale,productCode,productPrice:parseFloat(productPrice),salePrice:parseFloat(salePrice),sku,slug,tags,title,unit,wholesalePrice:parseFloat(wholesalePrice),wholesaleQty:parseInt(wholesaleQty),productStock:parseInt(productStock),qty:parseInt(qty)
        }
       })
       return NextResponse.json(newProduct)
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"Failed to create Product",error},{status:500})
}
}
export async function GET(request){
    const categoryId=request.nextUrl.searchParams.get("catId")
    const sortBy=request.nextUrl.searchParams.get("sort")
    const min=request.nextUrl.searchParams.get("min")
    const max=request.nextUrl.searchParams.get("max")
    const page=request.nextUrl.searchParams.get("page")
    const search=request.nextUrl.searchParams.get("search")
    const pageSize=2
    let where={
        categoryId
    }
    if(min && max){
        where.salePrice={
            gte:parseFloat(min),
            lte:parseFloat(max)
        }
    } else if(min){
        where.salePrice={
            gte:parseFloat(min),
            
        }
    }
    else if(max){
        where.salePrice={
            lte:parseFloat(max)
            
        }
    }
    let products;
    try {
        if(search){
            products=await db.product.findMany({
                where:{
                    OR:[{
                        title:{contains:search,mode:"insensitive"}
                    }]
                }
            })
        }
       else if(categoryId && page){
products=await db.product.findMany({
    where,
    skip:(parseInt(page)-1)*parseInt(pageSize),
    take:parseInt(pageSize),
    orderBy:{
        createdAt:"desc"
    }
})
        }
       else if( categoryId && sortBy){
            products=await db.product.findMany({
               orderBy:{
                salePrice:sortBy
               },
               where
           })
          }
     else  if(categoryId){
         products=await db.product.findMany({
            where:{
                categoryId
            },
            orderBy:{
                salePrice:"asc"
            },
           
        })
       }else if(sortBy){
        products=await db.product.findMany({
            orderBy:{
                salePrice:sortBy
            },
            
        })
       } else{
         products=await db.product.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
       }
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch Products",error},{status:500})
    }
}