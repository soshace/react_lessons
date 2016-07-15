import { articles } from './fixtures'
import ArticleList from './components/ArticleList'
import React from 'react'
import { render } from 'react-dom'
import Counter from './components/Counter'
import store from './store'
import { increment } from './AC/counter'

function wrappedIncrement() {
    store.dispatch(increment())
}
//render(<ArticleList articles = {articles} />, document.getElementById('container'))

render(<Counter count = {store.getState()} increment = {wrappedIncrement}/>, document.getElementById('container'))

store.subscribe(() => {
    render(<Counter count = {store.getState()} increment = {wrappedIncrement} />, document.getElementById('container'))
})