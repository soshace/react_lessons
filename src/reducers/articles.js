import { DELETE_ARTICLE } from "../types";
import { normalizedArticles } from "../fixtures";
import { Record } from "immutable";
import { recordsFromArray } from "./utils";

const Article = Record({
  id: "",
  date: "",
  title: "",
  text: "",
  comments: []
});

const defaultArticles = recordsFromArray(Article, normalizedArticles);

const INITIAL_STATE = {
  articles: defaultArticles
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return { ...state, articles: state.articles.delete(action.payload) };

    default:
      return state;
  }
};
