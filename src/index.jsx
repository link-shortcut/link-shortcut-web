import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import CreateUrl from "./pages/CreateUrl";
import ExpireUrl from "./pages/ExpireUrl";
import GetUrlInfo from "./pages/GetUrlInfo";
import NotFoundRedirect from "./pages/NotFoundRedirect";

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
  {
    path: "*",
    element: <NotFoundRedirect />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
