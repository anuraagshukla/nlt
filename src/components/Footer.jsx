
const statutoryGroups = [
  {
    title: "Anti-Ragging Framework",
    links: [
      "Anti-Ragging Committee",
      "Mentoring Cell",
      "Anti-Ragging Cell & Squad",
    ],
  },
  {
    title: "Institutional Operations",
    links: [
      "Vigilance Committee",
      "Discipline Committee",
      "Grievance Redressal Committee",
    ],
  },
];

const complianceGroups = [
  {
    title: "Statutes",
    links: [
      "Memorandum of Association (MOA)",
      "Gazette Notifications & Ordinances",
    ],
  },
  {
    title: "Accreditations",
    links: ["IQAC / NAAC / NBA", "AICTE Approvals"],
  },
  {
    title: "Transparency",
    links: ["Right to Information (RTI)", "Mandatory Disclosures"],
  },
  {
    title: "Policies",
    links: ["Website Policies & Disclaimers"],
  },
];

function Footer() {
  return (
    <footer className="bg-[#101216] text-white">
      {/* Main footer columns */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1.05fr_1fr] lg:gap-12 lg:px-7">
        {/* Statutory Committees */}
        <div>
          <h2 className="mb-6 text-xl font-bold">
            Statutory Committees
          </h2>

          <div className="space-y-5 text-base leading-6">
            {statutoryGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2">{group.title}</h3>

                <ul className="ml-7 list-disc space-y-1">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#statutory-committees"
                        className="transition hover:text-yellow-400"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Docs */}
        <div>
          <h2 className="mb-6 text-xl font-bold">
            Compliance Docs
          </h2>

          <div className="space-y-5 text-base leading-6">
            {complianceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2">{group.title}</h3>

                <ul className="ml-7 list-disc space-y-1">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#compliance-docs"
                        className="transition hover:text-yellow-400"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-6 text-xl font-bold">Contact</h2>

          <div className="space-y-4 text-base leading-6">
            <p className="flex items-start gap-3">
              <span className="mt-1 shrink-0">📍</span>
              <span>
                NIELIT Ropar, Main Campus, Bada Phull,
                Rupnagar (Ropar), Punjab-140001
              </span>
            </p>

            <p className="flex items-center gap-3">
              <span>☎</span>
              <a href="tel:1234567890" className="hover:text-yellow-400">
                1234567890
              </a>
            </p>

            <p className="flex items-center gap-3">
              <span>✉</span>
              <a
                href="mailto:roparmain@nielit.com"
                className="break-all hover:text-yellow-400"
              >
                roparmain@nielit.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright and social links */}
      <div className="border-t border-[#34373d]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 px-6 py-5 md:flex-row md:px-7">
          <p className="text-center text-sm font-semibold leading-6 md:text-left md:text-base">
            © 2026 <span className="text-yellow-400">NIELIT</span> All Rights
            Reserved. Designed & Developed by Softgen Technologies.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-base">Follow us</span>

            <a
              href="#facebook"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-600 text-lg font-bold transition hover:border-yellow-400 hover:text-yellow-400"
            >
              f
            </a>

            <a
              href="#x"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-600 text-lg transition hover:border-yellow-400 hover:text-yellow-400"
            >
              𝕏
            </a>

            <a
              href="#youtube"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-600 text-lg transition hover:border-yellow-400 hover:text-yellow-400"
            >
              ▶
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
