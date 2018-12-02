const menuList = [
    {
        title: '首页',
        path: '/dashboard',
        icon: 'home'
    },
    {
        title: '博客',
        path: '/blog',
        icon: 'read',
        children: [
            {
                title: '分类',
                path: '/blog/category',
                icon: 'bulb'
            },
        ]
    },

];
export default menuList;