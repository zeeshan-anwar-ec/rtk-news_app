import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../slice//newsSlice";

const store = configureStore({
	reducer: {
		news: newsReducer,
	},
});

export default store;
