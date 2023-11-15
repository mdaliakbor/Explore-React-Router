import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./Error-page";
import Contact from "./contacts";
import Home from "./home/Home";
import Users from "./users/Users";
import UserDetails from "./users/UserDetails";
import Posts from "./posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () =>
          fetch("https://json-placeholder.mock.beeceptor.com/users"),
      },
      {
        path: "user/:userId",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(
            `https://json-placeholder.mock.beeceptor.com/users/${params.userId}`
          ),
      },
      {
        path: "posts",
        element: <Posts></Posts>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
