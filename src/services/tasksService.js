import pool from "../config/db.js";

const getAllTasks = async (req, res) => {
    const sql = 'SELECT * FROM task';

    const [tasks] = await pool.query(sql);

    return tasks;
}

export { getAllTasks }