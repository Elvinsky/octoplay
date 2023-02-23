import {
    deleteDisc,
    getComments,
    getDisc,
    getDiscById,
    getPaginatedDiscussions,
    getRecentDisc,
    patchDisc,
    postComment,
    postDisc,
} from '../../utils/api';

export const fetchDisc = () => async (dispatch) => {
    dispatch({type: 'DISCUSSIONS/FETCH/START'});
    try {
        const disc = await getDisc();
        dispatch({type: 'DISCUSSIONS/FETCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISCUSSIONS/FETCH/ERROR', payload: e});
    }
};
export const fetchPaginatedDiscussions =
    (startOffset, endOffset) => async (dispatch) => {
        dispatch({type: 'DISCUSSIONS/FETCH/START'});
        dispatch({type: 'DISCUSSIONS/AMOUNT/SET/START'});
        try {
            const news = await getPaginatedDiscussions(startOffset, endOffset);
            dispatch({type: 'DISCUSSIONS/FETCH/SUCCESS', payload: news[0]});
            dispatch({
                type: 'DISCUSSIONS/AMOUNT/SET/SUCCESS',
                payload: news[1],
            });
        } catch (e) {
            console.error(e);
            dispatch({type: 'DISCUSSIONS/AMOUNT/SET/ERROR', payload: e});
            dispatch({type: 'DISCUSSIONS/FETCH/ERROR', payload: e});
        }
    };
export const fetchRecentDisc = () => async (dispatch) => {
    dispatch({type: 'DISCUSSIONS/FETCH/START'});
    try {
        const disc = await getRecentDisc();
        dispatch({type: 'DISCUSSIONS/FETCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISCUSSIONS/FETCH/ERROR', payload: e});
    }
};
export const fetchDiscById = (id) => async (dispatch) => {
    dispatch({type: 'DISCUSSIONS/FETCH/START'});
    try {
        const disc = await getDiscById(id);
        dispatch({type: 'DISCUSSIONS/FETCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISCUSSIONS/FETCH/ERROR', payload: e});
    }
};
export const addDisc = (disc) => async (dispatch) => {
    dispatch({type: 'DISCUSSIONS/ADD/START'});
    await postDisc(disc);
    try {
        dispatch({type: 'DISCUSSIONS/ADD/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISCUSSIONS/ADD/ERROR', payload: e});
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
    dispatch({type: 'DISCUSSIONS/DELETE/START'});
    try {
        await deleteDisc(id);
        dispatch({type: 'DISCUSSIONS/DELETE/SUCCESS', payload: id});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISCUSSIONS/DELETE/ERROR', payload: e});
    }
};
export const patchDiscItem = (disc, id) => async (dispatch) => {
    dispatch({type: 'DISCUSSIONS/PATCH/START'});
    try {
        await patchDisc(disc, id);
        dispatch({type: 'DISCUSSIONS/PATCH/SUCCESS', payload: disc});
    } catch (e) {
        console.error(e);
        dispatch({type: 'DISCUSSIONS/PATCH/ERROR', payload: e});
    }
};
