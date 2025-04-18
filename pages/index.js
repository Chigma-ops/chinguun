"use client";

export default function Lab5() {
  return (
      <div>
        <div className="bg-white h-[100px] w-full flex items-center justify-between px-8">
        <img 
          className="w-[140px] ml-[200px]" 
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" 
        />
        <div className="flex space-x-6">
          <p className="text-black font-bold">Үйлчилгээ</p>
          <p className="text-black font-bold">Давуу тал</p>
          <p className="text-black font-bold">Мэдээ</p>
          <p className="text-black font-bold">Хамтран ажиллах</p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-amber-500 h-screen w-full">
       <div className="text-center">
       <p className="font-bold text-black text-2xl">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭ НЭГ ДООРООС....</p>
        <img className=" h-full" src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png" />
       </div>
       </div>

      </div>
  );
}
