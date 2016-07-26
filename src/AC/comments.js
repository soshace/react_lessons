import { ADD_COMMENT } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {...comment, articleId},
        withRandomId: true
    }
}