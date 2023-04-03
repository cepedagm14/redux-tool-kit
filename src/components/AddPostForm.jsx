import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../app/features/post/postSlices";
import { selectAllUsers } from "../app/features/users/usersSlice";

const AddPostForm = () => {
  //states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  //redux
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  //features
  const onTitleChange = (e) => setTitle(e.target.value);
  const oncontentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };


  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  //jsx
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}{" "}
    </option>
  ));

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          onChange={onTitleChange}
          value={title}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          name=""
          id="postAuthor"
          value={userId}
          onChange={onAuthorChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          onChange={oncontentChange}
          value={content}
        />

        <button type="button" disabled={!canSave} onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
