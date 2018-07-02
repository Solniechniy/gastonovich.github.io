import {createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";
import {loadState,saveState} from './localStorage';

const persistedState = loadState();
const store = applyMiddleware(thunk)(createStore)(rootReducer,persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>{
    saveState(store.getState())
});
export default store;