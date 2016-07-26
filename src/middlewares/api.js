import $ from 'jquery'
import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)

    next({
        type: type + START,
        ...rest
    })

    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({type: type + SUCCESS, response, ...rest}))
            .fail(error => next({type: type + FAIL, error, ...rest}))
    }, 1000)
}