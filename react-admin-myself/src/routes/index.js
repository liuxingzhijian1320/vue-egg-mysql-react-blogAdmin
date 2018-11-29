import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../components';
import routesConfig from './routes';
import queryString from 'query-string';

export default class CRouter extends Component {

    render() {
        return (
            <Switch>
                {
                    
                }

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}