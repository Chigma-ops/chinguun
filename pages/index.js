"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';  

export default function Lab5() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-black h-screen justify-center items-center gap-5 relative bg-cover bg-center bg-gradient-to-r from-blue-950 to-slate-900">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-60" 
           style={{ backgroundImage: "url('https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/486281145_1058280036332656_8582639152140190605_n.png?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=nIWWYHUENMoQ7kNvgErU1Bd&_nc_oc=Adnk0YyTEW422tme3sGXQbfx1Z_xjzxOOk51ZKrHcD9wVmBSRdjwsMLVffMQNmdTfew&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=2rRo81hv_QP9RJ03wWthJg&oh=00_AYEK1TucqpVEOJn2yLoKpyy9fkMQJyR3satFMQHy7u4gZQ&oe=67F3EE62')"}}>
      </div>

      <div className="z-10 flex flex-col items-center gap-4 p-6 text-center border rounded-full bg-opacity-50 backdrop-blur-lg">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-shadow-md">
          Chinguun Toivgoo
        </h1>
      </div>

      <div className="z-10 flex flex-col sm:flex-row sm:gap-10 p-6 gap-4 bg-opacity-60 backdrop-blur-lg border-2 border-gray-800 rounded-lg shadow-lg">
        
        <button 
          className="p-6 bg-blue-800 text-white rounded-lg shadow-md  hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative group"
          onClick={() => router.push('/lab1/page')}
        >
          <Image 
            src="/lab1.png"  
            alt="Lab 1"
            width={250}     
            height={100}   
            className="group-hover:opacity-0 transition-all duration-300"  
          />
          <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-xl font-bold">
            Lab 1
          </span>
        </button>

        <button 
          className="p-6 bg-blue-800 text-white rounded-lg shadow-md  hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative group"
          onClick={() => router.push('/lab2/page')}
        >
          <Image 
            src="/lab2.png"  
            alt="Lab 2"
            width={250}     
            height={100}   
            className="group-hover:opacity-0 transition-all duration-300"  
          />
          <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-xl font-bold">
            Lab 2
          </span>
        </button>

        <button 
          className="p-6 bg-blue-800 text-white rounded-lg shadow-md  hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative group"
          onClick={() => router.push('/lab3/page')}
        >
          <Image 
            src="/lab3.png"  
            alt="Lab 3"
            width={250}     
            height={100}   
            className="group-hover:opacity-0 transition-all duration-300"  
          />
          <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-xl font-bold">
            Lab 3
          </span>
        </button>

        <button 
          className="p-6 bg-blue-800 text-white rounded-lg shadow-md  hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative group"
          onClick={() => router.push('/lab4/page')}
        >
          <Image 
            src="/lab4.png"  
            alt="Lab 4"
            width={250}     
            height={100}   
            className="group-hover:opacity-0 transition-all duration-300"  
          />
          <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-xl font-bold">
            Lab 4
          </span>
        </button>
      </div>
    </div>
  );
}
