const DEFAULT_STATE = {
    users: [],
    loading: false,
    error: null,
};
export const userReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'USER/SET': {
            return {
                ...state,
                users: payload,
            };
        }
        case 'USER/ADD': {
            const user = payload;
            return {
                ...state,
                users: state.users.concat(user),
            };
        }
        default: {
            return state;
        }
    }
};
