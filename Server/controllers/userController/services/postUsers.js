const userRepository = require('../../../repositories/userRepository')
const jwt = require('jsonwebtoken');
const key = require('../../../keys');
const { createSuccessResponse, createErrorResponse } = require('../../../utils/responses');

const postUsers = async (req, res) => {
    try{
        const userByEmail = await userRepository.getUserByEmail(req.body.email)
        if(!userByEmail){
            const user = await userRepository.createUser({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mail: req.body.email,
                password: req.body.password,
                userPic: req.body.userPic,
                country: req.body.country
            });
            const payload = {
                id: user._id,
                email: user.mail,
                userPic: user.userPic
            };
            const options = { expiresIn: 2592000 };
            return jwt.sign(
                payload,
                key.secretOrKey,
                options,
                (err, token) => {
                    if (err) {
                        res.status(500).json(createErrorResponse('There was an error'));
                    } else {
                        res.status(200).json(createSuccessResponse({ token,firstName: user.firstName, userPic: user.userPic }));
                    }
                }
            );
        }
        res.status(400).json({
            success: false,
            message: 'Ya existe un user registrado bajo ese email'
        })   
        
    } catch (error) { 
        res.status(500).json({
            success:false,
            message:  'Error Interno del Servidor',
            error
        })
    }
        
}

module.exports = postUsers;