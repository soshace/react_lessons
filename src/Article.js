import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false
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
    const { article: { title, text, comments } } = this.props
        const { isOpen } = this.state
        const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null

        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ title }</h1>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



/*
function Article(props) {
    const article = props.article
//    const { article: { title, text } } = props

    return (
        <div>
            <h1>{ article.title }</h1>
            <section>{ article.text }</section>
        </div>
    )
}
*/

export default Article