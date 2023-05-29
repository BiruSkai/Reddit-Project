import {configureStore} from "@reduxjs/toolkit";
import { searchReducer } from "./components/features/search/SearchSlice";

export const store = configureStore({
        reducer: {
                search: searchReducer,
        }
})