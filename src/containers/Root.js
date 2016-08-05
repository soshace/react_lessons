import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class RootContainer extends Component {
    static propTypes = {

    };

    state = {
        user: ''
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user
        }
    }

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <ul>
                        <li><Link to="/articles">article list</Link></li>
                        <li><Link to="/articles/new">new article</Link></li>
                        <li><Link to="/counter">counter</Link></li>
                        <li><Link to="/filters">filters</Link></li>
                        <li><Link to="/comments">comments</Link></li>
                    </ul>
                    <input value = {this.state.user} onChange = {this.handleChange}/>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleChange = (ev) => {
        this.setState({
            user: ev.target.value
        })
    }
}

export default RootContainer