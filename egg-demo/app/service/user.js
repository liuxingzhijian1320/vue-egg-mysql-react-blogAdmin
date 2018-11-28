'use strict';

const Service = require('egg').Service;


class UserService extends Service {
    async getlist() {
        const userliist = await this.ctx.model.User.findAll()
        return userliist;
    }

    async find(id) {
        const userliist = await this.ctx.model.User.findOne({ id: id })
        return userliist;
    }

    async add(data) {
        const userliist = await this.ctx.model.User.create(data)
        return userliist;
    }
}



module.exports = UserService;