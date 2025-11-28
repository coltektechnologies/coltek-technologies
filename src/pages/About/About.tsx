import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

// Icons
import {
  Flag,
  Target,
  Rocket,
  Globe,
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
 * ABOUT PAGE WITH:
 * - Animated milestone cards
 * - Auto-cycle milestones every 5s
 * - Manual selection with elevation effect
 * - Clean layout and animations
 */

const milestones = [
  {
    date: "Aug 2025",
    title: "Founding of COLTEK",
    description:
      "A group of passionate young innovators came together to build a company focused on integrity, innovation, and purpose-driven technology.",
    icon: <Flag className="text-[#5EC9F5]" />,
    accent: "#5EC9F5",
  },
  {
    date: "Sept 2025",
    title: "Core Team Formation",
    description:
      "Our leadership and technical teams were officially formed, establishing a strong foundation for collaboration and excellence.",
    icon: <Target className="text-[#FFB766]" />,
    accent: "#FFB766",
  },
  {
    date: "Oct 2025",
    title: "First Projects & Clients",
    description:
      "We began delivering digital solutions, earning trust through professionalism, timely delivery, and consistent quality.",
    icon: <Rocket className="text-[#7DE3C7]" />,
    accent: "#7DE3C7",
  },
  {
    date: "Nov 2025",
    title: "Website Launch",
    description:
      "COLTEK’s official digital presence went live, signaling our readiness to serve clients globally with excellence.",
    icon: <Globe className="text-[#8FB4FF]" />,
    accent: "#8FB4FF",
  },
];

const About: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  // Auto-cycle milestones every 5 seconds unless user has selected one
  useEffect(() => {
    if (active !== null) return;

    let index = 0;
    const interval = setInterval(() => {
      setActive(index);
      index = (index + 1) % milestones.length;
    }, 5000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="min-h-screen w-full bg-[#F4F7FA] text-[#102A43] flex flex-col">

      {/* HERO SECTION */}
      <Reveal delay={50}>
        <section className="relative w-full">
          <div className="h-[220px] md:h-[320px] lg:h-[420px] bg-gradient-to-r from-[#1C3D72] via-[#16406b] to-[#2C6B8F] flex items-center justify-center">
            <div className="relative z-10 max-w-5xl px-6 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                About Us
              </h1>
              <p className="mt-4 text-white/90 max-w-2xl mx-auto">
                Building a future driven by innovation, integrity, and purpose.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* OUR STORY */}
      <Reveal delay={150}>
        <section className="py-10 md:py-14">
          <div className="w-full flex flex-col items-center text-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C3D72]">
              Our Story
            </h2>

            <p className="text-sm md:text-base text-[#42566A] mb-8 max-w-3xl leading-relaxed">
              COLTEK was founded in August 2025 by a team united by a shared
              mission: to build technology that empowers, inspires growth, and
              drives meaningful progress. Though young, our passion and
              commitment set the stage for a future of excellence and
              innovation.
            </p>
          </div>

          {/* MILESTONES */}
          <div className="max-w-6xl mx-auto px-6 mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {milestones.map((m, i) => {
                const selected = active === i;

                return (
                  <article
                    key={m.date}
                    onClick={() => setActive(i)}
                    className={`cursor-pointer bg-white rounded-xl p-4 shadow-sm transition-all duration-300 flex flex-col items-center text-center
                      ${
                        selected
                          ? "shadow-xl scale-105 border-t-4"
                          : "hover:shadow-md hover:scale-105"
                      }`}
                    style={{
                      borderColor: selected ? m.accent : "transparent",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-all"
                      style={{
                        backgroundColor: `${m.accent}20`,
                        transform: selected ? "translateY(-3px)" : "none",
                      }}
                    >
                      {m.icon}
                    </div>

                    <h3 className="font-semibold">{m.date}</h3>
                    <p className="text-xs text-[#607B8B] mt-2 max-w-[90%]">
                      {m.title}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* MILESTONE DETAILS */}
            {active !== null && (
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-[#1C3D72]">
                  {milestones[active].title}
                </h3>
                <p className="text-sm text-[#42566A] mt-2 leading-relaxed">
                  {milestones[active].description}
                </p>
              </div>
            )}
          </div>
        </section>
      </Reveal>

      {/* MISSION & VISION */}
      <Reveal delay={250}>
        <section className="py-10 md:py-14 bg-[#F8FBFD]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="text-[#1C3D72] w-5 h-5" />
                <h3 className="text-xl font-bold text-[#1C3D72]">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm text-[#42566A]">
                Transforming potential into excellence by inspiring growth,
                fostering innovation, and leading with integrity.
              </p>
            </article>

            {/* Vision */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="text-[#1C3D72] w-5 h-5" />
                <h3 className="text-xl font-bold text-[#1C3D72]">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm text-[#42566A]">
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
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-105 transition text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${v.accent}20` }}
                  >
                    <v.icon className="w-7 h-7" style={{ color: v.accent }} />
                  </div>
                  <div className="font-semibold text-lg">{v.title}</div>
                  <p className="text-sm text-[#607B8B] mt-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CEO SECTION */}
      <Reveal delay={450}>
        <section className="py-10 md:py-14 bg-[#F8FBFD]">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-36 h-36 rounded-full bg-gray-200 shadow-inner" />

            <div>
              <h3 className="text-2xl font-bold text-[#1C3D72]">
                Boansi Kyeremateng Collins
              </h3>
              <p className="text-sm text-[#607B8B] mb-3">
                Chief Executive Officer
              </p>
              <p className="text-sm text-[#42566A] leading-relaxed">
                As CEO, Collins leads with integrity, innovation, and a drive
                for excellence — shaping the vision and long-term growth of
                COLTEK Technologies.
              </p>

              <div className="flex gap-3 mt-4">
                <a className="p-2 bg-white rounded-full shadow hover:-translate-y-1 transition">
                  <Linkedin className="text-[#1C3D72]" />
                </a>
                <a className="p-2 bg-white rounded-full shadow hover:-translate-y-1 transition">
                  <Facebook className="text-[#1C3D72]" />
                </a>
                <a className="p-2 bg-white rounded-full shadow hover:-translate-y-1 transition">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Owusu Bonsu Frederick", role: "Chief Technology Officer" },
                { name: "Ampomah Mark Hill", role: "Product Manager" },
                { name: "Owusu Williams", role: "Human Resource Manager" },
                { name: "Ampaabeng Kyeremeh Nancy", role: "IT Project Manager" },
              ].map((m) => (
                <div
                  key={m.name}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-3" />
                  <div className="font-semibold text-[#102A43]">{m.name}</div>
                  <div className="text-sm text-[#607B8B]">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal delay={750}>
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl p-6 md:p-8 bg-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-[#102A43]">
                  Let’s Help Make Your Idea a Reality
                </h3>
                <p className="text-sm text-[#42566A] mt-2 max-w-xl">
                  We bring your vision to life with innovation, integrity, and excellence.
                </p>
              </div>

              <div className="flex items-center md:justify-end gap-3">
                {/* GET STARTED → CONTACT PAGE */}
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-lg font-semibold text-white shadow-md transform hover:-translate-y-1 transition flex items-center"
                  style={{
                    background:
                      "linear-gradient(90deg, #1C3D72 0%, #2EC4B6 100%)",
                  }}
                >
                  Get Started
                  <ArrowRightCircle className="inline ml-2 w-5 h-5" />
                </Link>

                <button className="px-4 py-3 rounded-lg bg-[#F1F7F9] text-[#102A43] hover:bg-[#E6F3F2] transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="w-full bg-[#102A43] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-sm">
          <div>© {new Date().getFullYear()} COLTEK Technologies</div>
          <div className="text-[#CDE9EF]">Built with care by the COLTEK team</div>
        </div>
      </footer>
    </div>
  );
};

export default About;
