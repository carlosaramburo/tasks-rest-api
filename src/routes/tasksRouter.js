import { Router } from 'express';
import { getAllTasks, getTaskById } from '../controllers/tasksController.js';

const router = Router();

router
    .get('/task', getAllTasks)
    .get('/task/:id', getTaskById)

export default router;