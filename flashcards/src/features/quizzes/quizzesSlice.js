import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

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

export const addQuizForTopicId = (payload) => {
  const { topicId, id } = payload;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(payload));
    dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
  };
};

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
