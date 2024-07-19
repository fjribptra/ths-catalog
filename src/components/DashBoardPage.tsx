import { UserProduct } from "@/definitions";
import Image from "next/image";
import DeleteProductChartButton from "./DeleteProductChartButton";
import Link from "next/link";
import PriceCount from "@/components/PriceCount";

export default async function DashBoardPage({ session, user, getUserProductsById }: { session: any; user: any; getUserProductsById: any }) {
  const userProducts = await getUserProductsById(user?.id);

  return (
    <div className="mt-20 flex flex-col gap-5 container mx-auto px-5 py-5 mb-20">
      <div className="flex gap-5 items-center">
        <Image className="rounded-full w-[80px]" src={session?.user?.image as string} alt="" width={500} height={500} />
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">{session?.user?.name}</h2>
          <p className="text-sm">{session?.user?.email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">Your Chart ({userProducts.length})</h1>
        <div className="grid grid-cols-1 gap-5">
          {userProducts
            ? userProducts.map((userProduct: UserProduct) => (
                <Link href={'/products/' + userProduct.productId} className="flex flex-row gap-7 bg-slate-100 p-3 rounded-md justify-between items-center" key={userProduct.productId}>
                  <div className="flex justify-between gap-5">
                    <Image className="w-[70px] h-[70px]" src={userProduct.productImage} alt="" width={100} height={100} />
                    <div className="flex flex-col gap-1">
                      <h1 className="font-bold text-xs">{userProduct.productName}</h1>
                      <p className="text-slate-400 text-xs italic">{userProduct.productCategory}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-center items-center">
                    <p className="font-bold text-green-500 text-md">{userProduct.productPrice}</p>
                    <div>
                      <DeleteProductChartButton userProduct={userProduct} user={user} />
                    </div>
                  </div>
                </Link>
              ))
            : null}
        </div>
        <h1 className="font-bold text-xl">Your Comments (3)</h1>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex flex-col gap-5">
            //! coments
          </div>
        </div>
      </div>
      <PriceCount user={user} userProducts={userProducts}/>
    </div>
  );
}
