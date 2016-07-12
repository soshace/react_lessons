import React, { Component, PropTypes } from 'react'
import CommentList from './../CommentList'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'

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
                    <h1 onClick = {openArticle}>{ title }</h1>
                    <CSSTransitionGroup transitionName="article" transitionEnterTimeout={500} transitionLeaveTimeout = {300}>
                        {body}
                    </CSSTransitionGroup>
                </div>
            )
    }
}

export default Article