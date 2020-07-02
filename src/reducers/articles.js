import { DELETE_ARTICLE, ADD_COMMENT, FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAILURE  } from "../types";
import { Record } from "immutable";
import { recordsFromArray } from "./utils";

const Article = Record({
  id: "",
  date: "",
  title: "",
  text: "",
  comments: []
});

const defaultArticles = recordsFromArray(Article, []);

const INITIAL_STATE = {
  isFetching: false,
  errors: [],
  entities: defaultArticles
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state, entities: state.entities.updateIn(
          [action.payload.articleId, "comments"],
          comments => comments.concat(action.randomId)
        )};
    case DELETE_ARTICLE:
      return { ...state, entities: state.entities.delete(action.payload) };
    case FETCH_ARTICLE_REQUEST:
        return { ...state, isFetching: true };
    case FETCH_ARTICLE_FAILURE:
      return { ...state, isFetching: false, errors: state.errors.push(action.error) };
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, isFetching: false, entities: recordsFromArray(Article, action.payload) };
    default:
      return state;
  }
};
