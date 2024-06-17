import MenuList from "./MenuList";

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
  <a
    href="/"
    className="font-bold text-xl text-indigo-600 dark:text-indigo-400 hover:cursor-pointer"
  >
    Link Shortcut
  </a>
);
