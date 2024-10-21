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

// Функция для загрузки вопросов из localStorage
const loadQuestionsFromLocalStorage = (): Question[] => {
  const storedQuestions = localStorage.getItem('questions');
  return storedQuestions ? JSON.parse(storedQuestions) : [];
};

// Функция для сохранения вопросов в localStorage
const saveQuestionsToLocalStorage = (questions: Question[]) => {
  localStorage.setItem('questions', JSON.stringify(questions));
};

const initialState: QuestionsState = {
  questions: loadQuestionsFromLocalStorage(), // Загружаем вопросы при инициализации
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
      saveQuestionsToLocalStorage(state.questions); // Сохраняем вопросы в localStorage при добавлении
    },
    deleteQuestion: (state,  action: PayloadAction<number>) =>{
        state.questions = state.questions.filter((test) => test.id !== action.payload)
    },
    clearQuestions: (state) => {
      state.questions = [];
      localStorage.removeItem('questions'); // Очищаем localStorage при удалении всех вопросов
    },
  },
});

export const { addQuestion, clearQuestions, deleteQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
