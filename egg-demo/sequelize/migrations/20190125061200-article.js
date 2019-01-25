'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('article', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            type: {
                allowNull: true,
                type: Sequelize.STRING
            },
            content: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            created_at: {
                allowNull: true,
                type: Sequelize.DATE,
            }
        }, {
            tableName: 'article',
            charset: 'utf8mb4',
            collate: 'utf8mb4_bin',
            indexes: [{

            }]
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('article');
    }
};