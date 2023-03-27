import pool from "../config/db.js";

const getAllTags = async () => {
    try {
        const sql = 'SELECT * FROM tag';

        const [tags] = await pool.query(sql);
        return {success: true, tags: tags};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
}

export { getAllTags };