import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storeAuthentication } from '../../untils/authenticate'
import axios from '../../axios'
import { saveItem, dropItem } from '../../untils/localStorageUntils'
import { disconnectServer, connectServer, authenticate } from '../../socket'

const initialState = {
    account: null,
    isLoggedIn: false
}

export const loginUser = createAsyncThunk(
    'user/login',
    async (account, { rejectWithValue }) => {
        try {
            const data = await axios.post(
                '/api/login-partner',
                {
                    userName: account.userName, password: account.password
                }
            )
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userIsLogin: (state, action) => {
            state.isLoggedIn = true
            state.account = action.payload.account
            // connectServer()
            // authenticate(action.payload.token)
        },
        userLogout: (state, action) => {
            state.isLoggedIn = false
            state.account = null
            dropItem('authenticate')
            dropItem('accountInformation')
            // disconnectServer()
        }

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const data = action.payload.data
                storeAuthentication(data.token)
                state.isLoggedIn = true
                connectServer()
                authenticate(data.token)
                delete data.token
                state.account = { ...data }
                saveItem('accountInformation', data)

            }
        }).addCase(loginUser.rejected, (state, action) => {
            throw action.payload
        })
    }
})

export const { userNotLogin, userIsLogin, userLogout } = userSlice.actions
export default userSlice.reducer