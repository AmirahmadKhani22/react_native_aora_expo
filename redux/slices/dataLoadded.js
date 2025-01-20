import {createSlice} from "@reduxjs/toolkit"

const dataLoading = createSlice({
    name: "isDataLoadded",
    initialState: false,
    reducers: {
        setIsDataLoadded: (state , action) => {
            return action.payload
        }
    }
})

export const {setIsDataLoadded} = dataLoading.actions
export default dataLoading.reducer
