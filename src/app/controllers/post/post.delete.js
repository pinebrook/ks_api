import mongo from 'koa-mongo';

export const deletePostByIdCtrl = async (ctx, next) => {
    const postId = ctx.params.id;

    try {
        const postDeleteRes = await ctx.db.collection('posts').deleteOne({
            '_id': mongo.ObjectId(postId)
        });

        if(postDeleteRes.deletedCount > 0) {
            ctx.response.status = 200;
            ctx.response.body = JSON.stringify({
                result: '',
                message: 'Success delete post',
                success: true
            });
        }

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: 'Failed delete post',
            success: false
        });
    }
};