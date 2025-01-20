import {createSlice} from "@reduxjs/toolkit"

const user = createSlice({
    name: "user",
    initialState: {
        userData: null
    },
    reducers: {
        setUserData: (state , action) => {
            console.log("state" , state)
            console.log("action" , action)
            return action.payload
        }
    }
})

export default user.reducer
export const {setUserData} = user.actions
