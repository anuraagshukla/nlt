
import { useState } from "react";

const recentEvents = [
  {
    date: "22.06.26",
    title: "Annual Technical Seminar on Emerging Technologies",
    image: "https://nielit.softgen.co.in/Images/event.webp",
  },
  {
    date: "17.06.26",
    title: "Annual Technical Seminar on Emerging Technologies",
    image: "https://nielit.softgen.co.in/courses/1.webp",
  },
  {
    date: "30.06.26",
    title: "Student Workshop and Technical Activities",
    image: "https://nielit.softgen.co.in/Images/event.webp",
  },
];

function RecentEvents() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? recentEvents.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % recentEvents.length);
  };

  const visibleEvents = [
    recentEvents[activeIndex],
    recentEvents[(activeIndex + 1) % recentEvents.length],
  ];

  return (
    <section className="overflow-hidden bg-[#bd000b] px-5 py-10 text-white md:px-8 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left: Recent event cards */}
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold md:text-4xl">
                Recent <span className="text-yellow-400">Events</span>
              </h2>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous events"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next events"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-300"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {visibleEvents.map((event, index) => (
                <article
                  key={`${event.date}-${activeIndex}-${index}`}
                  className="overflow-hidden rounded-sm bg-white text-gray-900 shadow-md"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                      {event.date}
                    </span>
                  </div>

                  <div className="min-h-[88px] p-3">
                    <h3 className="text-sm font-bold leading-5">
                      {event.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2">
                {recentEvents.map((event, index) => (
                  <button
                    key={event.date}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show event ${index + 1}`}
                    className={`h-1.5 w-6 rounded-full ${
                      activeIndex === index ? "bg-yellow-400" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <a
                href="#all-events"
                className="rounded bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300"
              >
                View All Events →
              </a>
            </div>
          </div>

          {/* Right: Official NIELIT India map image */}
          <div className="flex min-h-[280px] items-center justify-center lg:min-h-[350px]">
            <img
              src="https://nielit.softgen.co.in/Images/nielit-map.webp"
              alt="NIELIT map of India"
              className="h-auto max-h-[350px] w-full max-w-[420px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentEvents;
