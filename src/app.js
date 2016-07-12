import { articles } from './fixtures'
import ArticleList from './ArticleListOld'
import React from 'react'
import { render } from 'react-dom'

render(<ArticleList articles = {articles} />, document.getElementById('container'))