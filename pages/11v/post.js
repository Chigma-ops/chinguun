import axios from "axios";
import { useState, useEffect } from "react";

export default function Post() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [nas, setNas] = useState("");
  const [gm, setGm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = () => {

    setSubmitting(true);

    axios
      .post("http://localhost:8080/createUsers", {
        first_name: name,
        last_name: ovog,
        age: nas,
        email: gm,
      })
      .then((response) => {
        console.log("Response:", response.data);
        fetchData();
        setName("");
        setOvog("");
        setNas("");
        setGm("");
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/users");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-start p-8 space-y-10">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white border rounded-full p-5">Great Users</h1>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">Нэр</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full rounded-xl bg-white/90 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Нэрээ оруулна уу"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">Овог</label>
            <input
              type="text"
              value={ovog}
              onChange={(e) => setOvog(e.target.value)}
              className="w-full rounded-xl bg-white/90 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Овгоо оруулна уу"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">Нас</label>
            <input
              type="text"
              value={nas}
              onChange={(e) => setNas(e.target.value)}
              className="w-full rounded-xl bg-white/90 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Насаа оруулна уу"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">Gmail</label>
            <input
              type="text"
              value={gm}
              onChange={(e) => setGm(e.target.value)}
              className="w-full rounded-xl bg-white/90 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Gmail оруулна уу"
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition rounded-xl px-4 py-3 text-white text-lg font-bold ${
              submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={submitting}
          >
            {submitting ? "Уншиж байна..." : "Хэрэглэгч үүсгэх"}
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Бүртгэгдсэн Хэрэглэгчид</h2>
        {loading ? (
          <p className="text-white text-center">Түр хүлээнэ үү...</p>
        ) : data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((user, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-2xl p-4 text-white shadow-md transition hover:scale-[1.02] duration-300"
              >
                <h3 className="text-lg font-bold mb-1">
                  {user.first_name} {user.last_name}
                </h3>
                <p className="text-sm text-gray-300 mb-1">{user.age} настай</p>
                <p className="text-sm text-gray-300">{user.email}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center">Хэрэглэгч алга байна.</p>
        )}
      </div>
    </div>
  );
}
