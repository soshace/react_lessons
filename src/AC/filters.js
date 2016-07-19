import { CHANGE_FILTERS } from '../constants'


export function changeFilters(change) {
    return {
        type: CHANGE_FILTERS,
        payload: { change }
    }
}