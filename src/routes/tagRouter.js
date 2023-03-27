import { Router } from 'express';
import { getAllTags, getTagById, createTag } from '../controllers/tagController.js';

const router = Router();

router
    .get('/tags', getAllTags)
    .get('/tags/:id', getTagById)
    .post('/tag', createTag)


export default router;