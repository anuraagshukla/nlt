
function Header() {
  return (
    <header className="bg-[#b9000b] text-white">
      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 text-sm lg:flex-nowrap">
        <p className="shrink-0 whitespace-nowrap font-semibold">
          Tuesday, 27 October 2026
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <a
            href="#main-content"
            className="whitespace-nowrap hover:underline"
          >
            ↪ Skip to main content
          </a>

          <button
            type="button"
            className="whitespace-nowrap hover:underline"
          >
            ♿ Screen Reader
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            className="whitespace-nowrap rounded border border-red-400 px-2 py-1 hover:bg-red-800"
          >
            ☾ Dark Mode
          </button>

          <div className="flex">
            <button
              type="button"
              aria-label="Decrease font size"
              className="border border-red-400 px-2 py-1 hover:bg-red-800"
            >
              A-
            </button>

            <button
              type="button"
              aria-label="Normal font size"
              className="border-y border-r border-red-400 px-2 py-1 hover:bg-red-800"
            >
              A
            </button>

            <button
              type="button"
              aria-label="Increase font size"
              className="border-y border-r border-red-400 px-2 py-1 hover:bg-red-800"
            >
              A+
            </button>
          </div>

          <label className="relative">
            <span className="sr-only">Select language</span>
            <select
              defaultValue="English"
              className="cursor-pointer appearance-none rounded border border-red-400 bg-[#b9000b] py-1 pl-2 pr-6 outline-none hover:bg-red-800 focus:ring-1 focus:ring-white"
            >
              <option value="English" className="bg-white text-black">
                English
              </option>
              <option value="Hindi" className="bg-white text-black">
                Hindi
              </option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              ▾
            </span>
          </label>

          <div className="flex items-center gap-1 whitespace-nowrap font-semibold">
            <span>Government of India</span>
            <img
              className="size-5 object-contain"
              src="https://nielit.softgen.co.in/Images/government-logo.png"
              alt="Government of India emblem"
            />
          </div>
        </div>
      </div>

      {/* Sitemap and Login Row */}
      <div className="flex items-center justify-between border-t border-red-800/50 px-4 py-1">
        <a href="#sitemap" className="text-sm hover:underline">
          ♟ Sitemap
        </a>

        <button
          type="button"
          className="rounded bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-200"
        >
          Student Login
        </button>
      </div>
    </header>
  );
}

export default Header;
