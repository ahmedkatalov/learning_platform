import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  title: string;
  description: string;
  price: string;
  image: string;
  video: string;
}

interface CoursesState {
  courses: Course[];
  isLoading: boolean;
}

const initialState: CoursesState = {
  courses: [],
  isLoading: false,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourseStart(state) {
      state.isLoading = true;
    },
    addCourseSuccess(state, action: PayloadAction<Course>) {
      state.courses.push(action.payload);
      state.isLoading = false;
    },
    addCourseFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { addCourseStart, addCourseSuccess, addCourseFailure } = coursesSlice.actions;

export default coursesSlice.reducer;