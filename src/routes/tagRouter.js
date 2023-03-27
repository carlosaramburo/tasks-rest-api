import { Router } from 'express';
import { getAllTags } from '../controllers/tagController.js';

const router = Router();

router
    .get('/tags', getAllTags)


export default router;