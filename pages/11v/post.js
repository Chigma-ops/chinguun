import axios from "axios";
import { useState } from "react";

export default function Post() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/createUsers", {
        first_name: name,
        last_name: ovog,
        age: 30,
        email: "test@gmail.com",
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-10 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Create User</h1>
          <button className="bg-blue-500 hover:bg-blue-600 transition rounded-xl px-4 py-2 text-white text-lg">
            Users
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Нэр</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full border rounded-lg bg-white px-4 py-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Нэрээ оруулна уу"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Овог</label>
            <input
              type="text"
              value={ovog}
              onChange={(e) => setOvog(e.target.value)}
              className="w-full border rounded-lg bg-white px-4 py-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Овгоо оруулна уу"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 transition rounded-xl px-4 py-3 text-white text-lg font-semibold"
          >
            Хэрэглэгч үүсгэх
          </button>
        </div>
      </div>
    </div>
  );
}
