import {DARK_MODE} from '../types'

const initialMode = {
    darkMode : JSON.parse(localStorage.getItem("darkMode")) || true

}

const colorModeReducer = ( state = initialMode, action) => {
    switch(action.type) {
        case DARK_MODE :
            return {
                darkMode : action.payload
            }
        default:
            return state
    }
}

export default colorModeReducer