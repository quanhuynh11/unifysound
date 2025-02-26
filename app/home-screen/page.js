"use client"

import { useEffect, useState } from "react";
import SongList from "../_components/song-list";
import AddSongForm from "../_components/add-song-form";

export default function HomePage() {

    const [user, setUser] = useState({
        username: null,
        id: null
    });

    const [renderAddSongForm, setRenderAddSongForm] = useState(false);

    useEffect(() => {
        const user = {
            username: sessionStorage.getItem("username"),
            id: sessionStorage.getItem("id")
        }

        setUser(user);
    }, []);

    if (!user.username || !user.id) {
        return null;
    }

    const handleLogout = () => {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("id");
        window.location.href = "./";
    }


    return (
        <section className="h-screen w-full bg-primaryBlue">
            { renderAddSongForm &&
                <AddSongForm />
            }
            <header className="flex flex-col justify-center items-center h-1/6 bg-secondaryBlue">

                <h1 className="text-4xl font-bold mb-5">Welcome {user.username}</h1>
                <p>Your id is: {user.id}</p>
                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded absolute top-1/6 right-5 ">Logout</button>
            </header>

            <section className="flex flex-col items-center h-5/6">
                <h1 className="text-4xl font-bold mt-5">Songs</h1>
                <button onClick={() => setRenderAddSongForm(true)} className="w-1/5 font-bold bg-brightBlue mt-5 p-5 rounded-lg hover:bg-brightBlue/40">Add Song</button>
                <section className="my-5 overflow-y-scroll">
                    <SongList />
                </section>
            </section>
        </section>
    )
}