import React from "react";

/**
 * ABOUT PAGE — COLTEK TECHNOLOGIES
 * --------------------------------
 * Hi, this is Frederick. This is the full implementation of the About Us page
 * for the COLTEK website. I built this to match the UI design shared earlier.
 *
 * I used Tailwind CSS for styling and added clear first-person comments
 * to explain each section for both my understanding and code reviewers.
 *
 * All images are placeholders (gray boxes) since the real UI assets
 * will be inserted later.
 */

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-900">

      {/* ------------------------------------------------------------- */}
      {/* NAVBAR PLACEHOLDER */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-blue-700 text-white p-4 text-center font-semibold">
        {/* I will replace this with the real Navbar component later */}
        Navbar Placeholder
      </header>

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-[280px] md:h-[350px] bg-gray-300 flex items-center justify-center">
        {/* This is a placeholder for the large banner image */}
        <div className="absolute inset-0 bg-gray-300"></div>

        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          About Us
        </h1>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TIMELINE SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Story</h2>

          {/* Timeline Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/** I am looping over the 4 years to reduce repeating code */}
            {["2024", "2025", "2026", "2027"].map((year) => (
              <div key={year} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
                  {/* Icon placeholder */}
                  <span className="text-3xl">📘</span>
                </div>
                <p className="mt-3 text-lg font-semibold">{year}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* MISSION & VISION SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              This is a placeholder for the mission statement. I will replace it
              with the real mission content based on the UI design.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              This is a placeholder for the vision statement. The real content
              will be added later.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CORE VALUES */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Our Core Values
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">

          {/* Core values list */}
          {[
            "Friendly",
            "Accountability",
            "Empathy",
            "Excellence",
            "Service",
          ].map((value) => (
            <div
              key={value}
              className="bg-gray-100 p-8 rounded-xl shadow flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <p className="text-xl font-semibold">{value}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FOUNDER PROFILE */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="w-40 h-40 mx-auto bg-gray-300 rounded-full mb-6"></div>

          <h3 className="text-2xl font-bold">John Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>

          <div className="flex justify-center gap-4 mt-4">
            <span className="text-2xl">🔗</span>
            <span className="text-2xl">📘</span>
            <span className="text-2xl">📷</span>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TEAM SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">

          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <p className="text-lg font-bold">Team Member {i}</p>
              <p className="text-gray-600">Role {i}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STATS SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16">
        <div className="max-w-5xl mx-auto bg-blue-700 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-around text-center">

          <div className="mb-8 md:mb-0">
            <p className="text-4xl font-bold">300+</p>
            <p className="text-white/80">Projects Completed</p>
          </div>

          <div>
            <p className="text-4xl font-bold">4.8/5.0</p>
            <p className="text-white/80">Customer Satisfaction</p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CTA SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-20 bg-cyan-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Help Make Your Idea A Reality
        </h2>
        <button className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FOOTER PLACEHOLDER */}
      {/* ------------------------------------------------------------- */}
      <footer className="w-full bg-blue-700 text-white text-center p-4 mt-auto">
        {/* I will replace this with the real Footer component later */}
        Footer Placeholder
      </footer>

    </div>
  );
};

export default About;
