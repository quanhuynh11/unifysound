"use client"

import { useState } from "react";

export default function HomePage() {

    const [user, setUser] = useState(sessionStorage.getItem("user") || null);
    
    if(!user) {
        window.location.href = "/";
    }

    return (
        <section>
            <h1>Home</h1>
            <p>{user}</p>
        </section>
    )
}