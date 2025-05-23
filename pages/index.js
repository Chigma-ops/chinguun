"use client";


import { useRouter } from 'next/navigation';


export default function Lab5() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center bg-amber-500 h-screen w-full">
      <div className="text-center">
        <p className="font-bold text-black text-2xl mb-6">Navigate to Different Pages</p>
        
        <button
          onClick={() => router.push('/lab1/page')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Page 1
        </button>

        <button
          onClick={() => router.push('/lab2/page')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Page 2
        </button>

        <button
          onClick={() => router.push('/lab3/page')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Page 3
        </button>

        <button
          onClick={() => router.push('/lab4/page')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Page 4
<<<<<<< HEAD
        </button>

        <button
          onClick={() => router.push('/uliral4/lab1')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Uliral 4
        </button>
        <button
          onClick={() => router.push('/uliral4.2/lab2')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Uliral 4.2
=======
>>>>>>> 9c8187b5e04f10020a15ba070b1ffee6c0b3054e
        </button>

        <button
          onClick={() => router.push('/uliral4/lab1')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Uliral 4
        </button>
<<<<<<< HEAD
=======



>>>>>>> 064a4f2de559fd8c8a2cd77081fbce00da983a01
        <button
          onClick={() => router.push('/uliral4.2/lab2')}
          className="border text-white py-2 px-4 m-2 rounded"
        >
          Go to Uliral 4.2
        </button>
<<<<<<< HEAD

=======
>>>>>>> 064a4f2de559fd8c8a2cd77081fbce00da983a01
      </div>
    </div>
  );
}