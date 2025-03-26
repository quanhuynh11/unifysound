import { createConnection } from "@/lib/db";

export async function GET(request) {
    let db;

    try {
        const { searchParams } = new URL(request.url);

        const method = searchParams.get("method");

        if (!method) {
            return new Response(false, { status: 400 });
        }

        db = await createConnection();
        const connection = await db.getConnection();

        switch (method) {
            case "getSongs": {
                const sqlCommand = `SELECT * FROM songs;`;

                const [result] = await db.execute(sqlCommand);

                if (!result.length) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                connection.release();
                return new Response(JSON.stringify(result), { status: 200 });
            }

            case "getSongByID": {
                const id = searchParams.get("id");

                if (!id) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                const sqlCommand = `SELECT * FROM songs WHERE id = ?;`;

                const [result] = await db.execute(sqlCommand, [id]);

                if (!result.length) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                connection.release();
                return new Response(JSON.stringify(result), { status: 200 });
            }
            default: {
                connection.release();
                return new Response(false, { status: 400 });
            }
        }
    }
    catch (error) {
        return new Response(false, { status: 400 });
    }
}

export async function POST(request) {
    let db;

    try {
        const { searchParams } = new URL(request.url);

        const method = searchParams.get("method");

        if (!method) {
            return new Response(false, { status: 400 });
        }

        db = await createConnection();
        const connection = await db.getConnection();

        switch (method) {
            case "addSong": {
                const data = await request.json();

                if (!data) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                const sqlCommand = `INSERT INTO songs (title, artist, link_url, picture_url) VALUES (?, ?, ?, ?);`;

                const [result] = await db.execute(sqlCommand, [data.title, data.artist, data.link, data.picture]);

                if (!result.affectedRows) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                connection.release();
                return new Response(true, { status: 200 });
            }
            default: {
                connection.release();
                return new Response(false, { status: 400 });
            }
        }
    }
    catch (error) {
        return new Response(error, { status: 400 });
    }
}

export async function PUT(request) {
    let db;

    try {
        const { searchParams } = new URL(request.url);

        const method = searchParams.get("method");

        if (!method) {
            return new Response(false, { status: 400 });
        }

        db = await createConnection();
        const connection = await db.getConnection();

        switch (method) {
            case "editSong": {
                const data = await request.json();

                if (!data) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                const sqlCommand = `UPDATE songs SET title = ?, artist = ?, link_url = ?, picture_url = ? WHERE id = ?;`;

                const [result] = await db.execute(sqlCommand, [data.title, data.artist, data.link, data.picture, data.id]);

                if (!result.affectedRows) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                connection.release();
                return new Response(true, { status: 200 });
            }
            default: {
                connection.release();
                return new Response(false, { status: 400 });
            }
        }
    }
    catch (error) {
        return new Response(error, { status: 400 });
    }
}

export async function DELETE(request) {
    let db;

    try {
        const { searchParams } = new URL(request.url);

        const method = searchParams.get("method");

        if (!method) {
            return new Response(false, { status: 400 });
        }

        db = await createConnection();
        const connection = await db.getConnection();

        switch (method) {
            case "deleteSong": {
                const id = searchParams.get("id");

                if (!id) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                const sqlCommand = `DELETE FROM songs WHERE id = ?;`;

                const [result] = await db.execute(sqlCommand, [id]);

                if (!result.affectedRows) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                connection.release();
                return new Response(true, { status: 200 });
            }
            default: {
                connection.release();
                return new Response(false, { status: 400 });
            }
        }
    }
    catch (error) {
        return new Response(error, { status: 400 });
    }
}