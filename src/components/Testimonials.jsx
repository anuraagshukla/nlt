
import { useState } from "react";

const testimonials = [
  {
    initials: "SS",
    name: "Sneha Singh",
    course: "M. Tech(Data Engineering)",
    message:
      "The placement cell is incredibly active and has strong industry connections. I secured my dream internship thanks to the guidance and networking opportunities provided by the university.",
  },
  {
    initials: "AP",
    name: "Amit Patel",
    course: "M. Tech(IoT and Sensor Systems)",
    message:
      "The placement cell is incredibly active and has strong industry connections. I secured my dream internship thanks to the guidance and networking opportunities provided by the university.",
  },
  {
    initials: "VG",
    name: "Vikas Gupta",
    course: "M. Tech(Artificial Intelligence)",
    message:
      "The placement cell is incredibly active and has strong industry connections. I secured my dream internship thanks to the guidance and networking opportunities provided by the university.",
  },
  {
    initials: "AG",
    name: "Aman Giri",
    course: "M. Tech(Artificial Intelligence)",
    message:
      "The placement cell is incredibly active and has strong industry connections. I secured my dream internship thanks to the guidance and networking opportunities provided by the university.",
  },
];

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const previous = () => {
    setStartIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setStartIndex((current) => (current + 1) % testimonials.length);
  };

  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(startIndex + offset) % testimonials.length]
  );

  return (
    <section className="bg-[#f8f9fb] px-5 pb-12 pt-14 md:px-5 md:pb-12 md:pt-14">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-10 text-center text-4xl font-bold md:mb-12 md:text-5xl">
          <span className="text-[#b5121b]">Students</span>{" "}
          <span className="text-[#a16a08]">Say</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {visibleTestimonials.map((student) => (
            <article
              key={student.initials}
              className="min-h-[360px] border border-[#e1e5eb] bg-white p-6 md:p-7"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-[#fff0b3] bg-[#d1d5db] text-2xl font-bold text-black">
                  {student.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold leading-tight text-[#202c3d] md:text-[28px]">
                    {student.name}
                  </h3>

                  <p className="mt-1 text-base leading-6 text-black">
                    {student.course}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-lg leading-[1.75] text-[#171717]">
                {student.message}
              </p>
            </article>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="mt-12 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={previous}
            className="font-medium text-black transition hover:text-[#b5121b]"
          >
            <span className="mr-3 text-xl">←</span> PREV
          </button>

          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Play testimonials" : "Pause testimonials"}
            className="flex h-11 w-11 items-center justify-center bg-[#ffb900] text-xl text-white"
          >
            {isPaused ? "▶" : "❚❚"}
          </button>

          <button
            type="button"
            onClick={next}
            className="font-medium text-black transition hover:text-[#b5121b]"
          >
            NEXT <span className="ml-3 text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
