const itineraryRepository = require('../../../repositories/itineraryRepository');
const { createErrorResponse, createSuccessResponse } = require('../../../utils/responses');

const checkUser = async (req, res) => {
    try {
        const itinerary = await itineraryRepository.getById(req.params.id);
        if (!itinerary) {
            res.status(404).json(createErrorResponse('El itinerario no existe.'));
        }
        return res.status(200).json(createSuccessResponse({
            arrayOwnerCheck: itinerary.comments.filter(comment => comment.userId.toString() === req.user._id.toString()).map(comment => comment._id),
            likedCheck: itinerary.usersLike.includes(req.user._id.toString())
        }));
    } catch (error) {
        res.status(500).json(createErrorResponse(error));
    }
}

module.exports = checkUser;
