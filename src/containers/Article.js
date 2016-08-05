import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'
import { connect } from 'react-redux'
//import { browserHistory } from 'react-router'

class ArticleContainer extends Component {
    static propTypes = {

    };

    static contextTypes = {
        router: PropTypes.object,
        store: PropTypes.object
    }

    componentWillReceiveProps({ article, loaded, id }) {
        const { router } = this.context
        if (loaded && !article) router.replace(`/articles/no_article?articleId=${id}`)
    }

    componentDidMount() {
        const { router } = this.context
        const { article, loaded, id } = this.props
        if (loaded && !article) router.replace(`/articles/no_article?articleId=${id}`)
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