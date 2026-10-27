
import { useState } from "react";

const placementImages = [
  "https://nielit-admin.softgen.co.in/images/placement_overview/1786093570_6a75a002ac5fb.webp",
  "https://nielit-admin.softgen.co.in/images/placement_overview/1786093570_6a75a002ac814.webp",
];

const placementStats = [
  {
    number: "1201+",
    label: "Placement Offers",
  },
  {
    number: "501+",
    label: "Companies Visited for Recruitment",
  },
  {
    number: "51",
    suffix: "LPA",
    label: "Highest National Package Offered",
    dark: true,
  },
  {
    number: "91",
    suffix: "CR",
    label: "Highest International Package Offered",
  },
];

const packageHighlights = [
  { number: "31", suffix: "LPA", companies: "30+ Companies" },
  { number: "41", suffix: "LPA", companies: "50+ Companies" },
  { number: "51", suffix: "LPA", companies: "100+ Companies" },
  { number: "71", suffix: "LPA", companies: "300+ Companies" },
];

function Placements() {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? placementImages.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === placementImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-5 py-12 lg:grid-cols-[1fr_1.12fr] lg:gap-14 lg:px-5 lg:py-12">
        {/* Left: Placement images and slider controls */}
        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-3">
            {[0, 1].map((position) => {
              const imageIndex =
                (activeImage + position) % placementImages.length;

              return (
                <div
                  key={position}
                  className="h-[250px] overflow-hidden rounded-lg sm:h-[320px] lg:h-[370px]"
                >
                  <img
                    src={placementImages[imageIndex]}
                    alt={`Placement activity ${imageIndex + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous placement images"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xl shadow-sm transition hover:bg-gray-200"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next placement images"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl text-white shadow-md transition hover:bg-red-700"
            >
              ▶
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next placement image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xl shadow-sm transition hover:bg-gray-200"
            >
              ›
            </button>
          </div>
        </div>

        {/* Right: Placement statistics */}
        <div className="min-w-0">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-[#b5121b]">Placements</span>{" "}
            <span className="text-[#a16a08]">Overview</span>
          </h2>

          <p className="mt-1 text-base text-black sm:text-lg">
            The World's Leading Companies Hire Our Talent
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {placementStats.map((stat) => (
              <div
                key={stat.label}
                className={`min-h-[155px] rounded-2xl p-4 ${
                  stat.dark
                    ? "bg-[#1b1b1b] text-white"
                    : "bg-[#f4f4f4] text-black"
                }`}
              >
                <h3 className="whitespace-nowrap text-2xl font-extrabold sm:text-3xl">
                  {stat.number}
                  {stat.suffix && (
                    <span className="ml-1 text-sm font-bold">
                      {stat.suffix}
                    </span>
                  )}
                </h3>

                <p className="mt-4 text-sm leading-5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4">
            {packageHighlights.map((item, index) => (
              <div
                key={item.number}
                className={`min-h-[105px] px-3 first:pl-0 ${
                  index !== 0 ? "border-l border-gray-300" : ""
                }`}
              >
                <h3 className="whitespace-nowrap text-3xl font-extrabold leading-none">
                  {item.number}
                  <span className="ml-1 text-sm font-bold">
                    {item.suffix}
                  </span>
                </h3>

                <p className="mt-2 text-sm leading-5">
                  Package Offered by
                </p>

                <p className="text-sm font-bold leading-5">
                  {item.companies}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-12 bg-[#e8f2fb]" />
    </section>
  );
}

export default Placements;
