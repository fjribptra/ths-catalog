"use client";

import { useEffect, useState } from "react";

export default function PriceCount({user, userProducts}: {user: any, userProducts: any}) {
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    if(userProducts.length) {
      setPrice(userProducts.map((userProduct: any) => userProduct.productPrice).reduce((acc: any, current: any) => acc + current))
    } else {
      setPrice(0)
    }
  }, [userProducts]);
  console.log()

  return (
    <div className="bg-slate-100 fixed bottom-0 right-0 left-0 p-5">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-sm">Count</h3>
          <h1 className="font-bold">{price?.toFixed(2)}</h1>
        </div>
        <button className="bg-blue-700 text-white px-10 rounded-md">Buy</button>
      </div>
    </div>
  );
}
