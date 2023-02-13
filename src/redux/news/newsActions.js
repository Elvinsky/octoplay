import {
    getNews,
    getNewsById,
    postNews,
    deleteNews,
    patchNews,
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
        const news = await getNews();
        dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news.slice(-6)});

        //КОСТЫЛЬ ОГРОМНЫЙ!!
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
export const patchNewsItem = (id, news) => async (dispatch) => {
    dispatch({type: 'NEWS/PATCH/START'});
    try {
        await patchNews(news, id);
        dispatch({type: 'NEWS/PATCH/SUCCESS', payload: {id, news}});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/PATCH/ERROR', payload: e});
    }
};
