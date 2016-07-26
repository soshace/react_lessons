import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'

const dumbMiddleware = store => next => action => next({...action, addition: 'hello world'})

const enhancer = compose(
    applyMiddleware(dumbMiddleware, randomId, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store