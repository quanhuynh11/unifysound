"use client"

import { getSongs } from "@/utility/database-functions";
import { useEffect, useState } from "react"

export default function SongList() {

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
    }, [])

    return (
        <section className="flex justify-center flex-wrap items-center text-center">
            { 
                songs.map((song) => (
                    <div className="p-5 m-5 bg-tertiaryBlue rounded-lg" key={song.id}>
                        <p className="font-bold">{song.title}</p>
                        <p>-{song.artist}-</p>
                        <img className="w-48 h-48" src={song.picture_url} alt={song.title} />
                    </div>
                ))
            }
        </section>
    )
}