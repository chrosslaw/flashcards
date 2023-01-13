import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const addQuizForTopicId = (payload) => {
  const { topicId, quizId } = payload;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(payload));
    dispatch(addQuizId({ topicId: topicId, quizId: quizId }));
  };
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
