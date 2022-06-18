import {UPDATE_CONTENTS} from './types'

export const updateContents = (newContent) => ({
    type : UPDATE_CONTENTS,
    payload : newContent
})