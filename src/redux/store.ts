import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./role/roleSlice";
import questionReducer from "./test/testSlise"
const store = configureStore({
  reducer: {
    role: roleReducer,
    questions: questionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
