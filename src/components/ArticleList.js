import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Filters from '../containers/Filters'

class ArticleList extends Component {


    render() {
        const { articles, isItemOpen, toggleOpenItem } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <div>
                <h1>Article list</h1>
                <Filters />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default oneOpen(ArticleList)