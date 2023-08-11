import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;
console.log("api key>>>",apiKey);
const homePageUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`;
const businessHeadLinesUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
const techCrunchHeadLinesUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

// Initial State
const initialState = {
  news: [],
  searchedNews: [],
  loading: false,
  error: undefined,
};

// Action
// Action for home page
export const fetchNews = createAsyncThunk("news/fetch", async () => {
  const response = await axios.get(homePageUrl);
  return response.data;
});

// Action for business page
export const fetchBusinessNews = createAsyncThunk(
  "news/fetchBusiness",
  async () => {
    const response = await axios.get(businessHeadLinesUrl);
    return response.data;
  }
);

// Action for tech-crunch page
export const fetchTechCrunhNews = createAsyncThunk(
  "news/fetchTechCrunch",
  async () => {
    const response = await axios.get(techCrunchHeadLinesUrl);
    return response.data;
  }
);

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
      state.news = action.payload;
    });

    // Rejected
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.payload;
    });

    // Business
    // Pending
    builder.addCase(fetchBusinessNews.pending, (state, action) => {
      state.loading = true;
    });

    // Fullfilled
    builder.addCase(fetchBusinessNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });

    // Rejected
    builder.addCase(fetchBusinessNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.payload;
    });

    // Tech Crunch
    // Pending
    builder.addCase(fetchTechCrunhNews.pending, (state, action) => {
      state.loading = true;
    });

    // Fullfilled
    builder.addCase(fetchTechCrunhNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });

    // Rejected
    builder.addCase(fetchTechCrunhNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
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
const newsReducer = newsSlice.reducer;
export default newsReducer;
