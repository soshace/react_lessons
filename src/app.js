import { articles } from './fixtures'
import ArticleList from './ArticleList'
import React from 'react'
import { render } from 'react-dom'

render(<ArticleList articles = {articles} />, document.getElementById('container'))