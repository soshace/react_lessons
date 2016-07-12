import React, { Component, PropTypes } from 'react'

class JqueryComponent extends Component {
    static propTypes = {

    };

    componentDidMount() {
        console.log('---',this.refs.component)
    }

    render() {
        return (
            <div ref="component"/>
        )
    }
}

export default JqueryComponent