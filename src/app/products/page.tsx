"use client";

import { Product } from "@/definitions";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Loading from "../loading";
import Skeleton from "react-loading-skeleton";
import CardSekelton from "@/components/CardSkeleton";

export default function Products() {
    

  const [products, setProducts] = useState([]);
  async function getAllProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto py-7 px-5 flex flex-col gap-5 mt-14">
        <h1 className="font-bold text-2xl">All Products</h1>
     <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product: Product) => (  
       <div className="flex justify-between bg-slate-200 flex-col gap-3 p-3 rounded-lg" key={product.id}>
        <Image className="w-full h-[200px] sm:h-[200px] lg:h-[300px]" src={product.image} alt={product.title} width={200} height={200}/>
        <h1 className="font-bold text-sm">{product.title}</h1>
        <p className="font-bold text-green-500 text-2xl">{product.price}</p>
        <Link href={"/products/" + product.id} className="bg-blue-500 text-white py-2 w-full text-center rounded-md">Buy</Link>
      </div>
        ))}
    </div>
    </div>
  );
}
