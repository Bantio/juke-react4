import reducer from './reducers/root-reducer.js';
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store


// import reducer from './reducers/root-reducer.js';
// import { createStore, applyMiddleware } from 'redux'
// import createLogger from 'redux-logger'

// applyMiddleware(createLogger())

// let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store
