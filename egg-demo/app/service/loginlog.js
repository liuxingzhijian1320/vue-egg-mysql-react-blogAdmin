'use strict';

const Service = require('egg').Service;


class loginlogService extends Service {
    async getlist({ pageSize, per_page }) {
        const list = await this.ctx.model.Loginlog.findAndCountAll({
            offset: per_page - 0 - 1, // 第几页数
            limit: pageSize - 0, // 每页多少条数
        })
        return list;
    }

    async add(data) {
        const list = await this.ctx.model.Loginlog.create(data)
        return list;
    }
}



module.exports = loginlogService;