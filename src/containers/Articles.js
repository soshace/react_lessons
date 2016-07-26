import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'
import { loadAllArticles } from '../AC/articles'

class Articles extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const { articles } = this.props
        return <ArticleList articles = {articles} />
    }
}

export default connect(({ articles, filters }) => {
    return {
        articles: filterArticles(articles, filters)
    }
}, {
    loadAllArticles
})(Articles)

function filterArticles(articles, { from, to, selectedArticles }) {
    return articles.valueSeq()
        .filter((article) => selectedArticles.length ? selectedArticles.includes(article.id) : true)
        .filter(article => (!from || Date.parse(article.date) > from) && (!to || Date.parse(article.date) < to))
}