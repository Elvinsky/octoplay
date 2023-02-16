import {getUsers, postUser} from '../../utils/api';

export const fetchUsers = () => async (dispatch) => {
    dispatch({type: 'USERS/FETCH/START'});
    try {
        const response = await getUsers();
        dispatch({type: 'USERS/FETCH/SUCCESS', payload: response});
    } catch (error) {
        console.error(error);
        dispatch({type: 'USERS/FETCH/ERROR', payload: error});
    }
};

export const loginUser = (user) => async (dispatch) => {
    dispatch({type: 'USER/LOGIN/START'});
    try {
        dispatch({type: 'USER/LOGIN/SUCCESS', payload: user});
        localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.error(error);
        dispatch({type: 'USER/LOGIN/ERROR', payload: error});
    }
};

export const addUser = (user) => async (dispatch) => {
    dispatch({type: 'USER/ADD/START'});
    try {
        await postUser(user);
        dispatch({type: 'USER/ADD/SUCCESS', payload: user});
    } catch (error) {
        console.error(error);
        dispatch({type: 'USER/ADD/ERROR', payload: error});
    }
};
