import { INCREMENT } from '../constants'

export default (count, action) => {
    return action.type == INCREMENT ? count + 1 : count
}