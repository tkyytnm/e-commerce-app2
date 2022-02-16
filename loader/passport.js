const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oidc");
const FacebookStrategy = require("passport-facebook");
const AuthService = require("../services/authService");
const { GOOGLE, FACEBOOK } = require("../config");
const AuthServiceInstance = new AuthService();

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    done(null, { id });
  });

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await AuthServiceInstance.login({
          email: username,
          password,
        });

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE.CLIENT_ID,
        clientSecret: GOOGLE.CLIENT_SECRET,
        callbackURL: GOOGLE.CALLBACK_URL,
      },
      async (issuser, profile, cb) => {
        try {
          const user = await AuthServiceInstance.googleLogin(profile);
          return cb(null, user);
        } catch (err) {
          return cb(err);
        }
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK.APP_ID,
        clientSecret: FACEBOOK.APP_SECRET,
        callbackURL: FACEBOOK.CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, cb) => {
        try {
          const user = await AuthServiceInstance.facebookLogin(profile);
          return cb(null, user);
        } catch (err) {
          return cb(err);
        }
      }
    )
  );

  return passport;
};
