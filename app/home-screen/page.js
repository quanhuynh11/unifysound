"use client"

import { useEffect, useState } from "react";

export default function HomePage() {

    const [user, setUser] = useState({
        username: null,
        id: null
    });

    useEffect(() => {
        const user = {
            username: sessionStorage.getItem("username"),
            id: sessionStorage.getItem("id")
        }

        setUser(user);
    }, []);
    
    if(!user.username || !user.id) {
        return null;
    }

    const handleLogout = () => {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("id");
        window.location.href = "./";
    }

    return (
        <section>
            <h1>Home</h1>
            <p>Your username is: {user.username}</p>
            <p>Your id is: {user.id}</p>

            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5">Logout</button>
        </section>
    )
}