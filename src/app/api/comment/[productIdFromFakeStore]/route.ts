import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()
export async function GET(request: NextRequest, {params}: {params: {productIdFromFakeStore: string}}) {
    const {productIdFromFakeStore} = params
    const parsedProductIdFromFakeStore = parseInt(productIdFromFakeStore)
    const commentParams: any = {
        productIdFromFakeStore: parsedProductIdFromFakeStore,
      };
      const findTheComment = await prisma.comment.findMany({
        where: commentParams,
        include: {
          user: true
        }
      });
      console.log(findTheComment)
    return NextResponse.json(findTheComment)
}