import ProductDetail from "@/components/ProductDetail";
import { getUserProductsById } from "@/libs/chart";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function ProductById({params}: {params: {id: string}}) {
    const session = await getServerSession()
    const prisma = new PrismaClient()
    const user = await prisma.user.findUnique({
        where: { email: session?.user?.email as string },
      });

      const userId = user?.id
      let userProducts
    
      if(userId) {
        userProducts = await getUserProductsById(userId.toString())
      } else {
        userProducts = []
      }
    return (
        <div className="mt-16">
            <ProductDetail params={params} user={user} userProducts={userProducts}/>
        </div>
    );
}