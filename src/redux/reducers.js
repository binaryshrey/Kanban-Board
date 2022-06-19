import {UPDATE_CONTENTS} from './types'
import data from '../containers/db'

const initialState = {
    db : JSON.parse(localStorage.getItem("DBContents")) || data
}

const contentReducer = ( state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CONTENTS :
            return {
                db : action.payload
            }
        
        default:
            return state

    }
}

export default contentReducer