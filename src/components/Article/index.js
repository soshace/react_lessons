import React, { Component, PropTypes } from 'react'
import CommentList from './../CommentList'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'
import { deleteArticle } from '../../AC/articles'
import { connect } from 'react-redux'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const { isOpen, openArticle, article: { title, text, comments } } = this.props
            const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null

            return (
                <div className="article">
                    <h1 onClick = {openArticle}>{ title } <a href="#" onClick = {this.handleDelete}>delete me</a></h1>
                    <CSSTransitionGroup transitionName="article" transitionEnterTimeout={500} transitionLeaveTimeout = {300}>
                        {body}
                    </CSSTransitionGroup>
                </div>
            )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        const { article, deleteArticle } = this.props
        deleteArticle(article.id)
    }
}

export default connect(null, { deleteArticle })(Article)