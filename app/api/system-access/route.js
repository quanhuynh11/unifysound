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
            case "login": {
                const username = searchParams.get("username");

                if (!username) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }

                const sqlCommand = `SELECT * FROM users WHERE name = ?;`;

                const [result] = await db.execute(sqlCommand, [username]);

                if(!result.length) {
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
        console.log(error);
        return new Response(false, { status: 500 });
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

        let data = await request.json();

        if (!data) {
            return new Response(false, { status: 400 });
        }

        db = await createConnection();
        const connection = await db.getConnection();

        switch (method) {
            case "register": {
                const sqlCommand = `INSERT INTO users (name) VALUES (?);`;

                const [result] = await db.execute(sqlCommand, [data.username]);

                if(!result.affectedRows) {
                    connection.release();
                    return new Response(false, { status: 400 });
                }
                connection.release();

                return new Response("Account successfully created!", { status: 200 });
            }
            default: {
                connection.release();
                return new Response(false, { status: 400 });
            }
        }
    }
    catch (error) {
        return new Response(error, { status: 500 });
    }
}