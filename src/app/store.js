import { configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from '../features/auth/authSlice'
export const store  = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        autk:authReducer
    },
    middleware:getDefaultMiddleware=>
        getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: true
    
})