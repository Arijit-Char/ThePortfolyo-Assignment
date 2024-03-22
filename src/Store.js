import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducers/user";
const store = configureStore({
    reducer: {
        user: Reducer,
    }
});
export default store;
