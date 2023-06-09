import { config } from 'dotenv';

config();

export default {
    PORT: process.env.PORT || '',
    HOST: process.env.HOST || '',
    DB_PORT: process.env.DB_PORT || '',
    DB_USER: process.env.DB_USER || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || ''
};