import React, { Component } from "react";
import Comment from "./Comment";
import toggleOpen from "../decorators/toggleOpen";
import { connect } from "react-redux";

class CommentList extends Component {
  constructor(props) {
    super(props);
    console.log("---", this.props);
  }

  componentDidMount() {
    console.log("---", "mounted", this.refs.toggler);
  }

  componentWillUnmount() {
    console.log("---", "unmounting");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isOpen !== this.props.isOpen;
  }

  render() {
    const { commentObj, isOpen, toggleOpen } = this.props;
    if (!commentObj || !commentObj.length) return <h3>no comments yet</h3>;

    const commentItems = commentObj.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ));
    const body = isOpen ? <ul>{commentItems}</ul> : null;
    const linkText = isOpen ? "close comments" : "show comments";
    return (
      <div>
        <a href="#" onClick={toggleOpen} ref="toggler">
          {linkText}
        </a>
        {body}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log({ props, state });
  return {
    commentObj: props.comments.map(id => state.comments.comments.get(id))
  };
};

export default connect(
  mapStateToProps,
  {}
)(toggleOpen(CommentList));
