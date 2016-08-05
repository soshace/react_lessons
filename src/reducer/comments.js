import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS } from '../constants'
import { Record, List, Map } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    "id": null,
    "user": "",
    "text": ""
})

const defaultComments = recordsFromArray(Comment, [])

const defaultState = new Map({
    loading: false,
    loaded: false,
    errors: new List([]),
    entities: defaultComments
})

export default (state = defaultState, action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new Comment({
                id: randomId,
                ...payload
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.update('entities', entities => entities.merge(recordsFromArray(Comment, response)))

        case LOAD_COMMENTS_FOR_PAGE + START:
            return state.setIn(['pagination', payload.page], new List([]))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .update('entities', entities => entities.merge(recordsFromArray(Comment, response.records)))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)

    }

    return state
}