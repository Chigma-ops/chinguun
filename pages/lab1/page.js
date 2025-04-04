"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function NameDisplayApp() {
  const [showName, setShowName] = useState(false);
  const router = useRouter();

  const handleButtonClick1 = () => setShowName(true);
  const handleButtonClick2 = () => setShowName(false);

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center gap-5 bg-cover bg-center relative">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-60"
        style={{ 
          backgroundImage: "url('https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/486281145_1058280036332656_8582639152140190605_n.png?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=nIWWYHUENMoQ7kNvgErU1Bd&_nc_oc=Adnk0YyTEW422tme3sGXQbfx1Z_xjzxOOk51ZKrHcD9wVmBSRdjwsMLVffMQNmdTfew&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=2rRo81hv_QP9RJ03wWthJg&oh=00_AYEK1TucqpVEOJn2yLoKpyy9fkMQJyR3satFMQHy7u4gZQ&oe=67F3EE62')"
        }}
      />
      
      <button
        className="absolute bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px] z-10"
        onClick={() => router.back()}
      >
        Back
      </button>

  
      <button 
        onClick={handleButtonClick1} 
        className="text-white border border-white p-10 backdrop-blur-lg rounded-full text-lg z-10"
      >
        Display Name
      </button>

      <button 
        onClick={handleButtonClick2} 
        className="text-white border border-white p-10   backdrop-blur-lg rounded-full text-lg z-10"
      >
        Delete Name
      </button>

      {showName && <p className="font-bold text-white z-10">Name: Chigma</p>}
    </div>
  );
}

export default NameDisplayApp;
