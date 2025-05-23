import axios from "axios";
import { useState } from "react";

export default function Post() {
    const [name, setName] = useState("");
    const [ovog, setOvog] = useState("");

    const handleSubmit = () => {
        axios.post("http://localhost:8080/createUsers", {
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

    console.log(name, ovog);

    return (
        <div className="ml-2">
            <div className="flex items-center">
                <p className="text-3xl font-bold">Post page:</p>
                <button className="bg-blue-400 rounded-2xl p-3 m-4 text-2xl text-white">
                    Create users
                </button>

                {/* ✅ New Submit Button */}
                <button 
                    onClick={handleSubmit}
                    className="bg-green-500 rounded-2xl p-3 m-4 text-2xl text-white"
                >
                    Submit User
                </button>
            </div>
            <div className="text-3xl space-y-4">
                <div>
                    <label>Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="border rouded-lg bg-white ml-2 p-3"
                        placeholder="Neree oruulna uu"
                    />
                </div>
            </div>
            <label>Ovog:</label>
            <input
                type="text"
                value={ovog}
                onChange={(e) => setName(e.target.value)}
                className="border rouded-lg bg-white ml-2 p-3"
                placeholder="Ovgoo oruulna uu"
            />
        </div>
    );
}
