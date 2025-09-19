import { useContext } from "react";

import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="post-list">
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
};
export default PostList;
