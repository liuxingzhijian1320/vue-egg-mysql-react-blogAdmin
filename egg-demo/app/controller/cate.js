'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');


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

class CateController extends Controller {
    async cate() {
        const { ctx } = this;
        // console.info('ctx', ctx.query)
        const list = await ctx.service.cate.getlist(ctx.query);
        ctx.body = passData(list, 0);
    }

    async cateFind() {
        const { ctx } = this;
        const cateId = ctx.params.id;
        const list = await ctx.service.cate.find(toInt(cateId));
        ctx.body = passData(list, 0);
    }

    async cateAdd() {
        const { ctx } = this;
        const { title } = ctx.request.body;
        const created_at = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        await ctx.service.cate.add({ title, created_at });
        ctx.body = {
            code: 0,
            data: null,
            msg: '添加成功'
        }
    }

    async cateDel() {
        const { ctx } = this;
        const cateId = ctx.params.id;
        await ctx.service.cate.del(toInt(cateId));
        ctx.body = {
            code: 0,
            data: null,
            msg: '删除成功'
        }
    }

    async cateUpdate() {
        const { ctx } = this;
        const cateId = ctx.params.id;
        const data = ctx.request.body
        console.info(333, ctx.request.body);
        await ctx.service.cate.update(data);
        ctx.body = {
            code: 0,
            data: null,
            msg: '编辑成功'
        }
    }



}

module.exports = CateController;