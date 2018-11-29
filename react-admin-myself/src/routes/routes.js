export default {
    menus: [ // 菜单相关路由
        { 
            key: '/dashboard', 
            title: '首页', 
            icon: 'mobile', 
            component: 'Dashboard' 
        },
        {
            key: '/dashboard/ui', title: 'UI', icon: 'scan',
            subs: [
                { 
                    key: '/dashboard/ui/buttons', 
                    title: '按钮', 
                    component: 'Buttons'
                },
                { 
                    key: '/dashboard/ui/icons', 
                    title: '图标', 
                    component: 'Icons'
                },
            ],
        },
    ],
    others: [] // 非菜单相关路由
}