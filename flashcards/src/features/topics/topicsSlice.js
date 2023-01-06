import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  }
});
