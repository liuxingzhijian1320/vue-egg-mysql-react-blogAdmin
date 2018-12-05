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

    // >>>  admin
    // 分类 列表
    router.get('/admin/cate/list', controller.cate.cate);
    // 分类 详情 
    router.get('/admin/cate/:id', controller.cate.cateDetail);
    // 分类 新增
    router.post('/admin/cate/add', controller.cate.cateAdd);
    // 分类 删除
    router.post('/admin/cate/del/:id', controller.cate.cateDel);
    // 分类 编辑
    router.post('/admin/cate/update/:id', controller.cate.cateUpdate);
    // >>>  blog
    // 分类 列表
    router.get('/blog/cate/list', controller.cate.cate);

    // 登录记录
    router.get('/admin/loginlog/list', controller.loginlog.loginlog);
    router.post('/admin/loginlog/add', controller.loginlog.loginlogAdd);

};