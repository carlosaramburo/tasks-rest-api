import { 
    getAllTags as getAllTagsService, 
    getTagById as getTagbyIdService,
    createTag as  createTagService,
    updateTag as updateTagService,
    deleteTag as deleteTagService } 
from "../services/tagsService.js";

const getAllTags = async (req, res) => {
    const result = await getAllTagsService();
    
    if(result.success === true)
        res.status(200).send(result.tags);
    else {
        res.status(500).send(result);
    };
};

const getTagById = async (req, res) => {
    const result = await getTagbyIdService(req.params.id);
    
    if(result.success === true && result.tag.length > 0)
        res.status(200).send(result.tag);
    else if (result.success === true && result.tag.length <= 0)
        res.sendStatus(404); 
    else {
        res.status(500).send(result);
    };
};

const createTag = async(req,res) => {
    const result = await createTagService(req.body);

    if(result.success === true) {
        const task = await getTagbyIdService(result.insertId);
        res.status(201).send(task);
    }
    else {
        res.status(500).send(result);
    };
};

const updateTag = async (req, res) => {
    const result = await updateTagService(req.params.id, req.body);

    if(result.success === true)
        res.sendStatus(200);
    else {
        res.status(500).send(result);
    };
};

const deleteTag = async (req, res) => {
    const result = await deleteTagService(req.params.id);
    
    if(result.success === true && result.affectedRows == 1)
        res.sendStatus(200);
    else if (result.success === true && result.affectedRows == 0)
        res.sendStatus(404);
    else {
        res.status(500).send(result);
    };
};

export { getAllTags, getTagById, createTag, updateTag, deleteTag };