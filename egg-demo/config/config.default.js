'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1542773317659_1223';

    // add your config here
    config.middleware = [];

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        },
        domainWhiteList: ['http://127.0.0.1:8080'],
    };

    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };

    // ！！！！！添加的配置信息在这里 [Begin]！！！！！！
    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        // database: 'zhooson_production',
        database: 'zhooson_development',
        username: 'root',
        password: 'memory1320'
    }

    // ！！！！！添加的配置信息在这里 [End]！！！！！！


    // config.cluster = {
    //     listen: {
    //         port: 80,
    //         hostname: '127.0.0.1'
    //     }
    // }

    config.static = {
        prefix: '/public/'
    }

    return config;
};