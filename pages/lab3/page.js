"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const UseStateHook = () => {
    const [name, setName] = useState("");
    const router = useRouter();
    
    return (
        <div className="flex justify-center items-center h-screen w-full bg-black">
            {/* Back Button Positioned at the Bottom Left */}
            <button
                className="absolute bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px]"
                onClick={() => router.back()}
            >
                Back
            </button>

            {/* Centered Content */}
            <p className="text-xl font-bold mb-2 text-white mr-10">Name:</p>
            <input
                type="text"
                className="border border-white rounded p-3 mb-4 text-white"
                size="25"
                onChange={(e) => setName(e.target.value)}
            />
            <p className="ml-5 text-white">Hi Nest 11v</p>
            {name === "" ? <p className="ml-3 text-white">Suragch</p> : <p className="ml-3 text-white">{name}</p>}
        </div>
    );
};

export default UseStateHook;
