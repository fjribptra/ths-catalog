"use client"

import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter()
    return (
        <div className="flex flex-col min-h-screen justify-center items-center gap-3">
            <h1 className="font-bold text-9xl text-blue-500">404</h1>
            <h1 className="font-bold text-2xl">Page Not Found!</h1>
            <button onClick={() => router.back()}>&#10092;&#10092;&#10092; Back</button>
        </div>
    )
}