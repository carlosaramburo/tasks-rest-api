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

const getTagById = async (id) => {
    try {
        const sql = 'SELECT * FROM tag WHERE id = ?';

        const [tag] = await pool.query(sql, [id]);
        return {success: true, tag: tag};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const createTag = async (body) => {
    try {     
        const sql = 'INSERT INTO tag (??) VALUES (?)';

        const [result] = await pool.query(sql, [Object.keys(body), Object.values(body)]);
        return {success: true, insertId: result.insertId};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

export { getAllTags, getTagById, createTag };