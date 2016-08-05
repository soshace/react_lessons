import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class CommentRoot extends Component {
    static propTypes = {

        //From redux connect:

    };

    render() {
        return (
            <div>
                <h1>Comments pagination</h1>
                {this.props.children}
                {this.getLinks()}
            </div>
        )
    }

    getLinks() {
        const { total } = this.props
        if (!total) return null
        const links = Array(...Array(Math.floor((total - 1)/5) + 1))
            .map((_, index) => (
                <li key={index}>
                    <Link to={`/comments/${index + 1}`}>{index + 1}</Link>
                </li>)
            )
        return <ul>{links}</ul>
    }
}

export default connect((state) => ({
    total: state.comments.get('total')
}), {})(CommentRoot)