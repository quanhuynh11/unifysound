export function sanitizeUsername(input) {
    // Step 1: Trim whitespace
    let sanitized = input.trim();

    // Step 2: Remove HTML tags
    sanitized = sanitized.replace(/<[^>]*>?/gm, '');

    // Step 3: Remove special characters (adjust regex as needed)
    sanitized = sanitized.replace(/[^a-zA-Z0-9_\- ]/g, '');

    // Step 4: Limit length (adjust based on your DB schema)
    sanitized = sanitized.substring(0, 50);

    // Step 5: Normalize whitespace
    sanitized = sanitized.replace(/\s+/g, ' ');

    // Additional validation
    if (sanitized.length < 2) {
        throw new Error('Username must be at least 2 characters');
    }

    return sanitized;
};