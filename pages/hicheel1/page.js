"use client";

import { useEffect } from "react";

export default function Lab5() {
  useEffect(() => {
    document.querySelectorAll("[data-scroll-to]").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-scroll-to");
        const targetElement = document.querySelector(targetId);


        console.log(targetElement);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Element with ID ${targetId} not found`);
        }
      });
    });
  }, []);

  return (
    <div>
      <div className="bg-white h-[100px] w-full flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
        <img
          className="w-[100px] md:w-[140px] ml-2 md:ml-[145px]"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Logo"
        />
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mr-4 md:mr-[100px]">
          <button
            className="text-black font-bold hover:text-orange-300 cursor-pointer"
            data-scroll-to="#section1"
          >
            Үйлчилгээ
          </button>
          <p className="text-black font-bold hover:text-orange-300 cursor-pointer"
          data-scroll-to="#section2" 
          >
            Давуу тал
          </p>
          <p className="text-black font-bold hover:text-orange-300 cursor-pointer"
        data-scroll-to="#section3" 
          >
            Мэдээ
          </p>
          <p className="text-black font-bold hover:text-orange-300 cursor-pointer"
          data-scroll-to="#section4" 
          >
            Хамтран ажиллах
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-orange-100 py-10 px-4 text-center w-full h-screen">
        <p className="font-light text-black text-2xl md:text-3xl mb-6">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭ НЭГ ДООРООС....
        </p>
        <img
          className="w-full max-w-md md:max-w-xl mb-6"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
          alt=""
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          <img
            className="h-[60px] md:h-[100px] w-auto"
            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
            alt="App Store"
          />
          <img
            className="h-[60px] md:h-[100px] w-auto"
            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
            alt="Play Store"
          />
        </div>
      </div>

      <div className="bg-gray-100 w-full py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-10 h-screen" id="section1">
        <img
          className="w-full max-w-xl"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"
          alt=""
        />
        <div className="text-left max-w-lg">
          <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-semibold mb-4">
            Toki Service
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний
            төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд
            хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
          </p>
        </div>
      </div>

      <div
        className="bg-orange-100 w-full py-16 px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-10 h-screen" id="section2"
      >
        <div className="text-left max-w-lg md:text-right">
          <h2 className="text-orange-300 text-2xl md:text-3xl font-semibold mb-4">
            Toki Pay
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал
            хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт
            болон бичиг баримтуудаа нэг дор хадгалаарай.
          </p>
        </div>
        <img
          className="w-full max-w-xl"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"
          alt=""
        />
      </div>

      <div className="bg-gray-100 w-full py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-10 h-screen" id="section3">
        <img
          className="w-full max-w-xl"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png"
          alt=""
        />
        <div className="text-left max-w-lg">
          <h2 className="text-orange-300 text-2xl md:text-3xl font-semibold mb-4">
            Toki Shop
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг
            дороос шууд захиалах боломжтой.
          </p>
        </div>
      </div>

      <div className="bg-white w-full py-16 px-4 flex flex-col items-center space-y-6 text-center" id="section4">
        <p className="text-orange-300 text-2xl md:text-3xl font-semibold">
          Toki апп өдөр бүр танд тусална
        </p>
        <p className="text-gray-700 max-w-2xl">
          Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор
          багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
        </p>
      </div>

      <div className="bg-orange-100 w-full py-10 flex justify-center items-center">
        <div className="bg-amber-400 rounded-full p-4 px-8 font-bold cursor-pointer">
          ДАВУУ ТАЛ
        </div>
      </div>

      <div className="bg-black w-full py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center text-sm space-y-6 md:space-y-0">
        <img
          className="w-[100px]"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Logo"
        />
        <div className="space-y-1 text-gray-400">
          <p className="hover:text-orange-200 cursor-pointer">
            Түгээмэл асуулт
          </p>
          <p>Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
          <p>77074477, 4477 info@toki.mn</p>
          <p>Copyright © 2022 | Toki.mn</p>
        </div>
        <div className="text-gray-400 hover:text-orange-200 cursor-pointer">
          Нууцлал
        </div>
      </div>
    </div>
  );
}
