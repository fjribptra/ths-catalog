"use client"

import { signIn } from "next-auth/react";

export default function LoginButton() {
    return (
        <button onClick={() => signIn()}>Login</button>
    )
}