"use client"

import { Typewriter } from "react-simple-typewriter";

export default function TypeWriterText() {
    return (
        <div className="text-green-600">
            <Typewriter words={['This is Fake Commerce', 'See all the products']} cursor loop/>
        </div>
    )
}