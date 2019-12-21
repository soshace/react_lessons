import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

class Article extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const {
      isOpen,
      openArticle,
      article: { title, text, comments }
    } = this.props;
    const body = isOpen ? (
      <section>
        {text} <CommentList comments={comments} />
      </section>
    ) : null;

    return (
      <div>
        <h1 onClick={openArticle}>{title}</h1>
        {body}
      </div>
    );
  }
}

export default Article;
