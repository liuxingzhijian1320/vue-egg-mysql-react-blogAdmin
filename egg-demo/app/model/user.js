'use strict';

const moment = require('moment');

module.exports = app => {
    const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: STRING(50),
        email: STRING(50),
        password: STRING(32),
        mobile: STRING(11),
        disabled: BOOLEAN,
        created_at: DATE
    }, {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: false,
    });

    return User;
}