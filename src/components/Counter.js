import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <a href="#" onClick = {this.handleIncrement}>increment</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        console.log('---', 'incrementing')
    }
}

export default Counter