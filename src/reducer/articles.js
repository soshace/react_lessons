import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { OrderedMap, Record } from 'immutable'


const Article = Record({
    "id": "",
    "date": "",
    "title": "",
    "text": "",
    "comments": []
})

const defaultArticles = normalizedArticles.reduce((acc, el) => {
    return acc.set(el.id, new Article(el))
}, new OrderedMap({}))

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
    }
    return articles
}