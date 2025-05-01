"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


export default  function lab2() {
    const router = useRouter();
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const responce = await fetch(
                    "https://mongol-api-rest.vercel.app/clothes"
                );

                const result = await response.json();


                setData(result);
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    console.log(data);

    return(
       <div className='bg-gray-300 h-screen w-full'>
        <div className='flex'>
            <div>
                {data.clothes.map((item, index) => (
                    <div
                     key={index}
                className="text-black w-full bg-white rounded-xl p-6 flex flex-wrap justify-between items-center"
                    >
                <div className="w-[100px] truncate">{item.name}</div>
                <div className="w-[100px]">{item.price}</div>
                <div className="w-[100px]">{item.color}</div>

                    </div>
                ))}
            </div>
        </div>
       </div>
    )
}