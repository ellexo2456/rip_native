import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { queryReducer } from "./querySlice/querySlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: combineReducers({
        query: queryReducer,
    })
})