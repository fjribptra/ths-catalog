import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function DELETE(request: NextRequest, { params }: { params: { userId: string; productId: string } }) {
    const { userId, productId } = params;
    const prisma = new PrismaClient();
    await prisma.product.delete({
        where: {
            id: parseInt(productId),
        },
    });
    return NextResponse.json({message: "successfully deleted product"});
}

export async function GET(request: NextRequest, {params}: { params: { userId: string; productId: string } }) {
    const { userId, productId } = params;
    const prisma = new PrismaClient();
    const existProduct = await prisma.product.findUnique({
        where : {
            id: parseInt(productId)
        }
    })
    if(!existProduct) return NextResponse.json({message: 'false'})
    return NextResponse.json({message: 'true'})
}