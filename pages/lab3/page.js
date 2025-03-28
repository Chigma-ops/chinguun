"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const UseStateHook = () => {
    const [name, setName] = useState("");
    const router = useRouter();
    
    return (
        <div className="flex flex-row justify-center items-center h-screen w-full bg-black p-5 sm:p-10">
            <button
                className="absolute bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[150px] h-[45px] sm:w-[200px] sm:h-[50px]"
                onClick={() => router.back()}
            >
                Back
            </button>

            <p className="text-xl font-bold mb-2 text-white mr-10">Name:</p>
            <input
                type="text"
                className="border border-white rounded p-3 mb-4 text-white bg-transparent focus:outline-none focus:border-blue-500 w-full sm:w-[250px] md:w-[300px]"
                size="25"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p className="text-white ml-10">Hi Nest 11v</p>
            {name === "" ? 
                <p className="ml-3 text-white">Suragch</p> : 
                <p className="ml-3 text-white">{name}</p>}
        </div>
    );
};

export default UseStateHook;

