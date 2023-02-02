const DEFAULT_STATE = {
    users: [],
    activeUser: JSON.parse(localStorage.getItem('user')),
    loading: false,
    error: null,
};
export const userReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'USERS/SET': {
            return {
                ...state,
                users: payload,
            };
        }
        case 'USERS/ADD/SUCCESS': {
            const user = payload;
            return {
                ...state,
                users: [...state.users, user],
            };
        }
        case 'USERS/ADD/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'USERS/ADD/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }

        case 'USER/ACTIVE/SET': {
            return {
                ...state,
                activeUser: payload,
            };
        }
        case 'USERS/FETCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'USERS/FETCH/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'USERS/FETCH/SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                users: payload,
            };

        case 'USER/LOGIN/SUCCESS':
            return {
                ...state,
                activeUser: payload,
            };
        case 'USER/LOGIN/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'USER/LOGIN/START':
            return {
                ...state,
                loading: true,
            };
        default: {
            return state;
        }
    }
};
