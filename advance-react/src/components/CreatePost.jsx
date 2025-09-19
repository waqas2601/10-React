import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTiteElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTiteElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = {
      likes: parseInt(reactionsElement.current.value) || 0,
      dislikes: 0, // or another field if you want
    };
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTiteElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your User Id here{" "}
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="title"
          placeholder="Your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Post Title{" "}
        </label>
        <input
          ref={postTiteElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="How are you feeling today?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content{" "}
        </label>
        <textarea
          rows={4}
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactons{" "}
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here{" "}
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by commas (e.g. food, travel, coding)"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
