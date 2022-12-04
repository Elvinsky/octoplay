import {getNews} from '../../api';

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
