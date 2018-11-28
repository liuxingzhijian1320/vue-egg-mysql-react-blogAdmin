'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */

        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                comment: '用户id'
            },
            username: {
                type: Sequelize.STRING(50),
                unique: true,
                allowNull: false,
                defaultValue: '',
                comment: '用户名'
            },
            password: {
                type: Sequelize.CHAR(32),
                allowNull: false,
                defaultValue: '',
                comment: '密码'
            },
            disabled: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                comment: '是否禁用'
            },
            mobile: {
                type: Sequelize.CHAR(12),
                unique: true,
                allowNull: false,
                defaultValue: '',
                comment: '手机号'
            },
            email: {
                type: Sequelize.STRING(50),
                unique: true,
                allowNull: false,
                defaultValue: '',
                comment: '邮箱'
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                comment: '用户注册时间（第一次）'
            }

        }, {
            tableName: 'user',
            charset: 'utf8mb4',
            collate: 'utf8mb4_bin',
            indexes: [{}]
        });



    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */

        return queryInterface.dropTable('user');

    }
};