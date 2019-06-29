import envDev from '../../environments/environment.dev';
import envProd from '../../environments/envrionment.prod';

export const getEnv = () => {
    const mode = process.env.MODE;

    if(mode === 'dev') {
        return envDev;
    } else if(mode === 'prod') {
        return envProd;
    }
};