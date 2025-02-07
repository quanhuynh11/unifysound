"use client"

import { RegisterDatabase } from "@/utility/database-functions";
import { useState } from "react";

export default function RegisterScreen() {

    const [username, setUsername] = useState("");

    const [showSuccess, setShowSuccess] = useState(false);

    const [showFail, setShowFail] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await RegisterDatabase(username);
            
            if(response) {
                setShowSuccess(true);
                window.location.href = "./";
            }
            else {
                setShowFail(true);
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <section className="h-screen w-full bg-primaryBlue">
            <section className="flex flex-col justify-center items-center h-full">
                <h1 className="text-4xl font-bold mb-5">Register</h1>
                <form onSubmit={handleRegister} className="flex flex-col justify-center items-center w-full">
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Username" className="w-1/5 h-16 bg-secondaryBlue p-3 rounded-lg outline-none" />
                    {showSuccess && <p className="text-green-500">Registration successful!</p>}
                    {showFail && <p className="text-red-500">That username is already taken!</p>}
                    <button type="submit" className="w-1/5 h-16 font-bold bg-brightBlue mt-10 rounded-lg hover:bg-brightBlue/40">Register</button>
                    <p className="mt-5">Already have an account? <a href="./" className="text-brightBlue hover:underline">Login</a></p>
                </form>
            </section>
        </section>
    )
}