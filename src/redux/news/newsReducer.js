const DEFAULT_STATE = {
    news: [],
    amount: 0,
    loading: false,
    error: null,
};
export const newsReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'NEWS/SET': {
            return {
                ...state,
                news: payload,
            };
        }
        case 'NEWS/AMOUNT/SET/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'NEWS/AMOUNT/SET/SUCCESS': {
            return {
                ...state,
                loading: false,
                error: null,
                amount: payload,
            };
        }
        case 'NEWS/AMOUNT/SET/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'NEWS/FETCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'NEWS/FETCH/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'NEWS/FETCH/SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                news: payload,
            };
        case 'NEWS/ADD/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'NEWS/ADD/SUCCESS': {
            const news = payload;
            return {
                ...state,
                loading: false,
                news: [...state.news, news],
            };
        }
        case 'NEWS/ADD/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'NEWS/DELETE/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'NEWS/DELETE/SUCCESS': {
            const news = payload;
            return {
                ...state,
                loading: false,
                news: state.news.filter((n) => n.id !== news.id),
            };
        }
        case 'NEWS/DELETE/ERROR': {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case 'NEWS/PATCH/START': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'NEWS/PATCH/SUCCESS': {
            return {
                ...state,
                loading: false,
                news: payload,
            };
        }
        case 'NEWS/PATCH/ERROR': {
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
