import { quizData } from "@/Home/QuizeData";
import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";

// type defile initialState
type TInitialState = {
  question: typeof quizData;
  currentIndexForQuiz: number;
  userAnswer: (string | null)[];
  isCompleted: boolean;
};

const initialState: TInitialState = {
  question: quizData,
  currentIndexForQuiz: 0,
  userAnswer: Array(quizData.length).fill(null),
  isCompleted: false,
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
  },
});
export const { setAnswer, nextQuestion, prevQuestion } = quizSlice.actions;
export default quizSlice.reducer;
