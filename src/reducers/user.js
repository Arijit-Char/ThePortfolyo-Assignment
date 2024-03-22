import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    loading: true,
}
export const Reducer = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_User_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_User_Success', (state, action) => {
           
            state.loading = false;
            state.user = action.payload;
        })
        .addCase('Get_User_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});
