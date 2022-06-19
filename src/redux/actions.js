import {UPDATE_CONTENTS, DARK_MODE} from './types'

export const updateContents = (newContent) => ({
    type : UPDATE_CONTENTS,
    payload : newContent
})

export const updateColorMode = (mode) => ({
    type : DARK_MODE,
    payload : mode
})