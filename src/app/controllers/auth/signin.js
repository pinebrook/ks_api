import passport from '../../utils/auth/passport';
import { generateTokens } from '../../utils/auth/jwt';

export const signinCtrl = async (ctx, next) => {
    ctx.request.body = ctx.request.body.user;

    return passport.authenticate('local', async (err, user, info) => {

        if (user === false) {
            ctx.status = 401;
            ctx.body = info.message;
        } else {
            try {
                const jwt = await generateTokens({user}, "secret");
                ctx.response.status = 200;
                ctx.response.body = JSON.stringify({
                    result: jwt,
                    message: 'Success signed in',
                    success: true
                });
            } catch (error) {
                ctx.response.status = 401;
                ctx.response.body = JSON.stringify({
                    result: '',
                    message: 'Failed signed in',
                    success: false
                });
            }
        }
    })(ctx, next);
};