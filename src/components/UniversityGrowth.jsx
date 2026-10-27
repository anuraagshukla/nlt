
const growthStats = [
  { label: "Our Visitors", number: "1478", suffix: "+" },
  { label: "Our Faculty", number: "1731", suffix: "+" },
  { label: "Our Students", number: "10000", suffix: "+" },
  { label: "Our Courses", number: "60", suffix: "+" },
];

function UniversityGrowth() {
  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
      {/* Campus background */}
      <img
        src="https://nielit-admin.softgen.co.in/images/banners/1786004632.png"
        alt="NIELIT campus"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-16 text-white">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          University Growth
        </h2>

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-5">
          {growthStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-3 text-lg font-medium md:text-xl">
                {stat.label}
              </p>

              <p className="text-4xl font-extrabold md:text-5xl">
                {stat.number} {stat.suffix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UniversityGrowth;
