import { data, redirect } from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your User Id here{" "}
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by commas (e.g. food, travel, coding)"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  // Fix types
  if (postData.tags) {
    postData.tags = postData.tags.split(",").map((tag) => tag.trim());
  }
  if (postData.reactions) {
    postData.reactions = Number(postData.reactions);
  }
  if (postData.userId) {
    postData.userId = Number(postData.userId);
  }

  try {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`Failed: ${response.status}`);
    }

    const post = await response.json();
    console.log("Post added:", post);

    return redirect("/");
  } catch (err) {
    console.error("Error posting:", err);
    throw err;
  }
}

export default CreatePost;
