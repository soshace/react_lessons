import React, { Component, PropTypes } from 'react'

class NoArticleFound extends Component {
    static propTypes = {

    };

    render() {
        const { articleId } = this.props.location.query
        return (
            <div>
                <h3>Article with id: {articleId} is not found</h3>
            </div>
        )
    }
}

export default NoArticleFound