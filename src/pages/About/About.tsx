import React from "react";
import Reveal from "../../components/Reveal";

// Icons
import {
  Flag,
  Target,
  Bolt,
  Rocket,
  Compass,
  Eye,
  Smile,
  CheckCircle,
  HeartHandshake,
  Star,
  HandHelping,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRightCircle,
} from "lucide-react";

/**
 * ABOUT PAGE
 * ----------------------------------------
 * This file contains almost final COLTEK data:
 * - Founder & leadership info
 * - Mission, Vision, Core Values
 * - Updated team members
 * - A new compelling company story
 * - All icons styled with color accents
 * - Responsive, and animated
 */

const About: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#F4F7FA] text-[#102A43] flex flex-col">
      {/* HERO SECTION */}
      <Reveal delay={50}>
        <section className="relative w-full">
          <div className="h-[220px] md:h-[320px] lg:h-[420px] bg-gradient-to-r from-[#1C3D72] via-[#16406b] to-[#2C6B8F] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-5xl px-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                About Us
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
                Building a culture of growth, integrity, innovation, and
                purpose.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* OUR STORY */}
      <Reveal delay={150}>
        <section className="py-10 md:py-14">
          <div className="w-full flex flex-col items-center text-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1C3D72]">
              Our Story
            </h2>

            <p className="text-sm md:text-base text-[#42566A] mb-8 max-w-3xl leading-relaxed">
              COLTEK was founded just a few months ago by a group of young,
              passionate minds who believed that potential is limitless when
              guided by purpose, integrity, and innovation. Emerging from a
              shared vision, we came together to build an organisation where
              creativity thrives, growth is intentional, and people feel
              empowered to become the best versions of themselves.
              <br />
              <br />
              Though new, our commitment is strong: to inspire excellence,
              foster meaningful collaboration, and create solutions that uplift
              individuals and organisations alike.
            </p>

            {/* Optional timeline section stays centered because the wrapper will adjust automatically */}
          </div>

          <div className="max-w-6xl mx-auto px-6 mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { year: "2024", icon: <Flag className="text-[#5EC9F5]" /> },
                { year: "2025", icon: <Target className="text-[#FFB766]" /> },
                { year: "2026", icon: <Bolt className="text-[#5EC9F5]" /> },
                { year: "2027", icon: <Rocket className="text-[#FFB766]" /> },
              ].map((item, idx) => (
                <article
                  key={item.year}
                  className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                        idx % 2 === 0 ? "bg-[#5EC9F5]/20" : "bg-[#FFB766]/20"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#102A43]">
                      {item.year}
                    </h3>
                    <p className="text-xs text-[#607B8B] mt-2">
                      A milestone in our journey.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* MISSION & VISION */}
      <Reveal delay={250}>
        <section className="py-10 md:py-14 bg-[#F8FBFD]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <article className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="text-[#1C3D72] w-5 h-5" />
                <h3 className="text-xl md:text-2xl font-bold text-[#1C3D72]">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#42566A] leading-relaxed">
                Transforming potential into excellence by inspiring growth,
                fostering innovation, and leading with integrity.
              </p>
            </article>

            {/* Vision */}
            <article className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="text-[#1C3D72] w-5 h-5" />
                <h3 className="text-xl md:text-2xl font-bold text-[#1C3D72]">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#42566A] leading-relaxed">
                To empower individuals and organizations to reach their highest
                potential, fostering a culture of learning, integrity, and
                collaboration that drives sustainable progress.
              </p>
            </article>
          </div>
        </section>
      </Reveal>

      {/* CORE VALUES */}
      <Reveal delay={350}>
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C3D72] mb-2">
              Core Values
            </h2>
            <p className="text-sm text-[#42566A] max-w-xl mb-6">
              Our values guide how we lead, collaborate, and create meaningful
              impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[
                {
                  title: "Integrity",
                  desc: "Doing what is right, even when no one is watching.",
                  icon: Smile,
                  accent: "#5EC9F5",
                },
                {
                  title: "Accountability",
                  desc: "Taking ownership of actions and outcomes.",
                  icon: CheckCircle,
                  accent: "#FFB766",
                },
                {
                  title: "Empathy",
                  desc: "Leading with compassion and understanding.",
                  icon: HeartHandshake,
                  accent: "#7DE3C7",
                },
                {
                  title: "Excellence",
                  desc: "Striving for high standards in every endeavor.",
                  icon: Star,
                  accent: "#8FB4FF",
                },
                {
                  title: "Service",
                  desc: "Putting people and purpose before self-interest.",
                  icon: HandHelping,
                  accent: "#9EE3FF",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${v.accent}20` }}
                  >
                    <v.icon className="w-7 h-7" style={{ color: v.accent }} />
                  </div>
                  <div className="font-semibold text-lg text-[#102A43]">
                    {v.title}
                  </div>
                  <p className="text-sm text-[#607B8B] mt-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOUNDER / CEO */}
      <Reveal delay={450}>
        <section className="py-10 md:py-14 bg-[#F8FBFD]">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-36 h-36 rounded-full bg-gray-200 shadow-inner" />

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#1C3D72]">
                Boansi Kyeremateng Collins
              </h3>
              <p className="text-sm md:text-base text-[#607B8B] mb-3">
                Chief Executive Officer
              </p>
              <p className="text-sm text-[#42566A] leading-relaxed">
                As CEO, Collins embodies the heart of COLTEK’s mission — leading
                with integrity, supporting meaningful growth, and empowering the
                team to build with purpose. His leadership sets the foundation
                for excellence, innovation, and impact.
              </p>

              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Linkedin className="text-[#1C3D72]" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Facebook className="text-[#1C3D72]" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Instagram className="text-[#1C3D72]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* TEAM SECTION */}
      <Reveal delay={550}>
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1C3D72] mb-3">
              Meet Our Team
            </h2>
            <p className="text-sm text-[#42566A] text-center max-w-3xl mx-auto mb-6">
              A team driven by passion, collaboration, and a commitment to
              excellence.
            </p>

            {/* Auto Grid (Responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Owusu Bonsu Frederick",
                  role: "Chief Technology Officer",
                },
                {
                  name: "Ampomah Mark Hill",
                  role: "Product Manager",
                },
                {
                  name: "Owusu Williams",
                  role: "Human Resource Manager",
                },
                {
                  name: "Ampaabeng Kyeremeh Nancy",
                  role: "IT Project Manager",
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-3" />
                  <div className="font-semibold text-[#102A43]">
                    {member.name}
                  </div>
                  <div className="text-sm text-[#607B8B] mt-1">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* STATS SECTION */}
      <Reveal delay={650}>
        <section className="py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-r from-[#1C3D72] to-[#2EC4B6] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg transform hover:scale-[1.01] transition">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold">300+</div>
                <div className="text-sm text-white/90">Projects Completed</div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold">
                  4.8/5.0
                </div>
                <div className="text-sm text-white/90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal delay={750}>
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl overflow-hidden p-6 md:p-8 bg-white shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#102A43]">
                    Let’s Help Make Your Idea a Reality
                  </h3>
                  <p className="text-sm md:text-base text-[#42566A] mt-2 max-w-2xl">
                    We are ready to bring your vision to life with innovation,
                    integrity, and excellence.
                  </p>
                </div>

                <div className="flex items-center md:justify-end gap-3">
                  <button
                    className="px-5 py-3 flex items-center gap-2 rounded-lg font-semibold text-white shadow-md transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #1C3D72 0%, #2EC4B6 100%)",
                    }}
                  >
                    Get Started
                    <ArrowRightCircle className="w-5 h-5" />
                  </button>

                  <button className="px-4 py-3 rounded-lg font-medium bg-[#F1F7F9] text-[#102A43] hover:bg-[#E6F3F2] transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER PLACEHOLDER */}
      <footer className="w-full bg-[#102A43] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm">
            © {new Date().getFullYear()} COLTEK Technologies
          </div>
          <div className="text-sm text-[#CDE9EF]">
            Built with care by the COLTEK team
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
