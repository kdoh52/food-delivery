const User = require("mongoose").model("User");
const PassportLocalStrategy = require("passport-local").Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const userData = {
      firstName: req.body.firstName.trim(),
      lastName: req.body.lastName.trim(),
      email: req.body.email.trim(),
      password: req.body.password.trim(),
      phone: req.body.phone.trim(),
      role: req.body.role.trim(),
    };

    const newUser = new User(userData);
    newUser.save((err) => {
      if (err) {
        return done(err);
      }

      return done(null);
    });
  }
);
