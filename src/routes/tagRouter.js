import { Router } from 'express';
import { getAllTags, getTagById, createTag, updateTag, deleteTag } from '../controllers/tagController.js';

const router = Router();

router
    .get('/tags', getAllTags)
    .get('/tags/:id', getTagById)
    .post('/tag', createTag)
    .put('/tag/:id', updateTag)
    .delete('/tag/:id', deleteTag)


export default router;