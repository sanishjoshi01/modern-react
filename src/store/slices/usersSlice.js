import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../index";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload; //payload automatically contains data from thunk function fetchUsers
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error; //error is automatically added to action by thunk functin
        });
    }
});

export const usersReducer = usersSlice.reducer;