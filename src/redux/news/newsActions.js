import {
    getNews,
    getNewsById,
    postNews,
    deleteNews,
    patchNews,
    getRecentNews,
    getPaginatedNews,
} from '../../utils/api';

export const fetchNews = () => async (dispatch) => {
    dispatch({type: 'NEWS/FETCH/START'});
    try {
        const news = await getNews();
        dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/FETCH/ERROR', payload: e});
    }
};
export const fetchPaginatedNews =
    (startOffset, endOffset) => async (dispatch) => {
        dispatch({type: 'NEWS/FETCH/START'});
        dispatch({type: 'NEWS/AMOUNT/SET/START'});
        try {
            const news = await getPaginatedNews(startOffset, endOffset);
            dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news[0]});
            dispatch({type: 'NEWS/AMOUNT/SET/SUCCESS', payload: news[1]});
        } catch (e) {
            console.error(e);
            dispatch({type: 'NEWS/AMOUNT/SET/ERROR', payload: e});
            dispatch({type: 'NEWS/FETCH/ERROR', payload: e});
        }
    };
export const fetchNewsById = (id) => async (dispatch) => {
    dispatch({type: 'NEWS/FETCH/START'});
    try {
        const news = await getNewsById(id);
        dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/FETCH/ERROR', payload: e});
    }
};

export const fetchRecentNews = () => async (dispatch) => {
    dispatch({type: 'NEWS/FETCH/START'});
    try {
        const news = await getRecentNews();
        dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/FETCH/ERROR', payload: e});
    }
};
export const addNews = (news) => async (dispatch) => {
    dispatch({type: 'NEWS/ADD/START'});
    postNews(news);
    try {
        dispatch({type: 'NEWS/ADD/SUCCESS', payload: news});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/ADD/ERROR', payload: e});
    }
};
export const deleteNewsItem = (id) => async (dispatch) => {
    dispatch({type: 'NEWS/DELETE/START'});
    try {
        await deleteNews(id);
        dispatch({type: 'NEWS/DELETE/SUCCESS', payload: id});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/DELETE/ERROR', payload: e});
    }
};
export const patchNewsItem = (news, id) => async (dispatch) => {
    dispatch({type: 'NEWS/PATCH/START'});
    try {
        await patchNews(news, id);
        dispatch({type: 'NEWS/PATCH/SUCCESS', payload: news});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/PATCH/ERROR', payload: e});
    }
};
