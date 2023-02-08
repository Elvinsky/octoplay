const DEFAULT_STATE = {
    discs: [],
    comments: [],
    loading: false,
    error: null,
};
export const discReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'DISC/SET': {
            return {
                ...state,
                disc: payload,
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
                disc: payload,
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
                disc: [...state.disc, disc],
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
                disc: state.disc.filter((n) => n.id !== disc.id),
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
                disc: state.disc.map((n) => (n.id === disc.id ? disc.disc : n)),
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
        default: {
            return state;
        }
    }
};
