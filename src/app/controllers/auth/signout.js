export const signoutCtrl = async (ctx, next) => {
    ctx.logout();

    ctx.response.status = 200;
    ctx.response.body = JSON.stringify({
        result: '',
        message: 'Success sign out',
        success: true
    });
};