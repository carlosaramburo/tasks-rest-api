import { Router } from 'express';
import { getAllTags, getTagById, createTag, updateTag, deleteTag } from '../controllers/tagsController.js';

const router = Router();

router
    .get('/tags', getAllTags)
    .get('/tags/:id', getTagById)
    .post('/tags', createTag)
    .put('/tags/:id', updateTag)
    .delete('/tags/:id', deleteTag)


export default router;