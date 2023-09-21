import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import CreateUrl from "./routes/CreateUrl";
import ExpireUrl from "./routes/ExpireUrl";
import GetUrlInfo from "./routes/GetUrlInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout selectedMenuId="createURL" />,
    children: [{ path: "/", element: <CreateUrl /> }],
  },
  {
    path: "/expire",
    element: <RootLayout selectedMenuId="expireURL" />,
    children: [{ path: "/expire", element: <ExpireUrl /> }],
  },
  {
    path: "/:shortenPath/info",
    element: <RootLayout selectedMenuId="getURLInfo" />,
    children: [
      {
        path: "/:shortenPath/info",
        element: <GetUrlInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
