import {combineReducers} from 'redux'
import {HomeReducer as Home} from './HomeReducer'

export const rootReducer = () => {
    return combineReducers({Home})
}

export default rootReducer