import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/user"
import isDataLoaddedReducer from "./slices/dataLoadded"

const store = configureStore({
    reducer: {
        user: userReducer,
        isDataLoadded: isDataLoaddedReducer
    },
})

export default store
