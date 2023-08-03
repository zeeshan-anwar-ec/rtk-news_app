import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=620ca7cdf5ac4e91935dccef8e5c8e0b";

// Initial State
const initialState = {
  posts: [],
  loading: false,
  error: undefined,
};

// Action
export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});


const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    // Pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    // Fullfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });

    // Rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

// Generate Reducer
const postsReducer = postsSlice.reducer;
export default postsReducer;
