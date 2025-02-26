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