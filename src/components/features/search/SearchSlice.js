import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const searchItem = createAsyncThunk(
        "search/searchItem",
        async (state) => {
                const response = await fetch(`https://www.reddit.com/search.json?q=${state}`)
                const json = response.json();
                console.log(json);
                return json;
        }
)

const searchSlice = createSlice({
        name: "search",
        initialState: {
                search: [],
                isLoading: false,
                isError: false
        },
        extraReducers: (builder) => {
                builder
                        .addCase(searchItem.pending, (state) => {
                                state.isLoading = true;
                                state.isError = false;
                        })
                        .addCase(searchItem.fulfilled, (state, action) => {
                                state.isLoading = false;
                                state.search = action.payload;
                                state.isError = false;
                        })
                        .addCase(searchItem.pending, (state) => {
                                state.isLoading = false;
                                state.isError = true;
                        })
        }
})

export const selectSearchItem = state => state.search.search;
export const selectIsLoading = state => state.isLoading;
export const selectIserror = state => state.isError;
export const searchReducer = searchSlice.reducer;