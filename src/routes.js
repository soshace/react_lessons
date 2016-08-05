import React from 'react'
import { Router, hashHistory, browserHistory, Route, Redirect, IndexRedirect, IndexRoute } from 'react-router'
import Root from './containers/Root'
import ArticlePage from './containers/Articles'
import ArticleContainer from './RouteHandlers/Article'
import CounterPage from './containers/Counter'
import FiltersPage from './containers/Filters'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import ArticleIndex from './RouteHandlers/ArticleIndex'

export default (
    <Router history = {browserHistory}>
        <Redirect from = "/" to = "/articles" />
        <Route path="/" component = {Root}>
            <Route path = "articles" component = {ArticlePage}>
                <IndexRoute component = {ArticleIndex} />
                <Route path = ":id" component = {ArticleContainer} />
                <Route path = "/some/other/:id" component = {ArticleContainer} />
            </Route>
            <Route path = "counter" component = {CounterPage} />
            <Route path = "filters" component = {FiltersPage} />
            <Route path = "comments" component = {CommentsRoot}>
                <IndexRedirect to = "1" />
                <Route path = ":page" component = {CommentsPage} />
            </Route>
        </Route>
    </Router>
)