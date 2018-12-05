import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from 'src/pages/login'
import App from 'src/App'
import Dashboard from 'src/pages/dashboard';
import Category from 'src/pages/blog/category/category'
import Article from 'src/pages/blog/article/article'


import Nofound from 'src/pages/nofound'

export default class ERouter extends React.Component{

    render(){
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
                                <Redirect to="/dashboard" />
                                <Route component={Nofound} />
                            </Switch>
                        </App>         
                    } />
                </Switch>
            </HashRouter>
        );
    }
}