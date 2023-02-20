import {
    deleteDisc,
    getComments,
    getDisc,
    getDiscById,
    getRecentDisc,
    patchDisc,
    postComment,
    postDisc,
} from '../../utils/api';

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
export const fetchRecentDisc = () => async (dispatch) => {
    dispatch({type: 'DISC/FETCH/START'});
    try {
        const disc = await getRecentDisc();
        dispatch({type: 'DISC/FETCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/FETCH/ERROR', payload: e});
    }
};
export const fetchDiscById = (id) => async (dispatch) => {
    dispatch({type: 'DISC/FETCH/START'});
    try {
        const disc = await getDiscById(id);
        dispatch({type: 'DISC/FETCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/FETCH/ERROR', payload: e});
    }
};
export const addDisc = (disc) => async (dispatch) => {
    dispatch({type: 'DISC/ADD/START'});
    await postDisc(disc);
    try {
        dispatch({type: 'DISC/ADD/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/ADD/ERROR', payload: e});
    }
};

export const addComment = (discID, comment) => async (dispatch) => {
    dispatch({type: 'COMMENT/ADD/START'});
    await postComment(discID, comment);
    try {
        dispatch({type: 'COMMENT/ADD/SUCCESS', payload: comment});
    } catch (e) {
        console.error(e);
        dispatch({type: 'COMMENT/ADD/ERROR', payload: e});
    }
};
export const fetchComments = (id) => async (dispatch) => {
    dispatch({type: 'COMMENTS/FETCH/START'});
    try {
        const comm = await getComments(id);
        dispatch({type: 'COMMENTS/FETCH/SUCCESS', payload: comm});
    } catch (e) {
        console.error(e);
        dispatch({type: 'COMMENTS/FETCH/ERROR', payload: e});
    }
};
export const deleteDiscItem = (id) => async (dispatch) => {
    dispatch({type: 'DISC/DELETE/START'});
    try {
        await deleteDisc(id);
        dispatch({type: 'DISC/DELETE/SUCCESS', payload: id});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/DELETE/ERROR', payload: e});
    }
};
export const patchDiscItem = (disc, id) => async (dispatch) => {
    dispatch({type: 'DISC/PATCH/START'});
    try {
        await patchDisc(disc, id);
        dispatch({type: 'DISC/PATCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISC/PATCH/ERROR', payload: e});
    }
};
