import React from 'react'
import { Router, hashHistory, browserHistory, Route } from 'react-router'
import Root from './containers/Root'


export default (
    <Router history = {hashHistory}>
        <Route path="/articles" component = {Root}/>
    </Router>
)