'use strict';

const moment = require('moment');

module.exports = app => {
    const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

    const Cate = app.model.define('cate', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: STRING(50),
        created_at: DATE
    }, {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: false,
    });

    return Cate;
}