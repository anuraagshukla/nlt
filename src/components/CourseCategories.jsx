
import { useState } from "react";

const courses = [
  {
    name: "B. Tech",
    image:
      "https://nielit-admin.softgen.co.in/images/course_category/1781250599.webp",
  },
  {
    name: "BCA",
    image:
      "https://nielit-admin.softgen.co.in/images/course_category/1781250599.webp",
  },
  {
    name: "Diploma",
    image:
      "https://nielit-admin.softgen.co.in/images/course_category/1781250599.webp",
  },
  {
    name: "M. Tech",
    image:
      "https://nielit-admin.softgen.co.in/images/course_category/1781250599.webp",
  },
  {
    name: "M.Sc.",
    image:
      "https://nielit-admin.softgen.co.in/images/course_category/1781250599.webp",
  },
  {
    name: "MCA",
    image:
      "https://nielit-admin.softgen.co.in/images/course_category/1781250599.webp",
  },
];

function CourseCategories() {
  const [activeIndex, setActiveIndex] = useState(3);

  const activeCourse = courses[activeIndex];

  const changeCourse = (index) => {
    setActiveIndex((index + courses.length) % courses.length);
  };

  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 lg:py-14">
      {/* Heading */}
      <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
        <span className="text-[#b9000b]">Courses</span>{" "}
        <span className="text-[#a66a00]">Categories</span>
      </h2>

      {/* Course Carousel */}
      <div className="mx-auto flex h-[300px] max-w-[1250px] items-stretch gap-2 sm:h-[360px] md:h-[420px]">
        {/* Left Vertical Course Cards */}
        {courses.slice(0, 3).map((course, index) => (
          <button
            key={course.name}
            type="button"
            onClick={() => changeCourse(index)}
            aria-label={`Show ${course.name}`}
            className="flex w-9 shrink-0 items-center justify-center rounded-lg bg-[#dedede] transition-colors hover:bg-[#c9c9c9] sm:w-12"
          >
            <span className="rotate-180 text-sm font-semibold text-gray-800 [writing-mode:vertical-rl]">
              {course.name}
            </span>
          </button>
        ))}

        {/* Main Active Course */}
        <div className="relative min-w-0 flex-1 overflow-hidden rounded-lg bg-gray-800 shadow-md">
          <img
            src={activeCourse.image}
            alt={activeCourse.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Course Details */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-7">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-3xl">
                {activeCourse.name}
              </h3>
              <p className="mt-1 text-sm text-white/90">Courses</p>
            </div>

            <a
              href="#courses"
              className="shrink-0 rounded-lg bg-gray-950 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 sm:px-6"
            >
              View More
            </a>
          </div>
        </div>

        {/* Right Vertical Course Cards */}
        {courses.slice(4).map((course, index) => (
          <button
            key={course.name}
            type="button"
            onClick={() => changeCourse(index + 4)}
            aria-label={`Show ${course.name}`}
            className="flex w-9 shrink-0 items-center justify-center rounded-lg bg-[#dedede] transition-colors hover:bg-[#c9c9c9] sm:w-12"
          >
            <span className="rotate-180 text-sm font-semibold text-gray-800 [writing-mode:vertical-rl]">
              {course.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CourseCategories;
