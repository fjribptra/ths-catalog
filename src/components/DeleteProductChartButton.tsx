"use client"

import { UserProduct } from "@/definitions";
import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export default function DeleteProductChartButton({userProduct, user}: {userProduct: UserProduct, user: any}) {
    const router = useRouter()
    async function deleteProduct(id: number, userId: number) {
        const response = await fetch(`http://localhost:3000/api/cart/${userId}/${id}`, {
            method: 'DELETE',
        })
        const data = await response.json();
        Swal.fire({
            title: "Success",
            text: data.message,
            icon: "success"
          });
        router.refresh()
    }

    async function handleDeleteButton(e: React.FormEvent, id: number, userId: number) {
      e.preventDefault();
      e.stopPropagation();
        Swal.fire({
            title: "Do you want to delete this product from your chart?",
            showDenyButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteProduct(id, userId)
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });

          
    }
    return (
        <button onClick={(e) => handleDeleteButton(e, userProduct.id, user?.id)} className="text-red-500 cursor-pointer"><FaRegTrashAlt /></button>
    )
}