
import { useState } from "react";

const reasons = [
  {
    title: "Tech-driven collaborative and fluid learning environments",
    description:
      "NIELIT University provides modern laboratories, smart classrooms and collaborative learning environments to help students develop practical and industry-relevant skills.",
    image:
      "https://nielit.softgen.co.in/Images/smart-lab.webp",
  },
  {
    title: "360-degree support in building a personal brand",
    description:
      "Students learn with practical lab sessions, experienced faculty members and hands-on training designed to improve their technical knowledge.",
    image:
      "https://nielit.softgen.co.in/Images/smart-lab.webp",
  },
  {
    title: "Career Advancement",
    description:
      "Career-focused courses, practical projects and skill development help students prepare for professional opportunities.",
    image:
      "https://nielit.softgen.co.in/Images/smart-lab.webp",
  },
];

function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#eaf4ff] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-8 text-center text-3xl font-bold">
          <span className="text-[#b9000b]">Why Choose</span>{" "}
          <span className="text-[#a66a00]">Us?</span>
        </h2>

        {/* Accordion */}
        <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
          {reasons.map((reason, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={reason.title} className="border-b border-gray-200 last:border-b-0">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold transition-colors ${
                    isOpen
                      ? "bg-[#eaf4ff] text-blue-800"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{reason.title}</span>

                  <span className="ml-4 text-blue-700">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {isOpen && (
                  <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center">
                    <p className="flex-1 text-sm leading-7 text-gray-700">
                      {reason.description}
                    </p>

                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="h-32 w-full rounded-md object-cover md:w-52"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
