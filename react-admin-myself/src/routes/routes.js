export default {
    menus: [ // 菜单相关路由
        { 
            key: '/dashboard', 
            title: '首页', 
            icon: 'mobile', 
            component: 'Dashboard' 
        },
        {
            key: '/dashboard', title: 'UI', icon: 'scan',
            subs: [
                { 
                    key: '/dashboard/cate', 
                    title: '分类', 
                    component: 'Cate'
                },
                { 
                    key: '/dashboard/article', 
                    title: '文章', 
                    component: 'Article'
                },
            ],
        },
    ],
    others: [] // 非菜单相关路由
}