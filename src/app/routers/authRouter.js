import router from 'koa-router';

import { signinCtrl, signoutCtrl } from '../controllers';

const authRouter = router();

authRouter.post('/auth/signin', signinCtrl);
authRouter.get('/auth/signout', signoutCtrl);

export const authRoutes = authRouter.routes();