import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./features/post/postSlices";
import { usersSlice } from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  },
});
