"use client"

import { getSongs } from "@/utility/database-functions";
import { useEffect, useState } from "react"
import SongCard from "./song-card";

export default function SongList({ reRender, setReRender }) {

    const [songs, setSongs] = useState([]);


    useEffect(() => {
        const getSongData = async () => {
            try {
                const data = await getSongs();

                if (Array.isArray(data)) {
                    setSongs(data);
                }
                else {

                }
            }
            catch (error) {
                console.log(error);
            }
        }

        getSongData();
    }, [reRender])

    return (
        <section className="flex justify-center flex-wrap items-center text-center ">
            { 
                songs.map((song) => (
                    <SongCard key={song.id} song={song} setReRender={() => setReRender(!reRender)} />
                ))
            }
        </section>
    )
}