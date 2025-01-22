import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/user"
import authStatusReducer from "./slices/authStatus"

const store = configureStore({
    reducer: {
        user: userReducer,
        authStatus: authStatusReducer
    },
})

export default store
