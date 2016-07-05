import React  from 'react'
import Article from './Article'

function ArticleList(props) {
    const { articles } = props

    const listItems = articles.map((article) => <li key = {article.id}><Article article = {article}/></li>)
    return (
        <div>
            <h1>Article list</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ArticleList