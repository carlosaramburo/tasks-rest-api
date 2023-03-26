import express from 'express';
import morgan from 'morgan';
import config from './config/environment.js';
import tasksRoutes from './routes/tasksRouter.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(tasksRoutes);

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});