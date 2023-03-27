import { 
    getAllComments as getAllCommentsService, 
    getCommentById as getCommentbyIdService,
    createComment as  createCommentService,
    updateComment as updateCommentService,
    deleteComment as deleteCommentService } 
from "../services/commentsService.js";

const getAllComments = async (req, res) => {
    const result = await getAllCommentsService();
    
    if(result.success === true)
        res.status(200).send(result.comments);
    else {
        res.status(500).send(result);
    };
};

const getCommentById = async (req, res) => {
    const result = await getCommentbyIdService(req.params.id);
    
    if(result.success === true && result.comment.length > 0)
        res.status(200).send(result.comment);
    else if (result.success === true && result.comment.length == 0)
        res.sendStatus(404); 
    else {
        res.status(500).send(result);
    };
};

const createComment = async(req,res) => {
    const result = await createCommentService(req.body);

    if(result.success === true) {
        const task = await getCommentbyIdService(result.insertId);
        res.status(201).send(task);
    }
    else {
        res.status(500).send(result);
    };
};

const updateComment = async (req, res) => {
    const result = await updateCommentService(req.params.id, req.body);

    if(result.success === true)
        res.sendStatus(200);
    else {
        res.status(500).send(result);
    };
};

const deleteComment = async (req, res) => {
    const result = await deleteCommentService(req.params.id);
    
    if(result.success === true && result.affectedRows == 1)
        res.sendStatus(200);
    else if (result.success === true && result.affectedRows == 0)
        res.sendStatus(404);
    else {
        res.status(500).send(result);
    };
};

export { getAllComments, getCommentById, createComment, updateComment, deleteComment };