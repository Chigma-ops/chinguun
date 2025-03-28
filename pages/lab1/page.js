"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function App() {
  const [showName, setShowName] = useState(false);
  const router = useRouter();

  const handleButtonClick1 = () => {
    setShowName(true);
  };

  const handleButtonClick2 = () => {
    setShowName(false);
  };

  return (
    <div className='bg-black h-screen flex flex-col justify-center items-center gap-5 bg-cover bg-center'>
         <button
                className="absolute bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px]"
                onClick={() => router.back()}
            >
                Back
            </button>
      <button onClick={handleButtonClick1} className='text-white border border-white p-10 rounded-full'>
        Display Name
      </button>
      <button onClick={handleButtonClick2} className='text-white border border-white p-10 rounded-full'>
        Delete Name
      </button>
      {showName && <p className='font-bold text-white'>Name: Chigma</p>}
    </div>
  );
}

export default App;
