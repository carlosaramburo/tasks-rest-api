import pool from "../config/db.js";

const getAllComments = async () => {
    try {
        const sql = 'SELECT * FROM comment';

        const [comments] = await pool.query(sql);
        return {success: true, comments: comments};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
}

const getCommentById = async (id) => {
    try {
        const sql = 'SELECT * FROM comment WHERE id = ?';

        const [comment] = await pool.query(sql, [id]);
        return {success: true, comment: comment};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const createComment = async (body) => {
    try {     
        const sql = 'INSERT INTO comment (??) VALUES (?)';

        const [result] = await pool.query(sql, [Object.keys(body), Object.values(body)]);
        return {success: true, insertId: result.insertId};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const updateComment = async (id, body) => {
    try {     
        const sql = "UPDATE comment SET ? WHERE id = ?";

        const result = await pool.query(sql, [body, id]);
        return {success: true, result};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const deleteComment = async (id) => { 
    try {
        const sql = 'DELETE FROM comment WHERE id = ?';

        const [result] = await pool.query(sql, [id]);
        return {success: true, affectedRows: result.affectedRows };
    } 
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

export { getAllComments, getCommentById, createComment, updateComment, deleteComment };