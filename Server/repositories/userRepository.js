const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const createUser = async (user) => {
    const hashPassword = await bcrypt.hash(user.password, 10)
    const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        mail: user.mail,
        password: hashPassword,
        userPic: user.userPic,
        country: user.country
    })
    return newUser.save();
}  

const getUsersByEmail = async mail  => User.find({mail});

module.exports= {
    createUser,
    getUsersByEmail
}