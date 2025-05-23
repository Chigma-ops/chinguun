"use client";

import { useRouter } from 'next/navigation';
import {  useState } from "react";

const data = [
  {
    id: 1,
    name: "Iphone 13 pro max",
    color: "gray",
    price: 2000000,
    image:
      "https://istorepreowned.co.za/cdn/shop/products/iPhone_13_Pro_Blue.png?v=1710874242",
    item: [
      {
        id: 10,
        name: "case",
        price: 50000,
      },
      {
        id: 11,
        name: "adapter",
        price: 100000,
      },
    ],
  },
  {
    id: 2,
    name: "Iphone 12 pro max",
    color: "blue",
    price: 1500000,
    image:
      "https://ola.tech/wp-content/uploads/iphone-12-pro-max-graphite.webp",
    item: [
      {
        id: 12,
        name: "case",
        price: 100000,
      },
      {
        id: 13,
        name: "adapter",
        price: 200000,
      },
    ],
  },
  {
    id: 3,
    name: "Iphone 12 pro sadffhkfk",
    color: "brown",
    price: 1700000,
    image:
      "https://ola.tech/wp-content/uploads/iphone-12-pro-max-graphite.webp",
    item: [
      {
        id: 14,
        name: "case",
        price: 1000000,
      },
      {
        id: 15,
        name: "case",
        price: 1000009,
      },
    ],
  },
  {
    id: 4,
    name: "Iphone 13 pro safsafddga",
    color: "white",
    price: 2500000,
    image:
      "https://ola.tech/wp-content/uploads/iphone-12-pro-max-graphite.webp",
    item: [
      {
        id: 16,
        name: "case",
        price: 3000089,
      },
      {
        id: 17,
        name: "adapter",
        price: 3993408,
      },
    ],
  },
  {
    id: 5,
    name: "Iphone 16 prosafsaddjfgsdhgfisdahgfhksgdafh",
    color: "sky blue",
    price: 2500000,
    image:
      "https://istorepreowned.co.za/cdn/shop/products/iPhone_13_Pro_Blue.png?v=1710874242",
    item: [
      {
        id: 18,
        name: "case",
        price: 3000089,
      },
      {
        id: 19,
        name: "adapter",
        price: 3993408,
      },
    ],
  },
];
export default function Lab1() {
  const router = useRouter();
  const [search, setSearch] = useState("");


  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


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
          alt="image description"
          className="mt-5 w-40 h-40"  
        />
        <h1 className="text-black mt-10 text-2xl">Chinguun Toivgoo</h1>
        <h2 className="text-purple-600 mt-6">Nest Education It School</h2>
        <p className="text-black mt-5 cursor-pointer" onClick={() => router.push("/hicheel1/page")}>lab1</p>
        <p className="text-black mt-5 cursor-pointer">lab2</p>
        <p className="text-black mt-5 cursor-pointer" onClick={() => router.push("/uliral4.2/lab2")}>lab3</p>
      </div>

      <div className="w-[80%] bg-gray-200 h-[95vh] rounded-xl p-5 flex flex-col gap-y-10">
        <div className="flex gap-x-10 ">
          <div className="items-center flex justify-center h-[50px] w-[200px] bg-gray-700 rounded-xl text-white">
            Харилцагчид
          </div>
          <input
            type="text"
            placeholder="Hello Chinguun..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border-2 shadow-xl shadow-blue rounded-xl px-4 py-2 text-black cursor-pointer h-[50px] w-[500px]"
          />
          <div className="border border-2 border-amber-400 bg-amber-200 h-[50px] w-[50px] rounded-xl"></div>
          <div className="bg-amber-600 items-center justify-center h-[50px] w-[400px] rounded-xl flex text-white">
            Харилцагчид бүртгэх
          </div>
        </div>

        <div className="bg-gray-700 flex flex-col gap-4 p-2 rounded-xl">
          <div className="p-4 flex flex-col gap-5">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="text-black w-full bg-white rounded-xl p-6 flex flex-wrap justify-between items-center"
              >
                <div className="border border-amber-300 h-[20px] w-[20px]"></div>
                <div className="w-[100px] truncate">{item.name}</div>
                <div className="w-[100px]">{item.price}</div>
                <div className="w-[100px]">{item.color}</div>
                <div>{item.item.map((item) => (
                  <div className='text-black '>{item.name}</div>
                ))}</div>
                <div>{item.item.map((item) => (
                  <div className='text-black '>{item.price}</div>
                ))}</div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover h-[50px] w-[50px]"
                />
                <div className="flex gap-x-5">
                  <div className="h-[30px] w-[30px] rounded-sm bg-amber-300"></div>
                  <div className="h-[30px] w-[30px] rounded-sm bg-red-300"></div>
                </div>
              </div>
            ))}
            {filteredData.length === 0 && (
              <div className="text-white">No items found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 