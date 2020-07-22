import React from "react";
import PropTypes from "prop-types";

function Comment(props) {
  if (!props.comment) return <h3>No comment</h3>;
  const {
    comment: { text, user }
  } = props;
  return (
    <div>
      <p>{text}</p>
      <p>by {user}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  })
};

export default Comment;
