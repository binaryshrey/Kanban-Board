import { combineReducers } from "redux"
import contentReducer from './reducers/contentReducers'
import colorModeReducer from './reducers/themeReducers'


const rootReducer = combineReducers({
    contents : contentReducer,
    colorMode : colorModeReducer
})

export default rootReducer