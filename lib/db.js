import mysql from 'mysql2/promise';

let connection;

// This method allows the connection of the database
export const createConnection = async () => {
    if(!connection) {
        // references the following resources in the .env.local file
        // to connect to the database
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    };
    return connection;
};