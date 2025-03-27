"use client";  

import { useRouter } from 'next/navigation';

export default function Lab5() {
  const router = useRouter();
 
  return (
    <div className="flex flex-col bg-black h-screen justify-center items-center gap-5 bg-cover bg-center relative" 
         style={{ backgroundImage: 'url(https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="flex flex-col border rounded-full p-10 z-10">
        <h1 className="text-white font-bold text-3xl">Chinguun Toivgoo</h1>
      </div>

      <div className="flex flex-row gap-10 z-10">
      <button 
          className="mb-4 p-4 bg-white text-black rounded h-[100px] w-[300px] shadow-xl shadow-blue-900 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-cyan-900"
          onClick={() => router.push('/lab1/page')}
        >
          Lab 1
        </button>
        <button 
          className="mb-4 p-4 bg-white text-black rounded h-[100px] w-[300px] shadow-xl shadow-blue-900 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-cyan-900"
          onClick={() => router.push('/lab2/page')}
        >
          Lab 2
        </button>
        <button className="mb-4 p-4 bg-white text-black rounded h-[100px] w-[300px] shadow-xl shadow-blue-900 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-cyan-900"
         onClick={() => router.push('/lab3/page')}
        >

        Lab 3
        
        </button>
        <button className="mb-4 p-4 bg-white text-black rounded h-[100px] w-[300px] shadow-xl shadow-blue-900 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-cyan-900"
         onClick={() => router.push('/lab4/page')}
        >
        Lab 4
        </button>
      </div>
    </div>
  );
}
