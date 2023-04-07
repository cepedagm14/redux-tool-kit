import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("post/fetchPost", async () => {
  try {
    const response = await axios.get(POST_URL);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const addNewPost = createAsyncThunk(
  "post/addNewPost",
  async (initialPost) => {
    try {
      const response = await axios.post(POST_URL, initialPost);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
