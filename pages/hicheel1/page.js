"use client";

export default function Lab5() {
  return (
      <div>
        <div className="bg-white h-[100px] w-full flex items-center justify-between px-8 sticky top-0">
        <img 
          className="w-[140px] ml-[145px]" 
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" 
        />
        <div className="flex space-x-6 mr-[100px]">
          <p className="text-black font-bold hover:text-orange-300 cursor-pointer">Үйлчилгээ</p>
          <p className="text-black font-bold hover:text-orange-300 cursor-pointer">Давуу тал</p>
          <p className="text-black font-bold hover:text-orange-300 cursor-pointer">Мэдээ</p>
          <p className="text-black font-bold hover:text-orange-300 cursor-pointer">Хамтран ажиллах</p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-orange-100 h-full w-full">
       <div className="text-center">
       <p className="font-light text-black text-3xl pt-30">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭ НЭГ ДООРООС....</p>
        <img className="" src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png" />
        <div className="flex justify-center">
            <img 
              className="h-[100px] w-[580px]" 
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" 
            />
            <img 
              className="h-[100px] w-[580px]" 
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" 
            />
          </div>
       </div>
       </div>
      <div className="bg-gray-100 w-full py-20 px-10 flex justify-center items-center  h-screen">
    <img
      className="w-[800px]"
      src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"
    />
  <div className="text-left">
    <h2 className="text-[#FBBF24] text-3xl font-semibold mb-4">Toki Service</h2>
    <p className="text-gray-700 text-base leading-relaxed">
      Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний
      төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй
      үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
    </p>
  </div>
</div>
<div className=" bg-orange-100 w-full py-20 px-30 flex justify-center items-center  h-screen">
  <div className="text-left">
    <h2 className="text-orange-300 text-3xl font-semibold mb-4 text-right">Toki Pay</h2>
    <p className="text-gray-700 text-base leading-relaxed text-right">
    Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.
    </p>
  </div>
  <img  className="w-[800px]"
      src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"></img>
</div>
<div className="bg-gray-100 w-full py-20 px-10 flex justify-center items-center  h-screen">
    <img
      className="w-[800px]"
      src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png"
    />
  <div className="text-left">
    <h2 className="text-orange-300 text-3xl font-semibold mb-4">Toki Shop</h2>
    <p className="text-gray-700 text-base leading-relaxed">
    Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.
    </p>
  </div>
</div>
<div className="bg-white w-full py-30 flex flex-col justify-center items-center h-[500px] space-y-10">
  <p className="text-orange-300 text-3xl font-semibold">Toki апп өдөр бүр танд тусална</p>
  <p className="text-gray-700 ">Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.</p>
</div>
<div className="bg-orange-100 w-full py-20 flex flex-col justify-center items-center h-[50px]">
  <div className="bg-amber-400 rounded-full p-5 px-15 font-bold cursor-pointer">ДАВУУ ТАЛ</div>
</div>
<div className="bg-black w-full py-30 px-40 flex flex-row items-center h-[100px] justify-between">
  <img 
    className="w-[100px] mr-6" 
    src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" 
    alt="Logo"
  />
  <div className="space-y-1">
  <p className="text-gray-400 text-sm hover:text-orange-200 cursor-pointer">Түгээмэл асуулт</p>
  <p className="text-gray-400 text-sm">Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
  <p className="text-gray-400 text-sm">77074477, 4477 info@toki.mn</p>
  <p className="text-gray-400 text-sm">Copyright © 2022 | Toki.mn</p>
  </div>
  <div className="flex">
  <p className="text-gray-400 text-sm hover:text-orange-200 cursor-pointer">Нууцлал</p>
  
  </div>
</div>





      </div>
  );
}