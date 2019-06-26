export const getScheduleCtrl = async (ctx, next) => {

    try {
        const scheduleGetRes = await ctx.db.collection('schedules').find().toArray();

        ctx.response.status = 200;
        ctx.response.body = JSON.stringify({
            result: scheduleGetRes,
            message: 'Success get schedule events',
            success: true
        });

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: 'Failed create schedule events',
            success: false
        });
    }


};