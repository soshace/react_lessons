import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    "id": "",
    "date": "",
    "title": "",
    "text": "",
    "comments": []
})

const defaultArticles = recordsFromArray(Article, normalizedArticles)

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)
    }
    //articles.set()
    //articles.update()
    //articles.updateIn([id, 'comments'], comments => ...)
    return articles
}