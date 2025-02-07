"use client"

import { LoginDatabase } from "@/utility/database-functions";
import { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("");

    const [errorMsg, setErrorMsg] = useState(false);

    const handleLogin = async () => {
        try {
            setErrorMsg(false);
            const response = await LoginDatabase(username);
            if(Array.isArray(response)) {
                sessionStorage.setItem("id", response[0].id);
                sessionStorage.setItem("username", response[0].name);
                
                window.location.href = "/home-screen";
            }
            else {
                setErrorMsg(true);
            }

        }
        catch (error) {
            console.error("Error:", error);
        }
    }
    
    return (
        <section className="h-screen w-full bg-primaryBlue">
            <section className="flex flex-col justify-center items-center h-full">
                <h1 className="text-4xl font-bold mb-5">Login</h1>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Username" className="w-1/5 h-16 bg-secondaryBlue p-3 rounded-lg outline-none" />

                {errorMsg && <p className="text-red-500 mt-2">Username does not exist</p>}

                <button onClick={handleLogin} className="w-1/5 h-16 font-bold bg-brightBlue mt-10 rounded-lg hover:bg-brightBlue/40">Login</button>
                <p className="mt-5">Need an account? <a href="/register-screen" className="text-brightBlue hover:underline">Create one</a></p>
            </section>
        </section>
    )
}