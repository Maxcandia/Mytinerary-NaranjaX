const itineraryRepository = require('../../../repositories/itineraryRepository');
const { createSuccessResponse, createErrorResponse } = require('../../../utils/responses');

const addComment = async (req, res) => {
    try {
        const itinerary = await itineraryRepository.getById(req.params.id);
        if (!itinerary) {
            return res.status(400).json(createErrorResponse('No existe el itinerario'));
        }
        const comment = {
            userId: req.user._id,
            userPic: req.user.userPic,
            userName: `${req.user.firstName} ${req.user.lastName}`,
            text: req.body.text
        };
        itinerary.comments = [...itinerary.comments, comment];
        await itinerary.save();
        return res.status(200).json(createSuccessResponse({
            response: itinerary.comments,
            arrayOwnerCheck: itinerary.comments.filter(comment => comment.userId.toString() === req.user._id.toString()).map(comment => comment._id)
        }))
    } catch (error) {
        res.status(500).json(createErrorResponse(error));
    }
}

module.exports = addComment;
