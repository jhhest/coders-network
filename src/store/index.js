import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./rootReducer";

import ReduxThunk from "redux-thunk";

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : x => x;

const middleWare = [ReduxThunk]

const enhancer = composeWithDevTools(applyMiddleware(...middleWare));

const store = createStore(reducer, enhancer);

export default store;
