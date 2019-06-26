import moment from 'moment';

export const createPostCtrl = async (ctx, next) => {
    const post = ctx.request.body.post;

    try {
        const postCreateRes = await ctx.db.collection('posts').insertOne({
            'title': post.title,
            'category': post.category,
            'content': post.content,
            'author': post.author,
            'createTime': moment().utc().toDate(),
            'lastUpdateTime': moment().utc().toDate()
        });

        if(postCreateRes.insertedCount > 0) {
            ctx.response.status = 200;
            ctx.response.body = JSON.stringify({
                result: '',
                message: 'Success create post',
                success: true
            });
        }

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: 'Failed create post',
            success: false
        });
    }
};