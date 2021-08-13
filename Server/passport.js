const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require('./models/userModel');
const key = require('./keys');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key.secretOrKey
}
module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
        .then(user => {
            if (user) {
               return done(null, user);
            }
            return done(null, false);
         })
         .catch(err => console.log(err));
     })
    ); 