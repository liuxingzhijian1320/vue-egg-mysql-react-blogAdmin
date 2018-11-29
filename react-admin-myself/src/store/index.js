// import { createStore } from 'redux'
// import reducer from './reducer'
// const store = createStore(reducer)
// export default store

// 版本2
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// import reducer from './reducer/index.js'
// console.info('reducer', reducer)

// const reduxTools = window.devToolsExstension ? window.devToolsExtension() : f=>f
// const store = createStore(reducer,compose(
//     applyMiddleware(thunk),
//     reduxTools
// ))

// export default store

// 版本3
import { createStore, compose } from 'redux'
import reducer from './reducer/index.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers())

export default store