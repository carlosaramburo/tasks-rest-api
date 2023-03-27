import { 
    getAllTasks as getAllTasksService,
    getTaskById as getTaskbyIdService, 
    createTask as createTaskService, 
    updateTask as updateTaskService,
    deleteTask as deleteTaskService,
    addTagtoTask as addTagtoTaskService,
    deleteTagfromTask as deleteTagfromTaskService } 
from '../services/tasksService.js';

const getAllTasks = async (req, res) => {
    const result = await getAllTasksService();
    
    if(result.success === true)
        res.status(200).send(result.tasks);
    else {
        res.status(500).send(result);
    };
};

const getTaskById = async (req, res) => {
    const result = await getTaskbyIdService(req.params.id);
    
    if(result.success === true && result.task.length > 0)
        res.status(200).send(result.task);
    else if (result.success === true && result.task.length <= 0)
        res.status(404).send({message: "Task not found."}); 
    else {
        res.status(500).send(result);
    };
};

const createTask = async (req, res) => {    
    const result = await createTaskService(req.body);
    console.log(result);

    if(result.success === true) {
        const task = await getTaskbyIdService(result.insertId);
        res.status(201).send(task);
    }
    else {
        res.status(500).send(result);
    };
};

const updateTask = async (req, res) => {    
    const result = await updateTaskService(req.params.id, req.body);

    if(result.success === true)
        res.sendStatus(200);
    else {
        res.status(500).send(result);
    };
};

const deleteTask = async (req, res) => {
    const result = await deleteTaskService(req.params.id);
    
    if(result.success === true && result.affectedRows == 1)
        res.sendStatus(200);
    else if (result.success === true && result.affectedRows == 0)
        res.sendStatus(404);
    else {
        res.status(500).send(result);
    };
};

const addTagtoTask = async (req, res) => {
    const result = await addTagtoTaskService(req.body);
    
    if(result.success === true) {
        const task = await getTaskbyIdService(req.body.taskId);
        res.status(200).send(task);
    }
    else {
        res.status(500).send(result);
    };
}

const deleteTagfromTask = async (req, res) => {
    const result = await deleteTagfromTaskService(req.params);
    
    if(result.success === true && result.affectedRows == 1)
        res.sendStatus(200);
    else if (result.success === true && result.affectedRows == 0)
        res.sendStatus(404);
    else {
        res.status(500).send(result);
    };
};

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask, addTagtoTask, deleteTagfromTask };