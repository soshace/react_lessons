import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'
import { connect } from 'react-redux'

class ArticleContainer extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Article article = {this.props.article} isOpen = {true}/>
            </div>
        )
    }
}

export default connect((state, { id }) => {
    return {
        article: state.articles.getIn(['entities', id])
    }
})(ArticleContainer)