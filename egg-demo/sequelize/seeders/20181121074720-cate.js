'use strict';

const moment = require('moment');

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        return queryInterface.bulkInsert('cate', [{
                id: 1,
                title: '安徽菜',
                created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            {
                id: 2,
                title: '湖南菜',
                created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            {
                id: 3,
                title: '广州菜',
                created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            {
                id: 4,
                title: '香港菜',
                created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        return queryInterface.bulkDelete('cate', null, {});
    }
};