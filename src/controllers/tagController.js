import { 
    getAllTags as getAllTagsService, 
    getTagById as getTagbyIdService } 
from "../services/tagService.js";

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
        res.status(404); 
    else {
        res.status(500).send(result);
    };
};

export { getAllTags, getTagById };