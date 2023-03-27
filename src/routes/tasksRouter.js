import { Router } from 'express';
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/tasksController.js';

const router = Router();

router
    .get('/task', getAllTasks)
    .get('/task/:id', getTaskById)
    .post('/task', createTask)
    .put('/task/:id', updateTask)
    .delete('/task/:id', deleteTask)

export default router;