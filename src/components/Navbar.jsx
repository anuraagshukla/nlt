
const navLinks = [
  "About NDU",
  "Campuses",
  "Academics",
  "Research",
  "Admissions",
  "Placements",
  "Media",
  "Career",
  "Contact Us",
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 flex min-h-[76px] items-center gap-x-5 bg-gray-100 px-4 py-2 shadow-sm lg:gap-x-7 lg:px-6">
      {/* University Logo */}
      <a href="/" className="flex shrink-0 items-center">
        <img
          src="https://nielit.softgen.co.in/ndu-logo.png"
          alt="NIELIT University"
          className="h-[58px] w-[145px] object-contain"
        />
      </a>

      {/* Home Link */}
      <a
        href="/"
        aria-label="Home"
        className="shrink-0 text-xl font-bold text-red-800 hover:text-red-600"
      >
        ⌂
      </a>

      {/* Navigation Links */}
      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-2">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="whitespace-nowrap text-sm text-gray-700 transition-colors hover:text-red-800 lg:text-base"
          >
            {link}
            <span className="ml-1 font-semibold">+</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
