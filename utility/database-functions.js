import { sanitizeUsername } from "./sanitization";

export async function LoginDatabase(username) {
    let newUsername = sanitizeUsername(username);

    const response = await fetch(`api/system-access?method=login&username=${newUsername}`);

    if (!response.ok) {
        return false;
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function RegisterDatabase(username) {
    let newUsername = sanitizeUsername(username);

    const response = await fetch(`api/system-access?method=register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUsername }),
    });

    if (!response.ok) {
        return false;
    }

    return true;
}

export async function getSongs() {
    const response = await fetch(`api/songs?method=getSongs`);

    if (!response.ok) {
        return false;
    }

    const data = await response.json();
    return data;
}

export async function addSong(data) {
    const response = await fetch(`api/songs?method=addSong`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        return false;
    }

    return true;
}

export async function editSong(data) {
    const response = await fetch(`api/songs?method=editSong`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        return false;
    }

    return true;
}

export async function deleteSong(songID) {
    const response = await fetch(`api/songs?method=deleteSong&id=${songID}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        return false;
    }

    return true;
}