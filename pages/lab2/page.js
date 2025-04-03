"use client";  

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const UseStateHook = () => {
  const [color, setColor] = useState(" ");
  const router = useRouter();

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen bg-${color}-800 p-4`}>
       <button
                className="absolute bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px]"
                onClick={() => router.back()}
            >
                Back
            </button>
      
      <p className="text-white text-lg mb-4">Change color:</p>
      
      {color === " " && (
        <div className="space-x-4 mb-6">
          <button
            className="border bg-red-800 py-2 px-4 sm:py-4 sm:px-6 text-white rounded"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="border bg-blue-800 py-2 px-4 sm:py-4 sm:px-6 text-white rounded"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="border bg-green-800 py-2 px-4 sm:py-4 sm:px-6 text-white rounded"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      )}

      <button
        className="border bg-white py-2 px-4 sm:py-4 sm:px-6 text-black rounded mb-4"
        onClick={() => setColor(" ")}
      >
        Return
      </button>

      {color !== " " && (
        <button
          className={`border py-2 px-4 sm:py-4 sm:px-6 text-white rounded bg-${color}-700`}
          onClick={() => setColor(color)}
        >
          {color}
        </button>
      )}

      <p className="text-white text-lg mt-4">
        {color === "red"
          ? "123"
          : color === "blue"
          ? "456"
          : color === "green"
          ? "789"
          : color === " "
          ? "1000"
          : "000"}
      </p>
    </div>
  );
};

export default UseStateHook;
