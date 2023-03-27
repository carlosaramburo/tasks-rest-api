import { Router } from 'express';
import { getAllComments, getCommentById, createComment, updateComment, deleteComment } from '../controllers/commentsController.js';

const router = Router();

router
    .get('/comments', getAllComments)
    .get('/comments/:id', getCommentById)
    .post('/comments', createComment)
    .put('/comments/:id', updateComment)
    .delete('/comments/:id', deleteComment)


export default router;