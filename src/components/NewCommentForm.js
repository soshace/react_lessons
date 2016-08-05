import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired,
        articleId: PropTypes.string.isRequired
    };

    static contextTypes = {
        user: PropTypes.string
    }

    state = {
        text: ''
    }

    render() {
        const { text, user } = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
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
        addComment({
            user: this.context.user,
            text: this.state.text
        }, articleId)

        this.setState({
            user: '',
            text: ''
        })
    }
}

export default NewCommentForm