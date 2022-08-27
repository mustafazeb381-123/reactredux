import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { postApi } from '../components/services/post'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
    
})





setupListeners(store.dispatch)