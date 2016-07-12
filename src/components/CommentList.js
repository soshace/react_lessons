import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    componentWillMount() {
        console.log('---', this.props)
    }
    componentDidMount() {
        console.log('---', 'mounted', this.refs.toggler)
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', this.props.isOpen, nextProps.isOpen)
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen
    }

    render() {
        const { comments, isOpen, toggleOpen } = this.props

        if (!comments || !comments.length) return <h3>no comments yet</h3>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        const body = isOpen ? <ul>{commentItems}</ul> : null
        const linkText = isOpen ? 'close comments' : 'show comments'
        return (
            <div>
                <a href="#" onClick = {toggleOpen} ref="toggler">{linkText}</a>
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList)