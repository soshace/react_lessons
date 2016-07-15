import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import Articles from './Articles'
import store from '../store'

class RootContainer extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <Counter />
                    <Articles />
                </div>
            </Provider>
        )
    }
}

export default RootContainer