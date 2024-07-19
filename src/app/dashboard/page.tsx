import DashBoardPage from "@/components/DashBoardPage";
import { getUserProductsById } from "@/libs/chart";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession();
  const prisma = new PrismaClient();

  

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as string },
  });

  return (
        <DashBoardPage session={session} user={user} getUserProductsById={getUserProductsById}/>
  );
}
