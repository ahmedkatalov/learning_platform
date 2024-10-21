import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./role/roleSlice";
import coursesReducer from "./newCourse/coursesSlice";


const store = configureStore({
    reducer: {
        role: roleReducer,
        courses: coursesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store