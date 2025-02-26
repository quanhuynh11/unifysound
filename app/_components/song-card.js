import { useState } from "react";
import EditSongForm from "./edit-song-form";

export default function SongCard({ song, setReRender }) {

    const [showEditSongForm, setShowEditSongForm] = useState(false);

    return (
        <div onClick={() => setShowEditSongForm(true)} className="p-5 m-5 bg-tertiaryBlue rounded-lg">
            {showEditSongForm && <EditSongForm setRenderEditSongForm={setShowEditSongForm} songData={song} setReRender={setReRender} />}

            <p className="font-bold">{song.title}</p>
            <p>-{song.artist}-</p>
            <img className="w-48 h-48" src={song.picture_url} alt={song.title} />
        </div>
    )
}