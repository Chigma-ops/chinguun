"use client";  

import { useState } from "react"; 


const exampleData = [
    {
        id: 1,
        firstname: "Chinguun",
        lastname: "Toivgoo",
        school: "NIT",
        job: "developer",
        alive: "true",
        items: [
            { id: 10, name: "keyboard" },
            { id: 11, name: "mouse" }
        ],
        height: 185,
        image: 
        "https://gfxcrate.com/cdn/shop/collections/ss_959c2ea2f9129e4fb56e0b8ef7f78e498ab9866e.1920x1080.jpg?v=1737225190"
    },
    {
        id: 2,
        firstname: "Anand",
        lastname: "Altankhuyag",
        school: "NIT",
        job: "Software",
        alive: "true",  
        items:[
            { id: 12, name: "bag"},
            { id: 13, name: "phone"}
        ],
        height: 190,
        image:
        "https://w0.peakpx.com/wallpaper/426/583/HD-wallpaper-walter-white-jesse-pinkman-breaking-bad-jesse-pinkman-meth-walter-white-thumbnail.jpg"
    },
    {
        id: 3,
        firstname: "Anduul",
        lastname: "Altankhaich",
        school: "NIT",
        job: "UI-UX Designer",
        alive: "true",
        items:[
            { id: 14, name: "mouse"},
            { id: 15, name: "knife"}
        ],
        height: 190,
        image:
        "https://resizing.flixster.com/6OpOE_Poe-6srswUlPV0UDq7e-A=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p185267_b_h10_aa.jpg"
    },
    {
        id: 4,
        firstname: "Anar",
        lastname: "Batsukh",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "airpod"},
            { id: 17, name: "pen"}
        ],
        height: 190,
        image:
        "https://i.guim.co.uk/img/media/8fc2d2159d4cadcec1eb1ab8c6eace7bdc693fea/0_140_4284_2570/master/4284.jpg?width=1200&quality=85&auto=format&fit=max&s=1a7076caeed54b8771676939f8ec3094"
    },
    {
        id: 5,
        firstname: "Aidaulet",
        lastname: "Nurbulsin",
        school: "NIT",
        job: "Machine Learning",
        alive: "true",
        items: [
            { id: 10, name: "smart" },
            { id: 11, name: "nike" }
        ],
        height: 185,
        image: 
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b81c2865-f3f7-4c2d-9389-fc560e29404d/dc8t47q-8f2bf3db-7dd7-4aec-b8c9-5c99ac793f44.png/v1/fill/w_1024,h_576,q_80,strp/team_6_vanoss_rap_song_thumbnail_by_heymrnoodles_dc8t47q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4MWMyODY1LWYzZjctNGMyZC05Mzg5LWZjNTYwZTI5NDA0ZFwvZGM4dDQ3cS04ZjJiZjNkYi03ZGQ3LTRhZWMtYjhjOS01Yzk5YWM3OTNmNDQucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iODFjMjg2NS1mM2Y3LTRjMmQtOTM4OS1mYzU2MGUyOTQwNGRcL2hleW1ybm9vZGxlcy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Hm5w1X2fh5Fn93NlHZGSJYP-nSCFsJWz0HZBI_Pm9A0"
    },
    {
        id: 6,
        firstname: "Khantushig",
        lastname: "Ganhuyag",
        school: "NIT",
        job: "Businessman",
        alive: "true",
        items:[
            { id: 12, name: "Real win"},
            { id: 13, name: "barca jersey"}
        ],
        height: 190,
        image:
        "https://historyradio.org/wp-content/uploads/2018/03/napoleon-bonaparte-youtube-Thumbnail-1080x675-1024x640.png"
    },
    {
        id: 7,
        firstname: "Ayden-Anand",
        lastname: "AmarBold",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 14, name: "skibidi"},
            { id: 15, name: "roblox"}
        ],
        height: 190,
        image:
        "https://preview.redd.it/saw-this-cool-looking-you-tube-thumbnail-v0-0yjj0ukmp6nd1.png?auto=webp&s=aa39fb3ee9bfe477f09782d7c6433eb935e143df"
    },
    {
        id: 8,
        firstname: "Erkhes",
        lastname: "Sanchir",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "bag"},
            { id: 17, name: "phone"}
        ],
        height: 190,
        image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-iEXhHDsOmKXw2d_bVGiQYCW7Fwr2TsaY7hjEOyrZE-be9kwOEcU0JoCwskFJI9byYjX3NFwlNrvqglP9g8ZfmWk_-RYdH83i4ozkLAKjypkBEYEx01RpuoFaDL1B0YjB8TucWh3DbC4/w1200-h630-p-k-no-nu/AwakenMyLove.jpg"
    },
    {
        id: 9,
        firstname: "Batpurev",
        lastname: "Batmunkh",
        school: "NIT",
        job: "Software Engineer",
        alive: "true",
        items:[
            { id: 14, name: "IT engineer"},
            { id: 15, name: "notebook"}
        ],
        height: 190,
        image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/256949692/original/29ebec4371296992451652d7d89f44405ec35ee1/design-anime-thumbnails-that-attracts-viewers.jpg"
    },
    {
        id: 10,
        firstname: "Soyombo",
        lastname: "Chinguunjav",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "angry"},
            { id: 17, name: "sigma"}
        ],
        height: 190,
        image:
        "https://media.gettyimages.com/id/1409368635/video/macro-video-small-green-frog-in-garden-on-a-leaf.jpg?s=640x640&k=20&c=beIdOpIWwACkKGS8RF91WPgGyxn91UJimW7adui_2rE="
    },
    {
        id: 11,
        firstname: "Serjmyadag",
        lastname: "Gantur",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "headphone"},
            { id: 17, name: "perfume"}
        ],
        height: 190,
        image:
        "https://w0.peakpx.com/wallpaper/224/824/HD-wallpaper-beauty-red-model-rose-girl-hand-flower-face-woman-thumbnail.jpg"
    },
    {
        id: 12,
        firstname: "Tsolmon",
        lastname: "Battulga",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "iphone"},
            { id: 17, name: "airpod"}
        ],
        height: 190,
        image:
        "https://w0.peakpx.com/wallpaper/121/369/HD-wallpaper-beautiful-girl-flower-aesthetic-ultra-girls-flower-girl-style-beautiful-portrait-woman-design-human-background-charming-young-face-female-beauty-model-gerbera-fashion-look-pretty-thumbnail.jpg"
    },
    {
        id: 13,
        firstname: "Oyunbileg",
        lastname: "Chimeddorj",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "perfume"},
            { id: 17, name: "bag"}
        ],
        height: 190,
        image:
        "https://w0.peakpx.com/wallpaper/312/247/HD-wallpaper-unknown-model-beautiful-model-woman-gorgeous.jpg"
    },
    {
        id: 14,
        firstname: "Telmuun",
        lastname: "Tserenbaljir",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "ipad"},
            { id: 17, name: "beats pro"}
        ],
        height: 190,
        image:
        "https://w0.peakpx.com/wallpaper/501/886/HD-wallpaper-unknown-model-babe-model-blonde-beautiful-woman-sexy.jpg"
    },
    {
        id: 15,
        firstname: "Azzaya",
        lastname: "Amarbat",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "phone"},
            { id: 17, name: "notebook"}
        ],
        height: 190,
        image:
        "https://static.vecteezy.com/system/resources/thumbnails/028/839/115/small/a-beautiful-pensive-woman-looks-out-the-window-at-night-during-the-rain-and-drops-flow-down-the-glass-face-of-a-sad-girl-close-up-ai-generated-free-photo.jpg"
    },
    {
        id: 16,
        firstname: "Naran-Erdene",
        lastname: "Gankhuyag",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "phone"},
            { id: 17, name: "notebook"}
        ],
        height: 190,
        image:
        "https://indyguide-web-development.s3.us-east-2.amazonaws.com/listings/images/thumbnail/Khuvsgul-Lake-Tour-1609748256370.webp"
    },
    {
        id: 17,
        firstname: "Minori",
        lastname: "Daknhat",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "phone"},
            { id: 17, name: "notebook"}
        ],
        height: 190,
        image:
        "https://static.vecteezy.com/system/resources/thumbnails/029/573/472/small_2x/a-beautiful-pensive-woman-looks-out-the-window-at-night-during-the-rain-and-drops-flow-down-the-glass-face-of-a-sad-girl-close-up-photo.jpg"
    },
    {
        id: 18,
        firstname: "Yesui",
        lastname: "Enkhbayr",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "phone"},
            { id: 17, name: "notebook"}
        ],
        height: 190,
        image:
        "https://static.vecteezy.com/system/resources/previews/028/847/703/large_2x/a-beautiful-pensive-woman-looks-out-the-window-at-night-during-the-rain-and-drops-flow-down-the-glass-face-of-a-sad-girl-close-up-ai-generated-free-photo.jpg"
    },
    {
        id: 19,
        firstname: "Gunsan-Yanjin",
        lastname: "Tsengel",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "phone"},
            { id: 17, name: "notebook"}
        ],
        height: 190,
        image:
        "https://static.vecteezy.com/system/resources/thumbnails/028/838/954/small_2x/a-beautiful-pensive-woman-looks-out-the-window-at-night-during-the-rain-and-drops-flow-down-the-glass-face-of-a-sad-girl-close-up-ai-generated-photo.jpg"
    },
    {
        id: 20,
        firstname: "Hulan",
        lastname: "Sukhdorj",
        school: "NIT",
        job: "developer",
        alive: "true",
        items:[
            { id: 16, name: "phone"},
            { id: 17, name: "notebook"}
        ],
        height: 190,
        image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/681/607/small_2x/a-beautiful-pensive-woman-looks-out-the-window-at-night-during-the-rain-and-drops-flow-down-the-glass-face-of-a-sad-girl-close-up-ai-generated-photo.jpg"
    },
];
export default function Lab5() {
    const [search, setSearch] = useState("");
    const [toggle, setToggle] = useState(false);
  
    const filterData = exampleData.filter((element) =>
      element.firstname.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="p-10">
        <div className="flex z-50 justify-between fixed  top-0 right-0 left-0">
          <button
            className="shadow-xl border border-gray-400 text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 hover:-translate-y-1 px-8 py-4 font-semibold transition duration-300 rounded-full"
            onClick={() => setToggle(!toggle)}
          >
            Row
          </button>
  
          <input
            type="text"
            placeholder="Enter name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-2 border-blue-800 shadow-xl shadow-blue rounded-xl px-4 py-2 text-black cursor-pointer hover:-translate-y-1 transition duration-300"
          />
        </div>
  
        {!toggle && (
          <div className="grid grid-cols-4 gap-10">
            {filterData.length > 0 ? (
              filterData.map((element) => (
                <div
                  key={element.id}
                  className="p-5 rounded-lg text-black border-white border shadow-xl shadow-blue-500 transition-transform duration-300 transform hover:scale-105"
                >
                  <img
                    src={element.image}
                    className="object-cover rounded h-[200px] w-[300px]"
                    alt="Profile"
                  />
                  <div className="ml-5">
                    <p className="text-white font-semibold ml-2">{element.firstname}</p>
                    <p className="text-white ml-2">Lastname: {element.lastname}</p>
                    <p className="text-purple-700 ml-2">School: {element.school}</p>
                    <p className="text-purple-700 ml-2">Job: {element.job}</p>
                    <div className="mt-2 ml-2">
                      <p className="text-blue-400 font-semibold">Items:</p>
                      <ul className="list-disc ml-5 text-white">
                        {element.items.map((item) => (
                          <li key={item.id}>{item.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
                <div className="flex items-center justify-center h-screen w-screen">
                <p className="text-white font-semibold text-2xl">
                  !!!!!!Хайлт олдсонгүй
                </p>
              </div>
            )}
          </div>
        )}
  
        {toggle && (
          <div className="p-5 flex flex-col gap-10">
            {filterData.length > 0 ? (
              filterData.map((element) => (
                <div
                  key={element.id}  
                  className="p-5 rounded-lg text-black border-white border shadow-xl shadow-blue-500 transition-transform duration-300 transform hover:scale-105"
                >
                  <img
                    src={element.image}
                    className="object-cover rounded h-[100px] w-max"
                    alt="Profile"
                  />
                  <div className="ml-5">
                    <p className="text-white font-semibold ml-2">{element.firstname}</p>
                    <p className="text-white ml-2">Lastname: {element.lastname}</p>
                    <p className="text-purple-700 ml-2">School: {element.school}</p>
                    <p className="text-purple-700 ml-2">Job: {element.job}</p>
                    <div className="mt-2 ml-2">
                      <p className="text-blue-400 font-semibold">Items:</p>
                      <ul className="list-disc ml-5 text-white">
                        {element.items.map((item) => (
                          <li key={item.id}>{item.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
                <div className="flex items-center justify-center h-screen w-screen">
                <p className="text-white font-semibold text-2xl">
                  !!!!!!Хайлт олдсонгүй
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
