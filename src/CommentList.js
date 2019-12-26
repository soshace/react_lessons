import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpen from './decorators/toggleOpen';

class CommentList extends Component {
    constructor(props) {
        super(props);
        console.log('---', this.props)
        this.togglerRef = React.createRef();
    }
    componentDidMount() {
        console.log('---', 'mounted', this.togglerRef.current);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('---', props.isOpen);
        return null;
    }

    componentWillUnmount() {
        console.log('---', 'unmounting');
    }
    render() {
        const { comments, isOpen, toggleOpen } = this.props
        if (!comments || !comments.length) return <h3>no comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        const body = isOpen ? <ul>{commentItems}</ul> : null
        const linkText = isOpen ? 'close comments' : 'show comments'
        return (
            <div>
                <a href="#" ref={this.togglerRef} onClick={toggleOpen}>{linkText}</a>
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList);