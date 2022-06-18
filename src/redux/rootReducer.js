import { combineReducers } from "redux"
import contentReducer from './reducers'

const rootReducer = combineReducers({
    contents : contentReducer
})

export default rootReducer