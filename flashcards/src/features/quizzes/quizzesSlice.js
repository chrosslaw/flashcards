import { createSlice } from "@reduxjs/toolkit";

export const createNewQuiz = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: payload.name,
      topicId: payload.topicId,
      cardIds: [payload.cardIds],
      id: payload.id
    });
  };
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardsId: []
      };
    }
  }
});

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
