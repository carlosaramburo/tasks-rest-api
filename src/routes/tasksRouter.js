import { Router } from 'express';
import { getAllTasks } from '../controllers/tasksController.js';

const router = Router();

router
    .get('/task', getAllTasks);

export default router;