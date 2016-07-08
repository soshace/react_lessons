import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

class CommentList extends Component {
    render() {
        const { comments, isOpen, toggleOpen } = this.props
        if (!comments || !comments.length) return <h3>no comments yet</h3>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        const body = isOpen ? <ul>{commentItems}</ul> : null
        const linkText = isOpen ? 'close comments' : 'show comments'
        return (
            <div>
                <a href="#" onClick = {toggleOpen}>{linkText}</a>
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList)