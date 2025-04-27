import {createSlice} from "@reduxjs/toolkit"

const authStatus = createSlice({
    name: "authStatus",
    initialState: "unauthorized",
    reducers: {
        setAuthStatusUnauthorized: (state , action) => {
            return "unauthorized"
        },
        setAuthStatusAuthorized: (state , action) => {
            return "authorized"
        }
    }
})

export const {
    setAuthStatusUnauthorized, 
    setAuthStatusAuthorized,
} = authStatus.actions
export default authStatus.reducer
