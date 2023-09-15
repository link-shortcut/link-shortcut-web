export default function Header() {
  return (
    <div class="header-2 ">
      <nav class="bg-white py-2 md:py-4 dark:bg-gray-800">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div class="flex justify-between items-center">
            <a
              href="/"
              class="font-bold text-xl text-indigo-600 dark:text-indigo-400"
            >
              Link Shortcut
            </a>
            <button
              class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            ></button>
          </div>

          <div
            class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <a
              href="/"
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              단축 URL 생성
            </a>
            <a
              href="/expire"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 dark:text-gray-300"
            >
              URL 만료하기
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}