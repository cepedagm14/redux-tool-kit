import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPost } from "../app/features/post/postSlices";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const renderedPost = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostList;
