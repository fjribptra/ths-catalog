import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const { commentMessage, productIdFromFakeStore, userId } = await request.json();
  const commentData: any = {
    commentMessage,
    productIdFromFakeStore,
    userId,
  };
  await prisma.comment.create({ data: commentData });
  return NextResponse.json({ message: "sucessfully added comment" });
}

