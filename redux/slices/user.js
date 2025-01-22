import {createSlice} from "@reduxjs/toolkit"

const user = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUserData: (state , action) => {
            return action.payload
        },
        setUserNoData: (state , action) => {
            return null
        },
    }
})

export const {setUserData , setUserNoData} = user.actions
export default user.reducer
