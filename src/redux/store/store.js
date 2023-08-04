import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice//newsSlice";

const store = configureStore({
	reducer: {
		posts: postsReducer,
	},
});

export default store;
