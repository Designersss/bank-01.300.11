import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../types/user-types.ts";

const initialState = {
    user:<IUser> {}
}
export const userSlices = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {reducer, actions} = userSlices