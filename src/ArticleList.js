import React, { Component }  from 'react'
import Article from './Article'

class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    openArticle = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openArticleId: id
        })
    }

    render() {
        const { articles } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == this.state.openArticleId}
                openArticle = {this.openArticle(article.id)}
            />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ArticleList