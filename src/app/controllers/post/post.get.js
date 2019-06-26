import mongo from 'koa-mongo';

export const getAllPostsCtrl = async (ctx, next) => {

    try {
        const postsGetRes = await ctx.db.collection('posts').find()
        .project({
                '_id': 1,
                'title': 1,
                'category': 1,
                'author': 1,
                'createTime': 1,
                'lastUpdateTime': 1
            }
        )
        .toArray();

        ctx.response.status = 200;
        ctx.response.body = JSON.stringify({
            result: postsGetRes,
            message: 'Success get all posts',
            success: true
        });

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: 'Failed get all posts',
            success: false
        });
    }
};

export const getPostByIdCtrl = async (ctx, next) => {
    const postId = ctx.params.id;

    try {
        const postGetRes = await ctx.db.collection('posts').find({
            '_id': mongo.ObjectId(postId)
        })
        .project({
            'title': 1,
            'category': 1,
            'content': 1,
            'createTime': 1,
            'lastUpdateTime': 1
        })
        .toArray();

        ctx.response.status = 200;
        ctx.response.body = JSON.stringify({
            result: postGetRes[0],
            message: 'Success get post',
            success: true
        });

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: 'Failed get post',
            success: false
        });
    }
};