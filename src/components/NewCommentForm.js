import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired,
        articleId: PropTypes.string.isRequired
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        const { text, user } = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
                Name:
                <input value={user} onChange={this.handleChange('user')}/>
                Comment:
                <input value={text} onChange={this.handleChange('text')}/>
                <input type="submit" value="add comment"/>
            </form>
        )
    }

    handleChange = element => ev => {
        this.setState({
            [element]: ev.target.value
        })
    }

    handleSubmit = ev => {
        const { addComment, articleId } = this.props
        ev.preventDefault()
        addComment(this.state, articleId)

        this.setState({
            user: '',
            text: ''
        })
    }
}

export default NewCommentForm