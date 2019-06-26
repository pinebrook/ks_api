import mongo from 'koa-mongo';

export const connectDB = (app) => {
    app.use(mongo(
        {
            host: 'localhost',
            port: 27017,
            db: 'spacek',
            authSource: 'admin',
            max: 100,
            min: 1,
            acquireTimeoutMillis: 100
        }
    ));
};
