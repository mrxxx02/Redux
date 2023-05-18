import counterReducer from "./features/Counter/reducer";
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'

let  rootReducers = combineReducers({
    counter: counterReducer
})

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhacers(applyMiddleware(thunk)));
export default store;
