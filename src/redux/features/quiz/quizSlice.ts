import { quizData } from "@/Home/QuizeData";
import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";

// type defile initialState
type TInitialState = {
  question: typeof quizData;
  currentIndexForQuiz: number;
  userAnswer: (string | null)[];
  isCompletedQuiz: boolean;
};

const initialState: TInitialState = {
  question: quizData,
  currentIndexForQuiz: 0,
  userAnswer: Array(quizData.length).fill(null),
  isCompletedQuiz: false,
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentIndexForQuiz < state.question.length - 1) {
        state.currentIndexForQuiz += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentIndexForQuiz > 0) {
        state.currentIndexForQuiz -= 1;
      }
    },
    completedQuiz: (state) => {
      state.isCompletedQuiz = true;
    },
  },
});
export const { setAnswer, nextQuestion, prevQuestion, completedQuiz } =
  quizSlice.actions;
export default quizSlice.reducer;
