
const notices = [
  "New Semester Timetable Released — Check your department notice board",
  "Test Notice PDF",
  "Mid-Semester Timetable",
  "Important Examination Updates",
];

function CurrentNotices() {
  return (
    <section className="flex h-12 w-full overflow-hidden bg-[#254e91] text-white">
      {/* Fixed Title */}
      <div className="z-10 flex shrink-0 items-center border-r border-white/30 bg-[#254e91] px-4 font-bold">
        Current Notices
      </div>

      {/* Scrolling Notices */}
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="notice-track flex h-full w-max items-center">
          {[...notices, ...notices].map((notice, index) => (
            <div
              key={`${notice}-${index}`}
              className="flex h-full shrink-0 items-center"
            >
              <a
                href="#notices"
                className="whitespace-nowrap px-6 text-[15px] hover:text-yellow-300 hover:underline"
              >
                {notice}
              </a>

              <span className="text-white/50">|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentNotices;
