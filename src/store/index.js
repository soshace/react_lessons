import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const dumbMiddleware = store => next => action => next({...action, addition: 'hello world'})

const enhancer = compose(
    applyMiddleware(thunk, dumbMiddleware, randomId, api, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store