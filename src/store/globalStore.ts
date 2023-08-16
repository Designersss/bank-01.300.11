import {combineReducers} from "@reduxjs/toolkit";
import {api} from "./api/api.ts";
import {userSlices} from "../slices/user-slices/userSlices.ts";

export const globalStore = combineReducers({
    user: userSlices.reducer,
    [api.reducerPath]: api.reducer
})