import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostListProvider from "./store/post-list-store.jsx";

import PostList from "./components/PostList.jsx";
import { postLoaders } from "./components/PostList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoaders },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostListProvider>
      {" "}
      <RouterProvider router={router} />
    </PostListProvider>
  </StrictMode>
);
