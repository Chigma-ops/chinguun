"use client";

import { useState } from "react";

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
    name: "Iphone 12 pro",
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
    name: "Iphone 13 pro",
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
    name: "Iphone 16 pro",
    color: "sky blue",
    price: 2500000,
    image:
      "https://ola.tech/wp-content/uploads/iphone-12-pro-max-graphite.webp",
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
  return (
    <div className="flex gap-x-6 p-4 bg-gray-400">
      <div className="w-[20%] bg-gray-200 h-[95vh] rounded-xl flex flex-col items-center">
        <img
          src="https://nhs.edu.mn/favicon.ico"
          alt="image description"
          className="mt-5 w-40 h-40"
        />
        <h1 className="text-black mt-10 text-2xl">Chinguun Toivgoo</h1>
        <h2 className="text-purple-600 mt-6">Nest Education It School</h2>
        <p className="text-black mt-5">lab1</p>
        <p className="text-black mt-5">lab2</p>
        <p className="text-black mt-5">lab3</p>
      </div>

      <div className="w-[80%] bg-gray-200 h-[95vh] rounded-xl p-10">
        <div className="bg-gray-700 flex flex-col gap-4 p-6 rounded-xl">
          <div className=" p-10 flex flex-col gap-10">
            {data.map((item) => (
              <div className="text-black w-full bg-white h-8
               rounded-xl p-10">{item.name}</div>
               
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
