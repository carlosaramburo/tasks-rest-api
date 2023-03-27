import { Router } from 'express';
import { 
    getAllTasks, 
    getTaskById, 
    createTask, 
    updateTask, 
    deleteTask, 
    addTagtoTask, 
    deleteTagfromTask } 
from '../controllers/tasksController.js';

const router = Router();

router
    .get('/tasks', getAllTasks)
    .get('/tasks/:id', getTaskById)
    .post('/tasks', createTask)
    .put('/tasks/:id', updateTask)
    .delete('/tasks/:id', deleteTask)
    .post('/tasks/tags', addTagtoTask)
    .delete('/tasks/tags/:taskId/:tagId', deleteTagfromTask)

export default router;