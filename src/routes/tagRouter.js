import { Router } from 'express';
import { getAllTags, getTagById } from '../controllers/tagController.js';

const router = Router();

router
    .get('/tags', getAllTags)
    .get('/tags/:id', getTagById)


export default router;