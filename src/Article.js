import React, { Component } from 'react'

import CommentList from './CommentList';

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article: { title, text, comments } } = this.props;
        const { isOpen } = this.state
        const body = isOpen ? <section>{text} <CommentList comments={comments} /></section> : null;
        return (
            <div>
                <h1 onClick={this.toggleOpen}>{title}</h1>
                {body}
            </div>
        );
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

const Article = props => {
    const [isOpen, setOpen] = React.useState(false)
    const toggleOpen = (ev) => {
        setOpen(!isOpen)
    }
    const { article } = props;
    const body = isOpen ? <section>{article.text}</section> : null

    return (
        <div>
            <h1 onClick={toggleOpen}>{article.title}</h1>
            {body}
        </div>
    )

}
*/

export default Article;