'use strict';

const md5 = require('md5');
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
        return queryInterface.bulkInsert('user', [{
                id: 1,
                username: 'mt',
                password: md5('123456'),
                mobile: '13000000000',
                disabled: false,
                email: 'zhs1320@163.com',
                created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            {
                id: 2,
                username: 'zmouse',
                password: md5('123456'),
                disabled: false,
                mobile: '13000000001',
                email: 'zmouse@163.com',
                created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            {
                id: 3,
                username: 'reci',
                password: md5('123456'),
                disabled: false,
                mobile: '13000000002',
                email: 'reci@163.com',
                created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            {
                id: 4,
                username: 'kimoo',
                password: md5('123456'),
                disabled: false,
                mobile: '13000000003',
                email: 'kimoo@163.com',
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

        return queryInterface.bulkDelete('user', null, {});

    }
};