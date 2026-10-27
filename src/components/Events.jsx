
const events = [
  {
    day: "30",
    month: "June 2026",
    time: "09:00 AM",
    title: "Another great event",
  },
  {
    day: "17",
    month: "June 2026",
    time: "08:00 AM",
    title: "Annual Technical Seminar on Emerging Technologies",
  },
];

function Events() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-12 md:px-5 md:py-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-10">
        {/* Left side */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            <span className="text-[#b5121b]">Upcoming</span>{" "}
            <span className="text-[#a16a08]">Events</span>
          </h2>

          <div className="mt-4">
            <a
              href="#all-events"
              className="inline-flex items-center gap-3 rounded-md border-2 border-red-400 bg-[#bd000b] px-7 py-3 text-lg font-semibold text-white transition hover:bg-red-800"
            >
              View All Events <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Event image */}
          <div className="mt-7 flex min-h-[300px] items-center justify-center sm:min-h-[400px]">
            <img
              src="https://nielit.softgen.co.in/Images/event.webp"
              alt="Upcoming NIELIT events"
              className="h-[300px] w-full max-w-[480px] object-contain sm:h-[420px]"
            />
          </div>
        </div>

        {/* Right side: Event cards */}
        <div className="min-w-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.day}
                className="flex min-h-[355px] flex-col bg-white p-6 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-5xl font-bold leading-none text-[#b5121b]">
                      {event.day}
                    </h3>

                    <p className="mt-3 font-medium text-black">
                      {event.month}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-2xl font-bold leading-none text-black"
                  >
                    ⋮
                  </span>
                </div>

                <div className="mt-10 flex-1">
                  <p className="text-base text-black">{event.time}</p>

                  <h4 className="mt-3 text-lg leading-6 text-[#b5121b]">
                    {event.title}
                  </h4>
                </div>

                <a
                  href="#event-details"
                  className="mt-6 flex items-center justify-center gap-2 rounded-md bg-[#bd000b] px-4 py-3 text-lg font-semibold text-white transition hover:bg-red-800"
                >
                  View More <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-500 pt-7 text-center">
            <p className="font-medium leading-6 text-black">
              Stay updated on the latest events and conferences. Discover
              upcoming events and explore the happenings!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
