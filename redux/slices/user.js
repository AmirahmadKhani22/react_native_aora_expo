import {createSlice} from "@reduxjs/toolkit"

const user = createSlice({
    name: "user",
    initialState: {
        userData: null
    },
    reducers: {
        setUserData: (state , action) => {
            return action.payload
        }
    }
})

export default user.reducer
export const {setUserData} = user.actions
