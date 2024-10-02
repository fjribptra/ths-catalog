import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
    const {productId, productName, productCategory, productImage, productPrice} = await request.json()
    // console.log({productId, productName, productCategory, productImage, productPrice})
    const session = await getServerSession()
    const prisma = new PrismaClient()
    // check if the user has registered in database
    const user = await prisma.user.findUnique({
        where: { email: session?.user?.email as string },
    })
    // add product id to the user
    const productData: any = {
        productId,
        productName,
        productCategory,
        productImage,
        productPrice,
        userId: user?.id 
    }
    const addedProduct = await prisma.product.create({
        data: productData 
    })

    if(!addedProduct) return NextResponse.json({message: 'failed to add product to cart'}) 
        return NextResponse.json({message: 'successfully added product to cart'}) 
}
