
function UniversityIntro() {
  return (
    <section className="w-full bg-[#eaf4ff] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

        {/* Left Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://nielit.softgen.co.in/about/about.webp"
            alt="NIELIT University students and activities"
            className="h-auto w-full max-w-[520px] object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="mb-6 text-4xl font-bold text-[#b9000b] md:text-5xl">
            NIELIT <span className="text-[#a66a00]">University</span>
          </h2>

          <p className="mb-5 text-justify text-[16px] leading-8 text-slate-700">
            Welcome to NIELIT, now a Deemed to be University under the
            Distinct Category as per the UGC (Institutions Deemed to be
            Universities) Regulations, 2023. It is the only University
            under the Ministry of Electronics and Information Technology.
          </p>

          <p className="mb-6 text-justify text-[16px] leading-8 text-slate-700">
            It has its main campus at Ropar, Punjab, 40 kilometres from
            Chandigarh on the Chandigarh–Jalandhar National Highway.
            NIELIT Deemed University has constituent centres at Agartala,
            Aizawl, Ajmer, Aurangabad, Calicut, Imphal, Itanagar, Kohima,
            Gorakhpur, Patna and Srinagar.
          </p>

          {/* Quick Links */}
          <div className="mb-7 grid grid-cols-2 gap-4">
            <a
              href="#technical-courses"
              className="font-medium text-slate-700 transition-colors hover:text-red-700"
            >
              <span className="mr-2 text-red-600">●</span>
              Technical Courses
            </a>

            <a
              href="#quick-support"
              className="font-medium text-slate-700 transition-colors hover:text-red-700"
            >
              <span className="mr-2 text-red-600">●</span>
              Quick Support
            </a>

            <a
              href="#view-facilities"
              className="font-medium text-slate-700 transition-colors hover:text-red-700"
            >
              <span className="mr-2 text-red-600">●</span>
              View Facilities
            </a>
          </div>

          <a
            href="#about-nielit"
            className="inline-block rounded bg-[#b9000b] px-6 py-3 font-semibold text-white transition-colors hover:bg-red-800"
          >
            Read More About NIELIT →
          </a>
        </div>

      </div>
    </section>
  );
}

export default UniversityIntro;
