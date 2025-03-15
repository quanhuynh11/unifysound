import { deleteSong, editSong } from "@/utility/database-functions";
import { useEffect, useRef, useState } from "react";

export default function EditSongForm({ setRenderEditSongForm, songData, setReRender }) {

    const formRef = useRef(null);

    const [title, setTitle] = useState(songData.title)
    const [artist, setArtist] = useState(songData.artist)
    const [link, setLink] = useState(songData.link_url)
    const [picture, setPicture] = useState(songData.picture_url)

    const handleAddSong = async (e) => {
        e.preventDefault();

        await editSong({ title, artist, link, picture, id: songData.id });

        setRenderEditSongForm(false);
        setReRender(true);
    }

    const handleDeleteSong = async () => {
        await deleteSong(songData.id);

        setRenderEditSongForm(false);
        setReRender(true);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setRenderEditSongForm(false);
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
                <h1 className="text-4xl font-bold mb-10">Edit Song</h1>

                <section className="w-full flex justify-center items-center mb-10">
                    <img className="w-1/4" src={picture} alt="" />
                </section>
                {
                    console.log(songData)
                }
                <form onSubmit={handleAddSong} className="flex flex-col gap-5">
                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="title">Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="p-3 rounded-md flex-1 text-black focus:outline-none" type="text" name="title" id="title" placeholder="Enter title" />
                    </section>

                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="artist">Artist</label>
                        <input value={artist} onChange={(e) => setArtist(e.target.value)} className="p-3 rounded-md flex-1 border text-black focus:outline-none" type="text" name="artist" id="artist" placeholder="Enter artist" />
                    </section>

                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="link">Link</label>
                        <input value={link} onChange={(e) => setLink(e.target.value)} className="p-3 rounded-md flex-1 border text-black focus:outline-none" type="text" name="link" id="link" placeholder="Enter link" />
                    </section>

                    <section className="flex items-center">
                        <label className="font-bold w-full text-right mr-4" htmlFor="picture">Picture</label>
                        <input value={picture} onChange={(e) => {
                            e.target.value ? setPicture(e.target.value) : setPicture(null)
                        }} className="p-3 rounded-md flex-1 border text-black focus:outline-none" type="text" name="picture" id="picture" placeholder="Enter picture" />
                    </section>

                    <section className="w-full flex">
                        <button type="button" onClick={handleDeleteSong} className="font-bold bg-red-600 p-5 w-full rounded-lg hover:bg-red-700 mr-5">Delete</button>
                        <button type="submit" className="font-bold bg-brightBlue p-5 w-full rounded-lg hover:bg-brightBlue/40 ml-5">Save</button>
                    </section>
                </form>

            </section>
        </section>
    )
}