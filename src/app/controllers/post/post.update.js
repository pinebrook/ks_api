import moment from 'moment';
import mongo from 'koa-mongo';

export const updatePostCtrl = async (ctx, next) => {
    const postId = ctx.params.id;
    const updatedPost = ctx.request.body.post;

    try {
        const postUpdateRes = await ctx.db.collection('posts').updateOne({
            '_id': mongo.ObjectId(postId)
        }, {
            $set: {
                'title': updatedPost.title,
                'category': updatedPost.category,
                'content': updatedPost.content,
                'lastUpdateTime': moment().utc().toDate()
            }
        });

        if(postUpdateRes.modifiedCount > 0) {
            ctx.response.status = 200;
            ctx.response.body = JSON.stringify({
                result: '',
                message: 'Success update post',
                success: true
            });
        }

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: 'Failed update post',
            success: false
        });
    }
};