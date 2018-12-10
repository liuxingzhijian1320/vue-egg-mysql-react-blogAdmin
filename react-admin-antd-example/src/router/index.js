import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from 'src/pages/login'
import App from 'src/App'
// 按需加在组件
import asyncComponent from 'src/assets/scripts/asyncComponent'

const Dashboard = asyncComponent(()=>import('src/pages/dashboard'))
const Category = asyncComponent(()=>import('src/pages/blog/category/category'))
const Article = asyncComponent(()=>import('src/pages/blog/article/article'))
const Loginlog = asyncComponent(()=>import('src/pages/blog/loginlog/loginlog'))


import Nofound from 'src/pages/nofound'

 class ERouter extends React.Component{
    render(){
         let { userName, password } = JSON.parse(localStorage.getItem("zhooson_blog_Auth")) || {};
         var isLogin;
         if(userName ==='admin' && password=='0000'){
            isLogin = true
         }else {
            isLogin = false
         }
         // console.info('isLogin', isLogin)
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={()=>
                        <App>
                            <Switch>
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path="/blog/category" component={Category} />
                                <Route path="/blog/article" component={Article} />
                                <Route path='/blog/loginlog' component={Loginlog} />
                                
                                <Redirect to="/dashboard" />
                            </Switch>
                        </App>         
                    } />
                </Switch>
            </HashRouter>
        );
    }
}

export default ERouter