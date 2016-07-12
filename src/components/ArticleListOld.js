import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../mixins/oneOpen'

const ArticleList = React.createClass({
    mixins: [oneOpen],
    render() {
        const { articles } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {this.isItemOpen(article.id)}
                openArticle = {this.toggleOpenItem(article.id)}
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
})

export default ArticleList