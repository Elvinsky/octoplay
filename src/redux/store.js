import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './users/userReducer';
import {newsReducer} from './news/newsReducer';
import {discReducer} from './discussions/discReducer';
const store = createStore(
    combineReducers({
        users: userReducer,
        news: newsReducer,
        discs: discReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
