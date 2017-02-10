import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';


const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});



let store = createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware));

export default store;


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancers(
//     applyMiddleware(creat)
//   )
// );

// import reducer from './reducers/root-reducer.js';
// import { createStore, applyMiddleware } from 'redux'
// import createLogger from 'redux-logger'

// applyMiddleware(createLogger())

// let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store
