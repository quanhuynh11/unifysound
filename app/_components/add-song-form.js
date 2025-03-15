import { addSong } from "@/utility/database-functions";
import { useEffect, useRef, useState } from "react";

export default function AddSongForm({ setRenderAddSongForm, setReRender }) {

    const formRef = useRef(null);

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [link, setLink] = useState("")
    const [picture, setPicture] = useState("/placeholder.svg")

    const handleAddSong = async (e) => {
        e.preventDefault();

        await addSong({ title, artist, link, picture });

        setRenderAddSongForm(false);
        setReRender();
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setRenderAddSongForm(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="flex fixed top-0 left-0 flex-col w-full h-full bg-gray-600/80 justify-center items-center">
            <section ref={formRef} className="w-1/2 h-3/4 flex flex-col items-center bg-primaryBlue p-5 rounded-lg overflow-auto">
                <h1 className="text-4xl font-bold mb-10">Add Song</h1>

                <section className="w-full flex justify-center items-center mb-10">
                    <img className="w-1/4" src={picture} alt="" />
                </section>

                <form onSubmit={handleAddSong} className="flex flex-col gap-5">
                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="title">Title</label>
                        <input onChange={(e) => setTitle(e.target.value)} className="p-3 rounded-md flex-1 text-black focus:outline-none" type="text" name="title" id="title" placeholder="Enter title" />
                    </section>

                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="artist">Artist</label>
                        <input onChange={(e) => setArtist(e.target.value)} className="p-3 rounded-md flex-1 border text-black focus:outline-none" type="text" name="artist" id="artist" placeholder="Enter artist" />
                    </section>

                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="link">Link</label>
                        <input onChange={(e) => setLink(e.target.value)} className="p-3 rounded-md flex-1 border text-black focus:outline-none" type="text" name="link" id="link" placeholder="Enter link" />
                    </section>

                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="picture">Picture</label>
                        <input onChange={(e) => {
                            e.target.value ? setPicture(e.target.value) : setPicture(null)
                        }} className="p-3 rounded-md flex-1 border text-black focus:outline-none" type="text" name="picture" id="picture" placeholder="Enter picture" />
                    </section>

                    <section className="w-full flex">
                    <button type="submit" className="font-bold bg-brightBlue p-5 w-full rounded-lg hover:bg-brightBlue/40">Add</button>
                    </section>
                </form>

            </section>
        </section>
    )
}