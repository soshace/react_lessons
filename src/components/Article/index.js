import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from "../CommentList";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { deleteArticle } from "../../actions";

class Article extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  handleDelete = event => {
    event.preventDefault();
    const { article, deleteArticle } = this.props;
    deleteArticle(article.id);
  };

  render() {
    const {
      isOpen,
      openArticle,
      article: { title, text, comments }
    } = this.props;
    return (
      <div className="article">
        <h1 onClick={openArticle}>{title}</h1>
        <a href="#" onClick={this.handleDelete}>
          delete me
        </a>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="article"
          unmountOnExit
        >
          <section>
            {text} <CommentList comments={comments} />
          </section>
        </CSSTransition>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteArticle }
)(Article);
