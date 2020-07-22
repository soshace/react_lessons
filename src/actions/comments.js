import { ADD_COMMENT, FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE } from "../types";

export const addComment = (comment, articleId) => {
    return {
        type: ADD_COMMENT,
        payload: { ...comment, articleId },
        withRandomId: true
    };
};

const requestStart = () => {
    return {
        type: FETCH_COMMENT_REQUEST,
    };
};

const requestSuccess = (data) => {
    return {
        type: FETCH_COMMENT_SUCCESS,
        payload: data,
    };
};

const requestFailed = (error) => {
    return {
        type: FETCH_COMMENT_FAILURE,
        error: error,
    };
};

export const fetchCommentRequest = (articleId) => {    
    return function (dispatch) {
        dispatch(requestStart());

        return fetch(`http://localhost:3001/api/comment?article=${articleId}`)
            .then(
                response => response.json()
            )
            .then(json =>
                dispatch(requestSuccess(json))
            )
            .catch(error =>
                dispatch(requestFailed(error))
            );
    }
};
