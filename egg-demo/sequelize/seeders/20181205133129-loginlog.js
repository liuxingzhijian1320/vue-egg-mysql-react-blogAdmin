'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('loginlog', [{
                id: 1,
                name: 'admin',
                login_time: '2018-12-05 21:20:00',
                country: "中国",
                city: "上海",
                query: "101.229.146.11"
            },
            {
                id: 2,
                name: 'admin',
                login_time: '2018-12-05 21:25:00',
                country: "中国",
                city: "上海",
                query: "101.229.146.10"
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('loginlog', null, {});
    }
};