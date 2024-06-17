import MenuList from "./MenuList";
import LogoImage from "../assets/logo.png";

export default function Header({ selectedMenuId }) {
  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4 dark:bg-gray-800">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <Logo />

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <MenuList selectedMenuId={selectedMenuId} />
          </div>
        </div>
      </nav>
    </div>
  );
}

const Logo = () => (
  <a href="/">
    <img src={LogoImage} className="h-10" alt="Link Shortcut 로고" />
  </a>
);
