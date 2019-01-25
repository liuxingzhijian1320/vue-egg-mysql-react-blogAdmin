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

class ArticleController extends Controller {
    async list() {
        const { ctx } = this;
        console.info('ctx', ctx.query)
        const list = await ctx.service.article.getlist(ctx.query);
        ctx.body = passData(list, 0);
    }

    // async articleDetail() {
    //     const { ctx } = this;
    //     const articleId = ctx.params.id;
    //     // console.info('articleId', articleId)
    //     const list = await ctx.service.article.find(toInt(articleId));
    //     ctx.body = passData(list, 0);
    // }

    async articleAdd() {
        const { ctx } = this;
        console.info('ctx.request.body', ctx.request.body)
        const { title, type, content } = ctx.request.body;
        const created_at = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        console.info('ctx.service.article.add', ctx.service.article.add)
        await ctx.service.article.add({ title, type, content, created_at });
        ctx.body = {
            code: 0,
            data: null,
            msg: '添加成功'
        }
    }

    // async articleDel() {
    //     const { ctx } = this;
    //     const articleId = ctx.params.id;
    //     await ctx.service.article.del(toInt(articleId));
    //     ctx.body = {
    //         code: 0,
    //         data: null,
    //         msg: '删除成功'
    //     }
    // }

    // async articleUpdate() {
    //     const { ctx } = this;
    //     const articleId = ctx.params.id;
    //     const data = ctx.request.body
    //     console.info(333, ctx.request.body);
    //     await ctx.service.article.update(data);
    //     ctx.body = {
    //         code: 0,
    //         data: null,
    //         msg: '编辑成功'
    //     }
    // }
}

module.exports = ArticleController;