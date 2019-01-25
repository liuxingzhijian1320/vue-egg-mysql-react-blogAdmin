'use strict';

const Service = require('egg').Service;


class ArticleService extends Service {
    async getlist({ pageSize, per_page }) {
        const list = await this.ctx.model.Article.findAndCountAll({
            offset: per_page - 0 - 1, // 第几页数
            limit: pageSize - 0, // 每页多少条数
        })
        return list;
    }

    async find(id) {
        const list = await this.ctx.model.Article.findOne({ 'where': { 'id': id } })
        return list;
    }

    async add(data) {
        console.info('article-add', data, 33, this.ctx.model)
        const list = await this.ctx.model.Article.create(data)
        console.info('list', list)
        return list;
    }

    async del(id) {
        const list = await this.ctx.model.Article.destroy({ 'where': { 'id': id } })
        return list;
    }

    async update(data) {
        const { id } = data;
        const obj = await this.ctx.model.Article.findById(id)
        console.info('obj--------------', obj)
        await obj.update(data);
        return obj;
    }
}



module.exports = ArticleService;