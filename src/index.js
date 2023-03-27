import express from 'express';
import morgan from 'morgan';
import config from './config/environment.js';
import tasksRoutes from './routes/tasksRouter.js';
import tagsRoutes from './routes/tagRouter.js';
import commentsRoutes from './routes/commentsRouter.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/api/v1', tasksRoutes);
app.use('/api/v1', tagsRoutes);
app.use('/api/v1', commentsRoutes);

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});