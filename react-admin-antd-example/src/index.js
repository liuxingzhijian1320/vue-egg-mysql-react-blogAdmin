import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import Admin from './admin'
import Router from './router'
import registerServiceWorker from './registerServiceWorker';

// import configureStore from './redux/store/configureStore';
// const store = configureStore();
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
// ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();