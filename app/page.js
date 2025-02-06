"use client"

import { LoginDatabase } from "@/utility/database-functions";
import { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("");

    const handleLogin = async () => {
        const response = LoginDatabase(username);

        window.location.href = "/home-screen";
    }
    
    return (
        <section className="h-screen w-full bg-primaryBlue">
            <section className="flex flex-col justify-center items-center h-full">
                <h1 className="text-4xl font-bold mb-5">Login</h1>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Username" className="w-1/5 h-16 bg-secondaryBlue p-3 rounded-lg outline-none" />

                <button onClick={handleLogin} className="w-1/5 h-16 font-bold bg-brightBlue mt-10 rounded-lg hover:bg-brightBlue/40">Login</button>
                <p>{username}</p>
            </section>
        </section>
    )
}