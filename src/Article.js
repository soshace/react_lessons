import React from 'react';

/*
class Article extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const article = this.props.article;
        //        const { article } = this.props 
        //        const { article: { title, text } } = props  
        const { isOpen } = this.state
        const body = isOpen ? <section>{article.text}</section> : null;

        return (
            <div>
                <h1 onClick={this.toggleOpen}>{article.title}</h1>
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
*/

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

export default Article;