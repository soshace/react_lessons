import React, { Component, PropTypes } from 'react'
import Comment from './../components/Comment'
import NewCommentForm from './../components/NewCommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { addComment } from '../AC/comments'
import { connect } from 'react-redux'

class CommentList extends Component {
    render() {
        const { commentObjects, isOpen, toggleOpen } = this.props

        if (!commentObjects || !commentObjects.length) return <h3>no comments yet</h3>

        const linkText = isOpen ? 'close comments' : 'show comments'
        return (
            <div>
                <a href="#" onClick = {toggleOpen} ref="toggler">{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { isOpen, article, commentObjects, addComment } = this.props
        if (!isOpen) return null
        const commentItems = commentObjects.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <ul>{commentItems}</ul>
                <NewCommentForm articleId = {article.id} addComment = {addComment}/>
            </div>
        )
    }
}

export default connect((state, { article }) => {
    return {
        commentObjects: article.comments.map(id => state.comments.get(id))
    }
}, {
    addComment
})(toggleOpen(CommentList))