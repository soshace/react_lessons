import { CHANGE_FILTERS } from '../constants'

const defaultFilters = {
    selectedArticles: [],
    from: null,
    to: null
}

export default (filters = defaultFilters, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case CHANGE_FILTERS:
            return Object.assign({}, filters, payload.change)
    }

    return filters
}