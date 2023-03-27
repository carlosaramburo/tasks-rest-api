import { getAllTags as getAllTagsService  } from "../services/tagService.js";

const getAllTags = async (req, res) => {
    const result = await getAllTagsService();
    
    if(result.success === true)
        res.status(200).send(result.tags);
    else {
        res.status(500).send(result);
    };
};

export { getAllTags };