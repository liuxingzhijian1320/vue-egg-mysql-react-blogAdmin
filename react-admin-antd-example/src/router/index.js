import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from 'src/pages/login'
import App from 'src/App'
import Home from 'src/pages/home';
import Buttons from 'src/pages/ui/buttons'
import NoMatch from 'src/pages/nomatch'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={()=>
                        <App>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Route path="/ui/buttons" component={Buttons} />
                                <Redirect to="/home" />
                                <Route component={NoMatch} /> 
                            </Switch>
                        </App>         
                    } />
                </Switch>
            </HashRouter>
        );
    }
}