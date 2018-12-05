'use strict';

const moment = require('moment');

module.exports = app => {
    const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

    const Loginlog = app.model.define('loginlog', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: STRING(50),
        login_time: STRING(50),
        country: STRING(50),
        query: STRING(50),
        city: STRING(50),
    }, {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: false,
    });

    return Loginlog;
}