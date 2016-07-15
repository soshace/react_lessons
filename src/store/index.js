import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, 0)
window.store = store

export default store