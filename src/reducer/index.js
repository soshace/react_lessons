import articles from './articles'
import comments from './comments'
import counter from './counter'
import filters from './filters'
import { combineReducers } from 'redux'

export default combineReducers({
    count: counter,
    articles, filters, comments
})