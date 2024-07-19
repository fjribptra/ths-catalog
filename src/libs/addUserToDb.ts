import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export async function addUserToDb() {
    const session = await getServerSession()
    const prisma = new PrismaClient
    const user = await prisma.user.findUnique({
        where: { email: session?.user?.email as string },
    })

    if (!user) {
        await prisma.user.create({
            data: {
                email: session?.user?.email as string,
                name: session?.user?.name as string,
                profilePicture: session?.user?.image as string
            }
        })
    }

   return false
}