import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import counterReducer from "../reduser/counter";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        counter: counterReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch