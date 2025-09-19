import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      <div className="post-list">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export const postLoaders = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Fetch aborted ");
      } else {
        console.error("Fetch error:", err);
        setFetching(false);
      }
    });
};

export default PostList;
