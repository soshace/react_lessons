import { DELETE_ARTICLE, FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAILURE  } from "../types";

export const deleteArticle = id => {
  return {
    type: DELETE_ARTICLE,
    payload: id
  };
};

const requestStart = () => {
  return {
    type: FETCH_ARTICLE_REQUEST,
  };
};

const requestSuccess = (data) => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: data,
  };
};

const requestFailed = (error) => {
  console.log('error', error)
  return {
    type: FETCH_ARTICLE_FAILURE,
    error: error,
  };
};

export const fetchArticleRequest = () => {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestStart());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`api/articles`)
      .then(
        response => {
          console.log('response', response)
          return response.json()}
      )
      .then(json =>
        dispatch(requestSuccess(json))
      )
      .catch(error =>
        dispatch(requestFailed(error))
      );
  }
};
