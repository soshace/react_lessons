import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class RootContainer extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <ul>
                        <li><Link to="/articles">article list</Link></li>
                        <li><Link to="/counter">counter</Link></li>
                        <li><Link to="/filters">filters</Link></li>
                        <li><Link to="/comments">comments</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default RootContainer