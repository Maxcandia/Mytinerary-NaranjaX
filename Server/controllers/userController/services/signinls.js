const { createSuccessResponse, createErrorResponse } = require('../../../utils/responses');

const signinls = async (req, res) => {
    try {
        res.status(200).json(createSuccessResponse({
            userPic: req.user.userPic,
            firstName: req.user.firstName,
        }))
    } catch (error) {
        res.status(500).json(createErrorResponse(error));
    }
}

module.exports = signinls;