import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 300;

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  const { userId } = params;
  const parsedUserId = parseInt(userId)
  const prisma = new PrismaClient()
  const filteredData = await prisma.product.findMany({
      where: {userId: parsedUserId}
  })

  return NextResponse.json(filteredData)
  //! xxxxxxx
}
