import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice";
import { authReducer } from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

export default store;
