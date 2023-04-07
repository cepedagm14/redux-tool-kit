import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtom from "./ReactionButtom";

const PostsExerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButtom post={post} />
    </article>
  );
};

export default PostsExerpt;
