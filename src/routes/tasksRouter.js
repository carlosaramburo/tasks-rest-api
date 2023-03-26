import { Router } from 'express';
import { getAllTasks, getTaskById, createTask } from '../controllers/tasksController.js';

const router = Router();

router
    .get('/task', getAllTasks)
    .get('/task/:id', getTaskById)
    .post('/task', createTask)

export default router;