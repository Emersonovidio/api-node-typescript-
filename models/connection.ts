import mysql from 'mysql2/promise';
import dotenv from 'dotenv';// importa dotenv e localiza var de ambientes

dotenv.config();

export default mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'books_api',
});
