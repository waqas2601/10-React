import { useContext, useEffect, useState } from "react";

import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <div className="post-list">
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post}></Post>)}
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </>
  );
};
export default PostList;
