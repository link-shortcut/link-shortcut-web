import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./App.css";

export default function RootLayout({ selectedMenuId }) {
  return (
    <>
      <div className="App min-h-screen dark:bg-gray-700">
        <Header selectedMenuId={selectedMenuId} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
