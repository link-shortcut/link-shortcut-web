import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function RootLayout({ selectedMenuId }) {
  return (
    <>
      <div className="min-h-screen dark:bg-gray-700">
        <Header selectedMenuId={selectedMenuId} />
        <div className="flex justify-center px-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
