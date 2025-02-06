import mysql from 'mysql2/promise';

let pool;

// This method allows the connection of the database
export const createConnection = async () => {
    if(!pool) {
        // references the following resources in the .env.local file
        // to connect to the database
        pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    };
    return pool;
};