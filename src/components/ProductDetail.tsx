"use client";

import { Product, UserProduct } from "@/definitions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CommentInput from "./CommentInput";
import CommentSection from "./CommentSection";

export default function ProductDetail({ params, user, userProducts }: { params: { id: string }; user: any; userProducts: any }) {
  const [productById, setProductById] = useState<Product>({} as Product);
  const [isProductExist, setIsProductExist] = useState({} as string);
  const router = useRouter();
  async function getProductById(id: string) {
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await res.json();
    return data;
  }

  async function checkIsProductExist(userId: number, productId: string) {
    const res = await fetch(`/api/cart/${userId}/${productId}`);
    const data = await res.json();
    // const data = {userId, productId}
    return data;
  }

  useEffect(() => {
    getProductById(params.id).then((data) => setProductById(data));
    setIsProductExist(userProducts.filter((product: UserProduct) => product.productId === parseInt(params?.id)));
    // checkIsProductExist(user?.id, params.id).then((data) => setIsProductExist(data))
  }, [params.id, user?.id, userProducts]);

  async function addProductToCart() {
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        productId: productById.id,
        productName: productById.title,
        productCategory: productById.category,
        productImage: productById.image,
        productPrice: productById.price,
      }),
    });
    const data = await response.json();
    Swal.fire({
      title: "Success",
      text: data.message,
      icon: "success",
    });
    router.refresh();
  }

  console.log(isProductExist.length);
  return (
    <>
    <div className="container mx-auto p-6 flex flex-col gap-5 md:flex-row md:items-center">
      <h1 className="font-bold text-3xl md:hidden">{productById.title}</h1>
      <Image className="w-full h-[500px] md:w-[500px] md:h-[500px]" src={productById.image} alt="" width={200} height={200} />
      <div className="flex flex-col gap-5">
      <h1 className="font-bold text-3xl hidden md:block">{productById.title}</h1>
        <p className="font-bold text-green-500 text-2xl">{productById.price}</p>
        <p>{productById.description}</p>
        <p className="text-slate-400 italic font-bold">{productById.category}</p>
        <div className="flex justify-between gap-5">
          <button className="bg-blue-500 text-white w-full py-2 rounded-md">Buy</button>
          <button
            disabled={isProductExist.length ? true : false}
            onClick={async () => await addProductToCart()}
            className={`${isProductExist.length ? "bg-slate-500 cursor-not-allowed" : "bg-green-500"} text-white px-10 py-2 w-full rounded-md`}
          >
            {isProductExist.length ? "Added to cart" : "Add to cart"}
          </button>
        </div>
        <button onClick={() => router.back()} className="w-fit">
          &#10092;&#10092;&#10092; Back
        </button>
      </div>
    </div>
      {/* Comments Feature */}
      <CommentSection productIdFromFakeStore={params.id}/>
     <CommentInput productIdFromFakeStore={params.id} userId={user?.id}/>
      </>
  );
}
