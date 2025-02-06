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

        switch (method) {
            case "login": {
                const username = searchParams.get("username");

                if (!username) {
                    return new Response(false, { status: 400 });
                }

                const sqlCommand = `SELECT * FROM users WHERE name = ?;`;

                const [result] = await db.execute(sqlCommand, [username]);

                console.log(result);

                return new Response(true, { status: 200 });
            }
            default: {
                return new Response(false, { status: 400 });
            }
        }
    }
    catch (error) {
        console.log(error);
        return new Response(false, { status: 500 });
    }
    finally {
        if (db) {
            await db.end();
        }
    }
}