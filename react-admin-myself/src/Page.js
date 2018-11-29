import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './pages/login/login';
import App from './App';
import "antd/dist/antd.css";
import './assets/styles/reset.css'
import './assets/styles/global.css'
import './assets/styles/iconfont.css'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" 
            	render={() => <Redirect to="/dashboard" push />} />        
            <Route path="/dashboard" component={App} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
)