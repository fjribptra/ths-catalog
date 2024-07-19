"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

export default function CommentInput({productIdFromFakeStore, userId}: {productIdFromFakeStore: string, userId: number}) {
  const [commentMessage, setCommentMessage] = useState<string>()
  const router = useRouter()

  async function postComment(commentMessage: string, productIdFromFakeStore: string, userId: number) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
        commentMessage,
        productIdFromFakeStore: parseInt(productIdFromFakeStore),
        userId
      })
    })
    const data = await response.json()
    return data
  }

  function handlePostComment(e: React.FormEvent) {
    e.preventDefault()
    postComment(commentMessage as string, productIdFromFakeStore, userId).then((data) => {
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
    })
    router.refresh()
  }

  return (
    <div className="container mx-auto">
      <div className="flex p-6 gap-3">
        <input onChange={(e) => setCommentMessage(e.target.value)} className="border border-black px-4 w-full rounded-md" type="text" placeholder="Post your comment ..." />
        <button onClick={(e) => handlePostComment(e)} className="bg-blue-600 text-white py-4 px-6 rounded-md">Post</button>
      </div>
    </div>
  );
}
