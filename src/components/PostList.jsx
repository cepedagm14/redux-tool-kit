import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostsStatus,
  getPostsError,
} from "../app/features/post/postSlices";
import PostsExerpt from "./PostsExerpt";
import { fetchPosts } from "../app/features/post/thunks";

const PostList = () => {
  const posts = useSelector(selectAllPost);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  }

  if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExerpt key={post.id} post={post} />
    ));
  }
  
  if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
