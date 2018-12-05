'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('loginlog', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            login_time: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            country: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            city: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            query: {
                allowNull: true,
                type: Sequelize.TEXT
            }

        }, {
            tableName: 'loginlog',
            charset: 'utf8mb4',
            collate: 'utf8mb4_bin',
            indexes: [{}]
        });

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.dropTable('loginlog');

    }
};