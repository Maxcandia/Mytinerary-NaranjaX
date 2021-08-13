const itineraryRepository = require('../../../repositories/itineraryRepository');
const { createSuccessResponse, createErrorResponse } = require('../../../utils/responses');


const editComment = async (req, res) => {
    try {
        const { id: commentId } = req.params;
        const { text } = req.body;
        const itinerary = await itineraryRepository.getbyCommentId(commentId,req.user._id)
        if(!itinerary){
            return res.status(404).json(createErrorResponse('No se encontro el Itinerario'));   
        }
        itinerary.comments.id(commentId).set({ text });

        await itinerary.save();

        res.status(200).json(createSuccessResponse(itinerary.comments));
    } catch (error) {
        console.log(error)
        res.status(500).json(createErrorResponse(error));
    }
};

module.exports = editComment;
