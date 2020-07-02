import React from "react";
import { connect } from "react-redux";
import { fetchArticleRequest } from '../actions';
import ArticleList from "../components/ArticleList";

class Articles extends React.Component {
  componentDidMount(){
    this.props.fetchArticleRequest();
  }

  render(){
    const { articles, isFetching } = this.props;
    if(isFetching) return <p>Loading...</p>
    return <ArticleList articles={articles} />;
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.article.isFetching,
    articles: filterArticles(state.article.entities, state.filters)
  };
};

export default connect(
  mapStateToProps,
  { fetchArticleRequest }
)(Articles);

function filterArticles(articles, { from, to, selectedArticles }) {
  return articles
    .valueSeq()
    .filter(article =>
      selectedArticles.length ? selectedArticles.includes(article.id) : true
    )
    .filter(
      article =>
        (!from || Date.parse(article.date) > from) &&
        (!to || Date.parse(article.date) < to)
    );
}
