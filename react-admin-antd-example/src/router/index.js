import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from 'src/App'
import Login from 'src/pages/login'
import Admin from 'src/admin'
import Home from 'src/pages/home';
import Buttons from 'src/pages/ui/buttons'
import NoMatch from 'src/pages/nomatch'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        }
                        />
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Redirect to="/home" />
                                    {/* <Route component={NoMatch} /> */}
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}