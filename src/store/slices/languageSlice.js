import { createSlice } from '@reduxjs/toolkit'
import langs from '../translation/index'

const initialState = langs.en

export const languageSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        switchLanguage(state, action) {
            if (state._NAME_ === 'VI') {
                state = langs.en
            } else {
                state = langs.vi
            }
            return state
        }
    },
})

export const { switchLanguage } = languageSlice.actions
export default languageSlice.reducer