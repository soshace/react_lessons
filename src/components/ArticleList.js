import React, { Component }  from 'react'
import { Link } from 'react-router'

class ArticleList extends Component {


    render() {
        const { articles } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
           <Link to={`/articles/${article.id}`}
                 activeStyle = {{color: 'red'}}
                 activeClassName = "link-active">{article.title}</Link>
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