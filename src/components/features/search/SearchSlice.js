import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchSearchItem = createAsyncThunk(
        "search/searchItem",
        async (term) => {
                const response = await fetch(`https://www.reddit.com/search.json?q=${term}`)
                const json = response.json();
                console.log(json);
                return json;
        }
)

const searchSlice = createSlice({
        name: "search",
        initialState: {
                search: {},
                isLoading: false,
                isError: false
        },
        reducer: {},
        extraReducers: (builder) => {
                builder
                        .addCase(fetchSearchItem.pending, (state) => {
                                state.isLoading = true;
                                state.isError = false;
                        })
                        .addCase(fetchSearchItem.fulfilled, (state, action) => {
                                state.isLoading = false;
                                state.search = action.payload;
                                state.isError = false;
                        })
                        .addCase(fetchSearchItem.pending, (state) => {
                                state.isLoading = false;
                                state.isError = true;
                        })
        }
})


export const selectSearchItem = state => state.search.search;
export const selectIsLoading = state => state.isLoading;
export const selectIsError = state => state.isError;
export const searchReducer = searchSlice.reducer;