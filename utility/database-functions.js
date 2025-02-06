import { sanitizeUsername } from "./sanitization";

export async function LoginDatabase(username) {
    let newUsername = sanitizeUsername(username);

    
}
