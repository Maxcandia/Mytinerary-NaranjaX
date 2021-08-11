const key = require ('../../../keys');
const jwt = require('jsonwebtoken');
const userRepository = require('../../../repositories/userRepository');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const userByEmail = await userRepository.getUsersByEmail(req.body.mail)
    if(!userByEmail.length){
        return res.status(400).json({
            ok: false,
            message: 'El user con ese email no existe'
        })   
    }
    if(await bcrypt.compare(req.body.password, userByEmail[0].password)){
        const user = userByEmail[0];
        const payload = {
            id: user._id,
            email: user.mail,
            userPic: user.userPic
      };
      const options = {expiresIn: 2592000};
        jwt.sign(
          payload,
          key.secretOrKey,
          options,
          (err, token) => {
             if(err){
               res.json({
               ok: false,
               token: "There was an error"
             });
             }else {
               res.json({
                  ok: true,
                  token
               });
              }
             }
            );   
    }
}

module.exports = login;