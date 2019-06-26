export const getProfileByUNameCtrl = async (ctx, next) => {
    const userName = ctx.params.uname;

    try {
        const profileRes = await ctx.db.collection('profiles').find({
            'userName': userName
        }).toArray();

        if(profileRes.length > 0) {
            ctx.response.status = 200;
            ctx.response.body = JSON.stringify({
                result: profileRes[0],
                message: `Success get profile of ${userName}`,
                success: true
            });
        } else {
            ctx.response.status = 204;
            ctx.response.body = JSON.stringify({
                result: '',
                message: `Success get profile of ${userName}`,
                success: true
            });
        }

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: `Failed get profile of ${userName}`,
            success: false
        });
    }
};