import { articles } from './fixtures'
import Article from './Article'
import React from 'react'
import { render } from 'react-dom'

render(<Article article = {articles[0]} />, document.getElementById('container'))