import articles from './articles'
import counter from './counter'
import filters from './filters'
import { combineReducers } from 'redux'

export default combineReducers({
    count: counter,
    articles, filters
})