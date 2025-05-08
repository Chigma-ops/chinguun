"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Lab2() {
    const router = useRouter();
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const clothes = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const instruments = await fetch("https://mongol-api-rest.vercel.app/instruments");
                const tools = await fetch("https://mongol-api-rest.vercel.app/historicaltools");
                const ethnic = await fetch("https://mongol-api-rest.vercel.app/ethnicgroups");
                const provinces = await fetch("https://mongol-api-rest.vercel.app/provinces");
                const figures = await fetch("https://mongol-api-rest.vercel.app/historicalfigures");
                const attractions = await fetch("https://mongol-api-rest.vercel.app/touristattractions");

                const result1 = await clothes.json();
                const result2 = await instruments.json();
                const result3 = await tools.json();
                const result4 = await ethnic.json();
                const result5 = await provinces.json();
                const result6 = await figures.json();
                const result7 = await attractions.json();
                setData([...result1.clothes, ...result2.instruments, ...result3.tools, ...result4/ethnic, ...result5.provinces, ...result6.figures, ...result7.attractions]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log(data);

    return (
        <div className="flex gap-x-6 p-4 bg-gray-400">
      <button
        className="fixed bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px] z-50"
        onClick={() => router.back()}
      >
        Back
      </button>

      <div className="w-[20%] bg-gray-200 h-[95vh] rounded-xl flex flex-col items-center">
        <img
          src="https://nhs.edu.mn/favicon.ico"
          alt="Profile Icon"
          className="mt-5 w-40 h-40"
        />
        <h1 className="text-black mt-10 text-2xl">Chinguun Toivgoo</h1>
        <h2 className="text-purple-600 mt-6">Nest Education It School</h2>

        <p
          className="text-black mt-5 cursor-pointer"
          onClick={() => router.push("/hicheel1/page")}
        >
          lab1
        </p>
        <p
          className="text-black mt-5 cursor-pointer"
          onClick={() => router.push("/uliral4/lab1")}
        >
          lab2
        </p>
        <p className="text-black mt-5 cursor-pointer">lab3</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <svg
            className="mr-3 -ml-1 size-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
              5.291A7.962 7.962 0 014 12H0c0 3.042 
              1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <div className="text-white text-sm">Loading...</div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-10 w-[80%] h-[95vh] overflow-y-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-black bg-blue-200 rounded-xl p-6 flex flex-col items-center justify-center shadow-xl"
            >
              <img
                src={item.images}
                alt={item.name}
                className="object-contain max-w-full h-[300px] rounded-xl"
              />
              <div className="flex gap-x-2 mt-4">
                <div className="truncate font-semibold">{item.name}</div>
                <div className="truncate font-semibold">/</div>
                <div className="truncate font-semibold">{item.timePeriod}</div>
              </div>
              <div className="flex gap-x-3 mt-2 text-sm">
                <div className="text-gray-600">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    );
}
