'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

function passData(data, code) {
    let obj = {
        code: code,
        msg: code == -1 ? '请求错误' : '成功',
        data: data
    }
    return obj
}

class UserController extends Controller {
    async user() {
        const { ctx } = this;
        const list = await ctx.service.user.getlist();
        ctx.body = passData(list, 0);
    }

    async userFind() {
        const { ctx } = this;
        const userId = ctx.params.id;
        const list = await ctx.service.user.find(toInt(userId));
        ctx.body = passData(list, 0);
    }

    async userAdd() {
        const { ctx } = this;
        console.info('------------', ctx.request.body)
        const { title } = ctx.request.body;
        const list = await ctx.service.user.add({ title });
        ctx.body = {
            code: 0,
            data: null,
            msg: '添加成功'
        }
    }
}

module.exports = UserController;