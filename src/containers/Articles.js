import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'

class Articles extends Component {
    static propTypes = {

    };

    render() {
        const { articles } = this.props
        return <ArticleList articles = {articles} />
    }
}

export default connect(
    ({articles}) => ({articles})
)(Articles)