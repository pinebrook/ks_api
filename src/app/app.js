import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import health from 'koa-ping';
import jwt from 'koa-jwt';

import { connectDB } from './mongo';
import passport from "./utils/auth/passport";
import { authRoutes, 
         mainRoutes } from './routers';

const createApp = () => {

    const app = new Koa();
    connectDB(app);
    app.use(cors());

    app.use(bodyParser());
    app.use(health());
    app.use(passport.initialize());
    app.use(authRoutes);
    app.use(jwt({ secret: "secret", debug: true }).unless({ path: [/^\/api\/pub/] }));
    app.use(mainRoutes);

    return app;
};

export default createApp;