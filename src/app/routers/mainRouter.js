import router from 'koa-router';

import { getProfileByUNameCtrl,
         getScheduleCtrl,
         createScheduleCtrl,
         createPostCtrl,
         getAllPostsCtrl,
         getPostByIdCtrl,
         updatePostCtrl,
         deletePostByIdCtrl } from '../controllers'

const mainRouter = router();

mainRouter.get('/api/pub/profiles/:uname', getProfileByUNameCtrl);
mainRouter.get('/api/pub/schedules', getScheduleCtrl);
mainRouter.get('/api/pub/posts', getAllPostsCtrl);
mainRouter.get('/api/pub/posts/:id', getPostByIdCtrl);

mainRouter.post('/api/pub/schedules/create', createScheduleCtrl);
mainRouter.post('/api/cred/posts/create', createPostCtrl);

mainRouter.put('/api/cred/posts/update/:id', updatePostCtrl);

mainRouter.del('/api/cred/posts/delete/:id', deletePostByIdCtrl);

export const mainRoutes = mainRouter.routes();