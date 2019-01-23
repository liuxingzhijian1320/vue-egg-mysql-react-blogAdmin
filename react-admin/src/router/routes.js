const menuList = [
    {
        title: '首页',
        path: '/dashboard',
        icon: 'home',
        meta: {
            requireAuth: true
        }
    },
    {
        title: '博客',
        path: '/blog',
        icon: 'read',
        children: [
            {
                title: '分类',
                path: '/blog/category',
                icon: 'bulb',
                meta: {
                    requireAuth: true
                }
            },
            {
                title: '文章',
                path: '/blog/article',
                icon: 'bulb',
                meta: {
                    requireAuth: true
                }
            },
            {
                title: '登录记录',
                path: '/blog/loginlog',
                icon: 'bulb',
                meta: {
                    requireAuth: true
                }
            },
        ]
    },

];
export default menuList;