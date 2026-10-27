
function Hero() {
  return (
    <section className="relative h-[340px] w-full overflow-hidden bg-slate-800 sm:h-[370px] lg:h-[380px]">
      {/* Background Image */}
      <img
        src="https://nielit-admin.softgen.co.in/images/banners/1786004632.png"
        alt="University campus"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Decorative curved design */}
      <div className="absolute -bottom-24 -left-16 h-40 w-[72%] -rotate-6 rounded-[50%] bg-blue-950/85 sm:-bottom-28 sm:h-48" />

      {/* Hero Text */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-10 lg:px-12">
        <div className="max-w-[540px]">
          <span className="inline-block bg-yellow-400 px-3 py-1 text-sm font-semibold text-black md:text-base">
            WELCOME TO NIELIT
          </span>

          <h1 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Transform your Future with Oldest Skilling Institute
          </h1>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-1 rounded bg-slate-950/80 p-1.5">
        <button
          type="button"
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-sm text-white hover:bg-blue-600"
        >
          ◀
        </button>

        <button
          type="button"
          aria-label="Pause slider"
          className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-sm text-white hover:bg-blue-600"
        >
          II
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-sm text-white hover:bg-blue-600"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default Hero;
