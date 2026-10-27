
import { useState } from "react";

function StudentHelpDesk() {
  const [openSection, setOpenSection] = useState("support");

  const toggleSection = (section) => {
    setOpenSection((current) =>
      current === section ? "" : section
    );
  };

  const linkClass =
    "flex items-start gap-3 px-7 py-3 text-[15px] leading-6 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-700";

  const sectionButtonClass =
    "flex w-full shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4 text-left transition-colors hover:bg-gray-50";

  return (
    <aside
      className="
        h-full w-full
        overflow-y-auto overflow-x-hidden
        border-r border-gray-200
        bg-white text-gray-700 shadow-sm
      "
    >
      {/* Student Help Desk Heading */}
      <div className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-red-50 px-5 py-4">
        <span className="text-[16px] font-medium text-red-700">
          Student Help Desk
        </span>

        <span className="text-xl text-red-700" aria-hidden="true">
          −
        </span>
      </div>

      {/* Core Support */}
      <button
        type="button"
        onClick={() => toggleSection("support")}
        aria-expanded={openSection === "support"}
        className={sectionButtonClass}
      >
        <span className="font-semibold">
          <span className="mr-3 text-red-700" aria-hidden="true">
            ▤
          </span>
          Core Support
        </span>

        <span aria-hidden="true">
          {openSection === "support" ? "−" : "+"}
        </span>
      </button>

      {openSection === "support" && (
        <div>
          <a href="#accounts" className={linkClass}>
            <span className="font-bold text-red-600" aria-hidden="true">
              ›
            </span>
            <span>Accounts &amp; Fee Queries</span>
          </a>

          <a href="#technical-support" className={linkClass}>
            <span className="font-bold text-red-600" aria-hidden="true">
              ›
            </span>
            <span>Technical Support &amp; IT Help</span>
          </a>
        </div>
      )}

      {/* Grievances */}
      <button
        type="button"
        onClick={() => toggleSection("grievances")}
        aria-expanded={openSection === "grievances"}
        className={sectionButtonClass}
      >
        <span className="font-semibold">
          <span className="mr-3 text-red-700" aria-hidden="true">
            ▤
          </span>
          Grievances
        </span>

        <span aria-hidden="true">
          {openSection === "grievances" ? "−" : "+"}
        </span>
      </button>

      {openSection === "grievances" && (
        <div>
          <a href="#complaint-registration" className={linkClass}>
            <span className="font-bold text-red-600" aria-hidden="true">
              ›
            </span>
            <span>Complaint Registration</span>
          </a>

          <a href="#complaint-tracking" className={linkClass}>
            <span className="font-bold text-red-600" aria-hidden="true">
              ›
            </span>
            <span>Complaint Tracking System</span>
          </a>

          <a href="#student-feedback" className={linkClass}>
            <span className="font-bold text-red-600" aria-hidden="true">
              ›
            </span>
            <span>Student Feedback Portals</span>
          </a>
        </div>
      )}

      {/* Statutory Committees */}
      <button
        type="button"
        onClick={() => toggleSection("committees")}
        aria-expanded={openSection === "committees"}
        className={`${sectionButtonClass} border-t border-gray-200`}
      >
        <span className="text-[15px]">
          Statutory Committees
        </span>

        <span aria-hidden="true">
          {openSection === "committees" ? "−" : "+"}
        </span>
      </button>

      {openSection === "committees" && (
        <div>
          <a href="#academic-committees" className={linkClass}>
            <span className="font-bold text-red-600" aria-hidden="true">
              ›
            </span>
            <span>Academic Committees</span>
          </a>

          <a href="#other-committees" className={linkClass}>
            <span className="font-bold text-red-600" aria-hidden="true">
              ›
            </span>
            <span>Other Committees</span>
          </a>
        </div>
      )}
    </aside>
  );
}

export default StudentHelpDesk;
