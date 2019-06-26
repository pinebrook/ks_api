import moment from 'moment';

export const createScheduleCtrl = async (ctx, next) => {
    const event = ctx.request.body.event;

    try {
        const scheduleCreateRes = await ctx.db.collection('schedules').insertOne({
            'start': moment(event.start).utc().toDate(),
            'end': moment(event.end).utc().toDate(),
            'content': event.content
        });

        if(scheduleCreateRes.insertedCount > 0) {
            ctx.response.status = 200;
            ctx.response.body = JSON.stringify({
                result: '',
                message: 'Success create schedule event',
                success: true
            });
        }

    } catch(error) {
        ctx.response.status = 400;
        ctx.response.body = JSON.stringify({
            result: '',
            message: 'Failed create schedule event',
            success: false
        });
    }
};