import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPost } from "../app/features/post/postSlices";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtom from "./ReactionButtom";

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPost = orderedPost.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionsButtom post={post} />
      </p>
    </article>
  ));
console.log(orderedPost);
  return (
    <section>
      <h2>Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostList;
