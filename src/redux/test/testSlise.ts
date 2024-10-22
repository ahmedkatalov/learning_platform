import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuestionsState {
  questions: Question[];
}

const loadQuestionsFromLocalStorage = (): Question[] => {
  const storedQuestions = localStorage.getItem('questions');
  return storedQuestions ? JSON.parse(storedQuestions) : [];
};

const saveQuestionsToLocalStorage = (questions: Question[]) => {
  localStorage.setItem('questions', JSON.stringify(questions));
};

const initialState: QuestionsState = {
  questions: loadQuestionsFromLocalStorage(),
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
      saveQuestionsToLocalStorage(state.questions);
    },
    deleteQuestion: (state,  action: PayloadAction<number>) =>{
        state.questions = state.questions.filter((test) => test.id !== action.payload)
    },
    clearQuestions: (state) => {
      state.questions = [];
      localStorage.removeItem('questions');
    },
  },
});

export const { addQuestion, clearQuestions, deleteQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;