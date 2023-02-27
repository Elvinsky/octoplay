import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './users/userReducer';
import {newsReducer} from './news/newsReducer';
import {discussionsReducer} from './discussions/discussionsReducer';

// TODO: migrate to @redux/toolkit. Will be much easier
const store = createStore(
    combineReducers({
        users: userReducer,
        news: newsReducer,
        discussions: discussionsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
