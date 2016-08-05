import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class ArticleContainer extends Component {
    static propTypes = {

    };

    componentWillReceiveProps({ article, loaded, id }) {
        if (loaded && !article) browserHistory.replace(`/articles/no_article?articleId=${id}`)
    }

    componentDidMount() {
        const { article, loaded, id } = this.props
        if (loaded && !article) browserHistory.replace(`/articles/no_article?articleId=${id}`)
    }

    render() {
        if (!this.props.article) return null
        return (
            <div>
                <Article article = {this.props.article} isOpen = {true}/>
            </div>
        )
    }
}

export default connect((state, { id }) => {
    return {
        article: state.articles.getIn(['entities', id]),
        loaded: state.articles.get('loaded')
    }
})(ArticleContainer)