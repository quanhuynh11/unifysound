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

    return (
        <section>
            <h1>Home</h1>
            <p>Your username is: {user.username}</p>
            <p>Your id is: {user.id}</p>
        </section>
    )
}