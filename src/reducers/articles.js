import { DELETE_ARTICLE } from "../types";
import { articles as defaultArticles } from "../fixtures";

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
