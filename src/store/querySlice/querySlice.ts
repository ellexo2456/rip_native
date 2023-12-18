import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    searchQuery: string,
}

const initialState: InitialState = {
    searchQuery: '',
}

const querySlice = createSlice({
    name: "query",
    initialState: initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string | null>) {
            if (action.payload !== null) {
                state.searchQuery = action.payload;
            }
        }
    }
})

export const { actions: queryAction, reducer: queryReducer } = querySlice;