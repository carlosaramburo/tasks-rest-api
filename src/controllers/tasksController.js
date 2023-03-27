import { 
    getAllTasks as getAllTasksService,
    getTaskById as getTaskbyIdService, 
    createTask as createTaskService, 
    updateTask as updateTaskService } 
from '../services/tasksService.js';

const getAllTasks = async (req, res) => {
    const result = await getAllTasksService();
    
    if(result.success === true)
        res.status(200).send(result.tasks);
    else {
        res.status(500).send(result);
    }
};

const getTaskById = async (req, res) => {
    const result = await getTaskbyIdService(req.params.id);
    
    if(result.success === true && result.task.length > 0)
        res.status(200).send(result.task);
    else if (result.success === true && result.task.length <= 0)
        res.status(404).send({message: "Task not found."}); 
    else {
        res.status(500).send(result);
    }
}

const createTask = async (req, res) => {    
    const result = await createTaskService(req.body);

    if(result.success === true) {
        const task = await getTaskbyIdService(result.result[0].insertId);
        res.status(201).send(task);
    }
    else {
        res.status(500).send(result);
    }
}

const updateTask = async (req, res) => {    
    const result = await updateTaskService(req.params.id, req.body);

    if(result.success === true)
        res.sendStatus(200);
    else {
        res.status(500).send(result);
    }
}

export { getAllTasks, getTaskById, createTask, updateTask }