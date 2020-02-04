import { DELETE_ARTICLE } from "../types";
import { normalizedArticles } from "../fixtures";
import { OrderedMap, Record } from "immutable";

const Article = Record({
  id: "",
  date: "",
  title: "",
  text: "",
  comments: []
});

const defaultArticles = normalizedArticles.reduce((acc, el) => {
  return acc.set(el.id, new Article(el));
}, new OrderedMap({}));

const INITIAL_STATE = {
  articles: defaultArticles
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      const filteredArticles = state.articles.filter(
        article => article.id !== action.payload
      );
      return { ...state, articles: filteredArticles };

    default:
      return state;
  }
};
