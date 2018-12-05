'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');


function passData(data, code) {
    let obj = {
        code: code,
        msg: code == -1 ? '请求错误' : '成功',
        data: data
    }
    return obj
}

class LoginlogController extends Controller {
    async loginlog() {
        const { ctx } = this;
        // console.info('ctx', ctx.query)
        const list = await ctx.service.loginlog.getlist(ctx.query);
        ctx.body = passData(list, 0);
    }

    async loginlogAdd() {
        const { ctx } = this;
        const { name, country, city, query } = ctx.request.body;
        console.info('ctx.request.body', ctx.request.body)
        const login_time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        await ctx.service.loginlog.add({ name, country, city, query, login_time, });
        ctx.body = {
            code: 0,
            data: null,
            msg: '添加成功'
        }
    }


}

module.exports = LoginlogController;