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
