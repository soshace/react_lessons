import React from "react";
import { connect } from "react-redux";
import ArticleList from "../components/ArticleList";

function Articles(props) {
  const { articles } = props;
  return <ArticleList articles={articles} />;
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles.valueSeq()
  };
};

export default connect(
  mapStateToProps,
  {}
)(Articles);
