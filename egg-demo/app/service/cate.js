'use strict';

const Service = require('egg').Service;


class CateService extends Service {
    async getlist({ pageSize, per_page }) {
        const list = await this.ctx.model.Cate.findAndCountAll({
            offset: per_page - 0 - 1, // 第几页数
            limit: pageSize - 0, // 每页多少条数
        })
        return list;
    }

    async find(id) {
        const list = await this.ctx.model.Cate.findOne({ id: id })
        return list;
    }

    async add(data) {
        const list = await this.ctx.model.Cate.create(data)
        return list;
    }

    async del(id) {
        const list = await this.ctx.model.Cate.destroy({ 'where': { 'id': id } })
        return list;
    }

    async update(data) {
        const { id } = data;
        const obj = await this.ctx.model.Cate.findById(id)
        console.info('obj--------------', obj)
        await obj.update(data);
        return obj;
    }
}



module.exports = CateService;