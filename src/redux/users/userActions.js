import {getUsers, postUser} from '../../api';

export const fetchUsers = () => async (dispatch) => {
    dispatch({type: 'USERS/FETCH/START'});
    try {
        const {users} = await getUsers();
        dispatch({type: 'USERS/FETCH/SUCCESS', payload: users});
    } catch (e) {
        console.error(e);
        dispatch({type: 'USERS/FETCH/ERROR', payload: e});
    }
};
export const loginUser = (user) => async (dispatch) => {
    dispatch({type: 'USER/LOGIN/START'});
    try {
        dispatch({type: 'USER/LOGIN/SUCCESS', payload: user});
        localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
        console.error(e);
        dispatch({type: 'USER/LOGIN/ERROR', payload: e});
    }
};
export const addUser = (user) => async (dispatch) => {
    dispatch({type: 'USER/ADD/START'});
    postUser(user);
    try {
        dispatch({type: 'USER/ADD/SUCCESS', payload: user});
    } catch (e) {
        console.error(e);
        dispatch({type: 'USER/ADD/ERROR', payload: e});
    }
};
