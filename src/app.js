import { articles } from './fixtures'
import ArticleList from './components/ArticleList'
import React from 'react'
import { render } from 'react-dom'
import Counter from './components/Counter'

//render(<ArticleList articles = {articles} />, document.getElementById('container'))
render(<Counter count = {0} />, document.getElementById('container'))