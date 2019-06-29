import mongo from 'koa-mongo';

import { getEnv } from './utils/mongo/config';

export const connectDB = (app) => {
    const env = getEnv();

    app.use(mongo(
        {
            host: env.mongo_host,
            port: 27017,
            db: 'ks',
            authSource: 'admin',
            max: 100,
            min: 1,
            acquireTimeoutMillis: 100
        }
    ));
};
