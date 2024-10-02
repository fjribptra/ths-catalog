import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export const maxDuration = 60;

const prisma = new PrismaClient()

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const {id} = params
    const uniqueUser = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(uniqueUser)
}