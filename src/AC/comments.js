import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {...comment, articleId},
        withRandomId: true
    }
}

export function loadComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadCommentsForPage(page) {
    return {
        type: LOAD_COMMENTS_FOR_PAGE,
        payload: { page },
        callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
    }
}