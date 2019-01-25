'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('article', [{
                id: 1,
                title: '测试1',
                created_at: '2018-12-05 21:20:00',
                type: "[{key:44,label:'vue'}]",
                content: "<p>你好 张沪生</p>",
            },
            {
                id: 2,
                title: '测试2',
                type: "[{key:45,label:'angular'}]",
                created_at: '2018-12-05 21:25:00',
                content: "<p>你好 测试</p>",
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('article', null, {});
    }
};