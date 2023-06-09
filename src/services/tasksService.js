import pool from "../config/db.js";

const getAllTasks = async () => {
    try {
        const sql = 'SELECT * FROM task';

        const [tasks] = await pool.query(sql);
        return {success: true, tasks: tasks};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const getTaskById = async (id) => { 
    try {
        const sql = `SELECT 
                    A.*,
                    JSON_REMOVE(JSON_OBJECTAGG(IFNULL(C.id, 'null__'), IFNULL(C.title, 'null__')), '$.null__') AS tags,
                    JSON_REMOVE(JSON_OBJECTAGG(IFNULL(D.id, 'null__'), IFNULL(D.content, 'null__')), '$.null__') AS comments
                FROM task A
                LEFT JOIN task_tag B ON A.id = B.task_id
                LEFT JOIN tag C ON b.tag_id = c.id
                LEFT JOIN comment D ON A.id = D.task_id
                WHERE A.id = ?
                GROUP BY A.id`;

        const [task] = await pool.query(sql, [id]);
        return {success: true, task: task};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const createTask = async (body) => {
    try {     
        const sql = 'INSERT INTO task (??) VALUES (?)';

        const [result] = await pool.query(sql, [Object.keys(body), Object.values(body)]);
        return {success: true, insertId: result.insertId};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const updateTask = async (id, body) => {
    try {     
        const sql = "UPDATE task SET ? WHERE id = ?";

        const result = await pool.query(sql, [body, id]);
        return {success: true, result};
    }
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const deleteTask = async (id) => { 
    try {
        const sql = 'DELETE FROM task WHERE id = ?';

        const [result] = await pool.query(sql, [id]);
        return {success: true, affectedRows: result.affectedRows };
    } 
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const addTagtoTask = async (body) => {
    try {
        const sql = 'INSERT INTO task_tag VALUES(?, ?)';
        console.log(sql);

        const [result] = await pool.query(sql, [body.taskId, body.tagId]);
        return {success: true, affectedRows: result.affectedRows };
    } 
    catch(err) {
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

const deleteTagfromTask = async (params) => {
    try {
        const sql = 'DELETE FROM task_tag WHERE task_id = ? AND tag_id = ?';

        const [result] = await pool.query(sql, [params.taskId, params.tagId]);
        return {success: true, affectedRows: result.affectedRows };
    } 
    catch(err) {
        console.log(err);
        const { message, code, errno, sqlState } = err;
        return { success: false, error: {message, code, errno, sqlState} };
    };
};

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask, addTagtoTask, deleteTagfromTask };