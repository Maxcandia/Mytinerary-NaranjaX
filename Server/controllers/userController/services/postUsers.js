const userRepository = require('../../../repositories/userRepository')

const postUsers = async (req, res) => {
    try{
        const userByEmail = await userRepository.getUsersByEmail(req.body.mail)
        if(!userByEmail.length){
            const user = await userRepository.createUser(req.body);
            return res.status(201).json({
                ok: true,
            })
        }
        res.status(400).json({
            ok: false,
            message: 'Ya existe un user registrado bajo ese email'
        })   
        
    } catch (error) {   
        res.status(500).json({
            ok:false,
            message:  'Error Interno del Servidor',
            error
        })
    }
        
}

module.exports = postUsers;