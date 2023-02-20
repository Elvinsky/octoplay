const DEFAULT_STATE = {
    discussions: [],
    comments: [],
    loading: false,
    error: null,
};
export const discussionsReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'DISC/SET': {
            return {
                ...state,
                discussions: payload,
            };
        }

        case 'DISC/FETCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISC/FETCH/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'DISC/FETCH/SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                discussions: payload,
            };
        case 'DISC/ADD/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISC/ADD/SUCCESS': {
            const disc = payload;
            return {
                ...state,
                loading: false,
                discussions: [...state.discussions, disc],
            };
        }
        case 'DISC/ADD/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'DISC/DELETE/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISC/DELETE/SUCCESS': {
            const disc = payload;
            return {
                ...state,
                loading: false,
                discussions: state.discussions.filter((n) => n.id !== disc.id),
            };
        }
        case 'DISC/DELETE/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'DISC/PATCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISC/PATCH/SUCCESS': {
            const disc = payload;
            return {
                ...state,
                loading: false,
                discussions: state.discussions.map((n) =>
                    n.id === disc.id ? disc.disc : n
                ),
            };
        }
        case 'DISC/PATCH/ERROR': {
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
