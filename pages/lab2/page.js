"use client";  

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const UseStateHook = () => {
  const [color, setColor] = useState(" ");
  const router = useRouter();

  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
        <button
        className="absolute bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px]"
        onClick={() => router.back()}
      >
        Back
      </button>
      <p>Change color:</p>
      {color === " " && (
        <>
          <button
            className="border bg-red-800 py-4 px-6"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="border bg-blue-800 py-4 px-6"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="border bg-green-800 py-4 px-6"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </>
      )}
      <button
        className="border bg-white py-4 px-6"
        onClick={() => setColor(" ")}
      >
        Return
      </button>
      {color !== " " && (
        <button
          className={`border py-4 px-6 text-white bg-${color}-700`}
          onClick={() => setColor(color)}
        >
          {color}
        </button>
      )}

      <p>
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
