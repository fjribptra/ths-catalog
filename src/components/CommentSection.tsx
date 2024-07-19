"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CommentSection({productIdFromFakeStore}: {productIdFromFakeStore: string}) {
    const [comments, setComments] = useState([])
    async function getAllComments(){
        const response = await fetch(`/api/comment/${parseInt(productIdFromFakeStore)}`)
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getAllComments().then((data)=> setComments(data))
    }, [])
    return (
        <div className="bg-slate-200 container mx-auto p-6 flex flex-col gap-3">
        <h2>{comments.length ? `Comments (${comments.length})` : `Comments (0)`}</h2>
        {comments.length ?   comments.map((comment: any) => <div className="bg-white py-4 px-6 rounded-md flex flex-col gap-3" key={comment.id}>
          <div className="flex items-center gap-2">
            <Image className="rounded-full" src={comment.user.profilePicture} alt="" width={20} height={20} />
            <h3 className="font-bold">{comment.user.name}</h3>
          </div>
          <p>{comment.commentMessage}</p>
        </div> ) : <div>Comments are not available</div>}
       
      </div>
    )
}