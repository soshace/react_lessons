import React, { Component, PropTypes } from 'react'
import Comment from '../components/Comment'
import { connect } from 'react-redux'
import { loadCommentsForPage } from '../AC/comments'

class CommentsPage extends Component {
    static propTypes = {

        //From redux connect:
        comments: PropTypes.object,
        total: PropTypes.number
    };

    componentDidMount() { checkAndLoad(this.props) }

    componentWillReceiveProps = checkAndLoad

    render() {
        const { total, comments, params: { page } } = this.props
        if (!total) return <h3>Loading...</h3>
        if ( (page - 1) * 5 >= total ) return <h3>No comments for this page</h3>
        if (!comments || !comments.size) return <h3>Loading...</h3>

        const commentItems = comments.map(comment => <li key = {comment.get('id')}><Comment comment = {comment} /></li>)
        return (
            <ul>
                {commentItems}
            </ul>
        )
    }
}

function checkAndLoad(props) {
    const { params: { page }, comments, loadCommentsForPage } = props
    if (!comments) loadCommentsForPage(page)
}

export default connect((state, props) => {
    const pageIds = state.comments.getIn(['pagination', props.params.page])
    const comments = pageIds && pageIds.map(id => state.comments.getIn(['entities', id]))
    const total = state.comments.get('total')
    return { comments, total }
}, { loadCommentsForPage })(CommentsPage)