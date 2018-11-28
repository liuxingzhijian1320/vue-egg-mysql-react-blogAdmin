'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 首页
    router.get('/', controller.home.index);
    // 用户 列表
    router.get('/user', controller.user.user);
    // 用户 搜索
    router.get('/user/:id', controller.user.userFind);
    // 用户 新增
    router.post('/user/add', controller.user.userAdd);

    // 分类 列表
    router.get('/cate', controller.cate.cate);
    // 分类 详情 
    router.get('/cate/:id', controller.cate.cateFind);
    // 分类 新增
    router.post('/cate/add', controller.cate.cateAdd);
    // 分类 删除
    router.post('/cate/del/:id', controller.cate.cateDel);
    // 分类 编辑
    router.post('/cate/update/:id', controller.cate.cateUpdate);
};