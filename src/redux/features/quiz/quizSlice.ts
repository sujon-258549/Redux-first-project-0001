import { quizeData } from "@/Home/QuizeData";
import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";

// type defile initialState
type TInitialState = {
  question: typeof quizeData;
  currentIndexForQuize: number;
  userAnswer: (string | null)[];
  isCompleted: boolean;
};

const initialState: TInitialState = {
  question: quizeData,
  currentIndexForQuize: 0,
  userAnswer: Array(quizeData.length).fill(null),
  isCompleted: false,
};
export const quizSlice = createSlice({
  name: "quize",
  initialState,
  reducers: {
    setAnswer: (state, actoin) => {
      const { qustionIndex, answer } = actoin.payload;
      state.userAnswer[qustionIndex] = answer;
    },
    nextQuesten: (state) => {
      if (state.currentIndexForQuize < state.question.length - 1) {
        state.currentIndexForQuize += 1;
      }
    },
    prevQuesten: (state) => {
      if (state.currentIndexForQuize < state.question.length + 1) {
        state.currentIndexForQuize -= 1;
      }
    },
  },
});
export const { setAnswer, nextQuesten, prevQuesten } = quizSlice.actions;
export default quizSlice.reducer;
