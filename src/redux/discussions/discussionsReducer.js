const DEFAULT_STATE = {
    discussions: [],
    amount: 0,
    comments: [],
    loading: false,
    error: null,
};
export const discussionsReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'DISCUSSIONS/SET': {
            return {
                ...state,
                discussions: payload,
            };
        }
        case 'DISCUSSIONS/AMOUNT/SET/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISCUSSIONS/AMOUNT/SET/SUCCESS': {
            return {
                ...state,
                loading: false,
                error: null,
                amount: payload,
            };
        }
        case 'DISCUSSIONS/AMOUNT/SET/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'DISCUSSIONS/FETCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISCUSSIONS/FETCH/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'DISCUSSIONS/FETCH/SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                discussions: payload,
            };
        case 'DISCUSSIONS/ADD/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISCUSSIONS/ADD/SUCCESS': {
            const disc = payload;
            return {
                ...state,
                loading: false,
                discussions: [...state.discussions, disc],
            };
        }
        case 'DISCUSSIONS/ADD/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'DISCUSSIONS/DELETE/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISCUSSIONS/DELETE/SUCCESS': {
            const disc = payload;
            return {
                ...state,
                loading: false,
                discussions: state.discussions.filter((n) => n.id !== disc.id),
            };
        }
        case 'DISCUSSIONS/DELETE/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'DISCUSSIONS/PATCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISCUSSIONS/PATCH/SUCCESS': {
            return {
                ...state,
                loading: false,
                discussions: payload,
            };
        }
        case 'DISCUSSIONS/PATCH/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'COMMENT/ADD/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'COMMENT/ADD/SUCCESS': {
            return {
                ...state,
                loading: false,
                comments: [...state.comments, payload],
            };
        }
        case 'COMMENTS/ADD/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'COMMENTS/FETCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'COMMENTS/FETCH/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'COMMENTS/FETCH/SUCCESS': {
            return {
                ...state,
                comments: payload,
            };
        }
        default: {
            return state;
        }
    }
};
