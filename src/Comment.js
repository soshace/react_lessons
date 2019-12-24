import React from 'react'
import PropTypes from 'prop-types';

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div>
            <p>{text}</p>
            <b>by {user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}

export default Comment