import React from 'react'
import { Router, hashHistory, browserHistory, Route } from 'react-router'
import Root from './containers/Root'
import ArticlePage from './containers/Articles'
import CounterPage from './containers/Counter'
import FiltersPage from './containers/Filters'

export default (
    <Router history = {hashHistory}>
        <Route path="/" component = {Root}>
            <Route path = "articles" component = {ArticlePage} />
            <Route path = "counter" component = {CounterPage} />
            <Route path = "filters" component = {FiltersPage} />
        </Route>
    </Router>
)