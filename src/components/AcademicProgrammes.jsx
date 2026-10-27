
const programmes = [
  {
    shortName: "BCA",
    title: "Bachelor of Computer Applications",
    image: "https://nielit.softgen.co.in/courses/1.webp",
  },
  {
    shortName: "M.Sc.",
    title: "Computer Science (Data Science)",
    image: "https://nielit.softgen.co.in/courses/1.webp",
  },
  {
    shortName: "B. Tech",
    title: "Computer Science and Engineering",
    image: "https://nielit.softgen.co.in/courses/1.webp",
  },
  {
    shortName: "Diploma",
    title: "Computer Science and Engineering",
    image: "https://nielit.softgen.co.in/courses/1.webp",
  },
];

function AcademicProgrammes() {
  return (
    <section className="bg-[#e8f1f9] px-5 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-10 text-center text-3xl font-bold md:mb-12 md:text-5xl">
          <span className="text-[#b5121b]">Academic</span>{" "}
          <span className="text-[#a16a08]">Programmes</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {programmes.map((programme) => (
            <article
              key={programme.shortName}
              className="overflow-hidden bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-[210px] overflow-hidden md:h-[211px]">
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="flex items-center gap-3 text-lg font-medium text-[#273b53]">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#c83b2d]" />
                  {programme.shortName}
                </h3>

                <p className="mt-4 min-h-[56px] text-lg leading-7 text-[#42566d]">
                  {programme.title}
                </p>

                <div className="mt-4 border-t border-gray-200 pt-4">
                  <a
                    href="#programmes"
                    className="text-lg font-medium text-[#b5121b] transition hover:text-red-800"
                  >
                    View More...
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#programmes"
            className="inline-flex items-center gap-3 rounded-md border-2 border-red-400 bg-[#bd000b] px-8 py-3.5 text-lg font-semibold text-white shadow-sm transition hover:bg-red-800"
          >
            View All Programs
            <span aria-hidden="true" className="text-xl">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AcademicProgrammes;
