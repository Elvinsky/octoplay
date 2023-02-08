import {getDisc, postComment, postDisc} from '../../api';

export const fetchDisc = () => async (dispatch) => {
    dispatch({type: 'DISC/FETCH/START'});
    try {
        const disc = await getDisc();
        dispatch({type: 'DISC/FETCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/FETCH/ERROR', payload: e});
    }
};

export const addDisc = (disc) => async (dispatch) => {
    dispatch({type: 'DISC/ADD/START'});
    postDisc(disc);
    try {
        dispatch({type: 'DISC/ADD/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/ADD/ERROR', payload: e});
    }
};

export const addComment = (discID, comment) => async (dispatch) => {
    dispatch({type: 'COMMENT/ADD/START'});
    postComment(discID, comment);
    try {
        dispatch({type: 'DISC/ADD/SUCCESS', payload: comment});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/ADD/ERROR', payload: e});
    }
};
