const getUsers = async () => {
    const users = await fetch('http://localhost:5000/users').then((r) =>
        r.json()
    );
    return {users};
};
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
    } catch (e) {
        console.error(e);
        dispatch({type: 'USER/LOGIN/ERROR', payload: e});
    }
};
