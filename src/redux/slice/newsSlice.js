import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=620ca7cdf5ac4e91935dccef8e5c8e0b";

// Initial State
const initialState = {
  posts: [],
  searchedNews:[],
  loading: false,
  error: undefined,
};

// Action
export const fetchNews = createAsyncThunk("news/fetch", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const searchArticles = createAsyncThunk("news/search", async (url) => {
	const response = await axios.get(url);
	return response.data;
});


const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    // Pending
    builder.addCase(fetchNews.pending, (state, action) => {
      state.loading = true;
    });
    // Fullfilled
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });

    // Rejected
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });


    // Article Searching
    // Pending
		builder.addCase(searchArticles.pending, (state, action) => {
			state.loading = true;
		});
		// Fullfilled
		builder.addCase(searchArticles.fulfilled, (state, action) => {
			state.loading = false;
			state.searchedNews = [action.payload];
		});

		// Rejected
		builder.addCase(searchArticles.rejected, (state, action) => {
			state.loading = false;
			state.searchedNews = [];
			state.error = action.payload;
		});
  },
});

// Generate Reducer
const postsReducer = newsSlice.reducer;
export default postsReducer;
