import {getNews, getNewsById, postNews} from '../../api';

export const fetchNews = () => async (dispatch) => {
    dispatch({type: 'NEWS/FETCH/START'});
    try {
        const {news} = await getNews();
        dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/FETCH/ERROR', payload: e});
    }
};

export const fetchNewsById = (id) => async (dispatch) => {
    dispatch({type: 'NEWS/FETCH/START'});
    try {
        const {news} = await getNewsById(id);
        dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news});
    } catch (e) {
        console.error(e);
        dispatch({type: 'NEWS/FETCH/ERROR', payload: e});
    }
};

export const fetchRecentNews = () => async (dispatch) => {
    dispatch({type: 'NEWS/FETCH/START'});
    try {
        const {news} = await getNews();
        dispatch({type: 'NEWS/FETCH/SUCCESS', payload: news.slice(-5)});

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
