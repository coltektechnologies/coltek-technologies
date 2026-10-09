import React, { useState } from "react";
import legalHeroPic from "../../assets/images/legaHeropic.webp";

// PDF downloads removed.
//
// All five "policy" files were byte-identical (md5 5a54646a...) and none was
// a legal document: each was the same personal graduate-school application
// essay belonging to a named member of staff, including their private email
// address. Vite deduplicated them, so every one of the five download buttons
// served that single file to the public.
//
// Until real, lawyer-reviewed documents exist, each section states honestly
// that it is being prepared and points to the contact page. Do NOT wire a
// download button back up without a document behind it.

interface PolicySection {
  id: string;
  title: string;
  description: string;
}

const LegalPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const policySections: PolicySection[] = [
    {
      id: "terms",
      title: "Terms of Service",
      description:
        "The rules for using the COLTEK website and engaging us for work \u2014 what we commit to deliver, what we ask of you, and how disputes are handled.",
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      description:
        "What personal information we collect when you contact us, why we collect it, who processes it on our behalf, how long we keep it, and how you can ask us to delete it.",
    },
    {
      id: "cookies",
      title: "Cookies",
      description:
        "Which cookies and similar technologies this site uses, what each one is for, and how to control them in your browser.",
    },
    {
      id: "license",
      title: "License",
      description:
        "Who owns the code, designs and documentation we produce, and the terms under which ownership or usage rights transfer to you on a project.",
    },
    {
      id: "compliance",
      title: "Compliance",
      description:
        "The data-protection and security obligations we work to, and how to raise a concern or make a formal data request.",
    },
  ];

  const tableOfContents = [
    "Terms of Service",
    "Privacy Policy",
    "Cookies",
    "License",
    "Compliance",
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-100 bg-gradient-to-r from-gray-700 to-gray-900 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${legalHeroPic})`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative h-full flex flex-col items-end justify-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            OUR LEGAL & POLICY INFORMATION
          </h1>
          <p className="text-sm md:text-base text-end max-w-2xl mb-6 text-gray-200">
            We are committed to protecting
            <br />
            your rights, data and privacy
            <br />
            through transparency, integrity and compliance
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm">
            Explore Policies
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Table of Contents */}
          <aside className="md:col-span-3">
            <div className="bg-blue-50 rounded-lg p-6 sticky top-4">
              <h3 className="text-blue-900 font-bold mb-4 text-sm uppercase">
                Table of Contents
              </h3>
              <ul className="space-y-3">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Policy Sections */}
          <main className="md:col-span-9">
            <div className="space-y-4">
              {policySections.map((section) => (
                <div
                  key={section.id}
                  id={section.title.toLowerCase().replace(/\s+/g, "-")}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <svg
                            className={`w-6 h-6 transform transition-transform ${
                              expandedSection === section.id ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                        <h2 className="text-xl font-bold text-blue-900">
                          {section.title}
                        </h2>
                      </div>
                      <p className="text-sm text-gray-600 ml-9">
                        {section.description}
                      </p>
                    </div>
                    {/* Deliberately not a download button. See the note at
                        the top of this file. */}
                    <span className="ml-4 whitespace-nowrap rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold text-blue-700">
                      Being prepared
                    </span>
                  </div>

                  {/* Expanded Content */}
                  {expandedSection === section.id && (
                    <div className="mt-4 ml-9 pt-4 border-t border-blue-200">
                      <div className="text-sm text-gray-700 space-y-3">
                        <p>
                          Our {section.title.toLowerCase()} document is being
                          finalised and will be published here once it has been
                          reviewed. We would rather say that plainly than
                          publish something we have not checked.
                        </p>
                        <p>
                          If you need these terms before then \u2014 for a
                          contract, a procurement review, or a data request
                          \u2014 please{" "}
                          <a
                            href="/contact"
                            className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-800"
                          >
                            contact us
                          </a>{" "}
                          and we will send you the current position in writing.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 flex items-center justify-center">
                <div className="text-8xl">
                  <img src={legalHeroPic} alt="" />
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Need Clarification about our legal policies
              </h2>
              <p className="text-blue-100">Reach out to our legal team</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Compliance Badges */}
        {/* <div className="mt-12 text-center">
          <div className="flex justify-center items-center gap-8 mb-6 bg-gray-100 p-8">
            <div className="bg-yellow-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-700">GDPR</span>
            </div>
            <div className="border-4 border-gray-800 rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">ISO</span>
            </div>
            <div className="bg-blue-600 rounded-lg p-4 w-20 h-20 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            At Coltek Technologies, we prioritize<br />
            <strong>transparency and user trust</strong>. Our policies are<br />
            designed to ensure compliance and protect<br />
            your data
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LegalPage;
