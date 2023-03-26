import { getAllTasks as getAllTasksService } from '../services/tasksService.js'

const getAllTasks = async (req, res) => {
    const tasks = await getAllTasksService();
    
    res.send(tasks);
};

export { getAllTasks }