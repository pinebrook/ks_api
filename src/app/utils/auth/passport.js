import passport from "koa-passport";
import { Strategy as LocalStrategy } from "passport-local";

passport.use(new LocalStrategy((username, password, done) => {

    if (username === "test" && password === "test") {
        done(null, {
            username: "test",
            verified: "true"
        }, { message: 'Success' });
    } else if (username !== "test" || password !== "test") {
        done(null, false, { message: 'Incorrect username or password.' });
    }
}));

export default passport;