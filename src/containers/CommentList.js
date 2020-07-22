import React, { Component } from "react";
import Comment from "../components/Comment";
import toggleOpen from "../decorators/toggleOpen";
import { connect } from "react-redux"; 
import { addComment, fetchCommentRequest } from "../actions";
import CommentForm from "../components/CommentForm";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchCommentRequest(this.props.article.id);
  }

  render() {
    const { comments, isOpen, toggleOpen, article, addComment } = this.props;
    // if (!isFetching || !commentObj.length) return <h3>no comments yet</h3>;
    const commentItems = comments.map(comment => {
      return (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      );
    });
    const body = isOpen ? (
      <div>
        <ul>{commentItems}</ul>
        <CommentForm articleId={article.id} addComment={addComment} />
      </div>
    ) : null;
    const linkText = isOpen ? "close comments" : "show comments";
    return (
      <div>
        <button onClick={toggleOpen} ref="toggler">
          {linkText}
        </button>
        {body}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments.comments.valueSeq(),
    isFetching: state.comments.isFetching,
  };
};

export default connect(
  mapStateToProps,
  { addComment, fetchCommentRequest }
)(toggleOpen(CommentList));
