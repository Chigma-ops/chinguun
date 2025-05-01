"use client"

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
                const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const result = await response.json();
                setData(result);
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
        <div className='bg-blue-800 min-h-screen w-full p-4'>
          <button
            className="fixed bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px] z-50"
            onClick={() => router.back()}
          >
            Back
          </button>
      
          {loading ? (
            <div className="text-white text-center">Loading...</div>
          ) : (
            <div className='grid grid-cols-4 gap-10'>
              {data?.clothes?.map((item, index) => (
                <div
                  key={index}
                  className="text-black bg-blue-200 rounded-xl p-6 flex flex-col items-center justify-center shadow-4xl inset-shadow-whit gap-y-5"
                >
                  <img src={item.images} className='object-cover h-[300px] rounded-xl' />
                  <div className='flex gap-x-2'>
                    <div className="truncate font-semibold">{item.name}</div>
                    <div className="truncate font-semibold">/</div>
                    <div className="truncate font-semibold">{item.timePeriod}</div>
                  </div>
                  <div className='flex gap-x-3'>
                    <div className="text-sm text-gray-600">{item.description}</div>
                    <div className='text-sm text-blue-600'>{item.materials}</div>
                  </div>
                </div>
              ))}
            </div>
          )}x
        </div>
      );
      
}
