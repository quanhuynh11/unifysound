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
