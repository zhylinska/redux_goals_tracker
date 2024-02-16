import {configureStore} from "@reduxjs/toolkit";
import goalReducer from "./reducer/goalReducer";

const store = configureStore({
    reducer: {
        goals: goalReducer,
    }
})

export default store



