"use client";

import { useRouter } from 'next/navigation';

export default function Lab5() {
  const router = useRouter();
  
  return (
    <div 
      className="flex flex-col bg-black h-screen justify-center items-center gap-5 bg-cover bg-center relative bg-gradient-to-r from-blue-950 to-slate-900"
      style={{
        backgroundImage: "url('https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/486281145_1058280036332656_8582639152140190605_n.png?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=rmeXLhJ8bjUQ7kNvgHmd2VO&_nc_oc=AdkYy2V3n9PT0vOYbX3difstVRdG_n4xQq9LHfxelT9F7qjKDO8vYLTTcvGZ9bWDIHI&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=Sd25H1gs8xqoYYk6BZ2W2w&oh=00_AYFlKxxontMqFkxFyHd_RHGtGu0sbGaZg9OFrFqLKLbwSQ&oe=67EBCD22')"
      }}
    >
      <div className="flex flex-col border rounded-full p-10 z-10 border-white bg-white">
        <h1 className="text-black font-bold text-2xl sm:text-4xl md:text-5xl"
        >Chinguun Toivgoo</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-10 z-10">
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
        <button 
          className="mb-4 p-4 bg-white text-black rounded h-[100px] w-[300px] shadow-xl shadow-blue-900 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-cyan-900"
          onClick={() => router.push('/lab3/page')}
        >
          Lab 3
        </button>
        <button 
          className="mb-4 p-4 bg-white text-black rounded h-[100px] w-[300px] shadow-xl shadow-blue-900 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-cyan-900"
          onClick={() => router.push('/lab4/page')}
        >
          Lab 4
        </button>
      </div>
    </div>
  );
}
