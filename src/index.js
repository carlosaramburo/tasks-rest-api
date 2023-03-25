import express from 'express';
import * as dotenv from 'dotenv'
import morgan from 'morgan';
import tasksRoutes from './routes/tasksRouter.js';

const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(tasksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});