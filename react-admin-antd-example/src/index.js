import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import Admin from './admin'
import Router from './router'
import configureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';
// Redux Store对象，管理所有的Redux状态
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
// ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();