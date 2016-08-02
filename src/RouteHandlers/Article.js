import React, { Component, PropTypes } from 'react'
import ArticleContainer from '../containers/Article'

class ArticleHandler extends Component {
    static propTypes = {

    };

    render() {
        return <ArticleContainer id = {this.props.params.id} />
    }
}

export default ArticleHandler