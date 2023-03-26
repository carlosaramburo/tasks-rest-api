import { getAllTasks as getAllTasksService, getTaskById as getTaskbyIdService } from '../services/tasksService.js'

const getAllTasks = async (req, res) => {
    try {
        const tasks = await getAllTasksService();
        res.send(tasks);
    } catch(e) {
        res.status(500);
        res.send('Error retrieving all tasks');
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

export { getAllTasks, getTaskById }