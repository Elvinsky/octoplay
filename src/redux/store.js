import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './userReducer';
const store = createStore(
    userReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
