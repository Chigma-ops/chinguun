"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Lab2() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

<<<<<<< HEAD
=======
  // Filter data by name
>>>>>>> 9c8187b5e04f10020a15ba070b1ffee6c0b3054e
  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

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

        setData([
          ...result1.clothes,
          ...result2.instruments,
          ...result3.historicalTools,
          ...result4.ethnicGroups,
          ...result5.provinces,
          ...result6.historicalFigures,
          ...result7.touristAttractions,
        ]);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-x-6 p-4 bg-gray-400">
<<<<<<< HEAD
=======
      {/* Back button */}
>>>>>>> 9c8187b5e04f10020a15ba070b1ffee6c0b3054e
      <button
        className="fixed bottom-4 left-4 border bg-white py-2 px-4 text-black rounded text-sm w-[200px] h-[50px] z-50"
        onClick={() => router.back()}
      >
        Back
      </button>

<<<<<<< HEAD
=======
      {/* Sidebar */}
>>>>>>> 9c8187b5e04f10020a15ba070b1ffee6c0b3054e
      <div className="w-[20%] bg-gray-200 h-[95vh] rounded-xl flex flex-col items-center">
        <img
          src="https://nhs.edu.mn/favicon.ico"
          alt="Profile Icon"
          className="mt-5 w-40 h-40"
        />
        <h1 className="text-black mt-10 text-2xl">Chinguun Toivgoo</h1>
        <h2 className="text-purple-600 mt-6">Nest Education IT School</h2>

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

<<<<<<< HEAD

      <div className="w-[80%] h-[95vh] flex flex-col bg-gray-200 p-10 rounded-2xl">
=======
      {/* Main content */}
      <div className="w-[80%] h-[95vh] flex flex-col bg-gray-200 p-10 rounded-2xl">
        {/* Search bar and header */}
>>>>>>> 9c8187b5e04f10020a15ba070b1ffee6c0b3054e
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Hello Chinguun..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border-2 shadow-xl rounded-xl px-4 py-2 text-black h-[50px] w-[500px]"
          />
          <div className='h-[50px] w-full border-2 bg-purple-600 rounded-xl text-white flex items-center justify-center'>
            /NEST 11V T.CHINGUUN/ - ULAANBAATAR
          </div>
        </div>

<<<<<<< HEAD
=======
        {/* Loader or Content */}
>>>>>>> 9c8187b5e04f10020a15ba070b1ffee6c0b3054e
        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
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
          <div className="grid grid-cols-4 gap-10 overflow-y-auto">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="text-black bg-blue-200 rounded-xl p-6 flex flex-col items-center justify-center shadow-xl"
              >
                {item.images ? (
                  <img
                    src={item.images}
                    alt={item.name}
                    className="object-contain max-w-full h-[300px] rounded-xl"
                  />
                ) : (
                  <div className="flex items-center justify-center h-[300px] w-full bg-gray-300 text-gray-700 rounded-xl text-center p-4">
                    Don't have image
                  </div>
                )}

                <div className="flex flex-col gap-x-2 mt-4 text-center">
                  <div className="truncate font-semibold">{item.name}</div>
                  <div className="truncate font-semibold">/</div>
                  <div className="truncate font-semibold">{item.timePeriod}</div>
                </div>
                <div className="flex flex-col gap-y-1 mt-2 text-sm text-center">
                  <div className="text-gray-600">{item.description}</div>
                  <div>{item.linguistic}</div>
                  <div>{item.population}</div>
                  <div>{item.soums}</div>
                  <div>{item.countryOfBirth}</div>
                  <div>{item.dateOfDeath}</div>
                  <div>{item.accomplishment}</div>
                </div>
              </div>
            ))}
            {filteredData.length === 0 && (
              <div className="text-white">No items found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 9c8187b5e04f10020a15ba070b1ffee6c0b3054e
