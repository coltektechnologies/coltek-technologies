// src/pages/About/About.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

// TEAM IMAGES
// Note: Please convert these images to WebP format for better performance
import CEOImage from "../../assets/team/ceo.jpg";
import FrederickImg from "../../assets/team/CTO.jpg";
import WilliamsImg from "../../assets/team/william.jpg";
import NancyImg from "../../assets/team/nancy.png";

// Hero image - using WebP version
import AboutHeroImg from "../../assets/images/about-hero.webp";

// Images that need WebP conversion:
// - /src/assets/team/ceo.jpg
// - /src/assets/team/CTO.jpg
// - /src/assets/team/william.jpg
// - /src/assets/team/nancy.png

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
  Facebook,
  Instagram,
  ArrowRightCircle,
} from "lucide-react";

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

  // Auto-cycle milestones
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
      {/* NEW HERO SECTION  */}
      <Reveal delay={50}>
        <section className="relative w-full overflow-hidden">
          <div
            className="
              relative 
              h-[260px]
              md:h-[340px] 
              lg:h-[420px]
              w-full
              flex items-center justify-center
            "
          >
            {/* Background Image */}
            <img
              src={AboutHeroImg}
              alt="About COLTEK"
              className="
                absolute inset-0 
                w-full h-full 
                object-cover 
                object-center
              "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                About Us
              </h1>
              <p className="mt-4 text-white/90 max-w-2xl mx-auto text-sm md:text-base">
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
              drives meaningful progress.
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
                    className={`cursor-pointer bg-white rounded-xl p-4 shadow-sm transition-all duration-300 flex flex-col items-center text-center ${
                      selected
                        ? "shadow-lg scale-105 border-t-4"
                        : "hover:shadow-md hover:scale-105"
                    }`}
                    style={{ borderColor: selected ? m.accent : "transparent" }}
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
                    <p className="text-xs text-[#607B8B] mt-1">{m.title}</p>
                  </article>
                );
              })}
            </div>

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

            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="text-[#1C3D72] w-5 h-5" />
                <h3 className="text-xl font-bold text-[#1C3D72]">Our Vision</h3>
              </div>
              <p className="text-sm text-[#42566A]">
                To empower individuals and organizations to reach their highest
                potential.
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {[
                {
                  title: "Integrity",
                  desc: "Doing what is right.",
                  icon: Smile,
                  accent: "#5EC9F5",
                },
                {
                  title: "Accountability",
                  desc: "Owning actions and outcomes.",
                  icon: CheckCircle,
                  accent: "#FFB766",
                },
                {
                  title: "Empathy",
                  desc: "Understanding and compassion.",
                  icon: HeartHandshake,
                  accent: "#7DE3C7",
                },
                {
                  title: "Excellence",
                  desc: "High standards always.",
                  icon: Star,
                  accent: "#8FB4FF",
                },
                {
                  title: "Service",
                  desc: "People-first commitment.",
                  icon: HandHelping,
                  accent: "#9EE3FF",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${v.accent}20` }}
                  >
                    <v.icon className="w-6 h-6" style={{ color: v.accent }} />
                  </div>

                  <div className="font-semibold text-lg">{v.title}</div>
                  <p className="text-sm text-[#607B8B] mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CEO SECTION */}
      <Reveal delay={450}>
        <section className="py-10 md:py-14 bg-[#F8FBFD]">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            {/* Larger CEO Photo */}
            <img
              src={CEOImage}
              loading="lazy"
              alt="CEO"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold text-[#1C3D72]">
                Boansi Kyeremateng Collins
              </h3>

              <p className="text-base text-[#607B8B] mb-3">
                Chief Executive Officer
              </p>

              <p className="text-sm text-[#42566A] leading-relaxed max-w-xl">
                Collins leads with innovation, integrity, and a long-term vision
                for COLTEK Technologies, inspiring a culture built on
                excellence, growth, and purpose-driven impact.
              </p>

              {/* CEO Social Links */}
              <div className="flex gap-4 mt-5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/CollinsBoansi"
                  target="_blank"
                  className="p-3 bg-white rounded-full shadow hover:-translate-y-1 transition"
                >
                  <Facebook className="text-[#1C3D72] w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/boansicollins"
                  target="_blank"
                  className="p-3 bg-white rounded-full shadow hover:-translate-y-1 transition"
                >
                  <Instagram className="text-[#1C3D72] w-5 h-5" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://twitter.com/Profs123456"
                  target="_blank"
                  className="p-3 bg-white rounded-full shadow hover:-translate-y-1 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-[#1C3D72]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26L23.25 21.75h-6.843l-5.003-6.536-5.75 6.536H2.344l7.73-8.79L1.125 2.25H8.12l4.533 5.993 5.59-5.993z" />
                  </svg>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1C3D72] mb-10">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Owusu Bonsu Frederick",
                  role: "Chief Technology Officer",
                  image: FrederickImg,
                },
                {
                  name: "Owusu Williams",
                  role: "Human Resource Manager",
                  image: WilliamsImg,
                },
                {
                  name: "Ampaabeng Kyeremeh Nancy",
                  role: "IT Project Manager",
                  image: NancyImg,
                },
              ].map((m) => (
                <div
                  key={m.name}
                  className="
              bg-white 
              rounded-2xl 
              p-8 
              text-center 
              shadow-md 
              hover:shadow-xl 
              hover:-translate-y-1 
              transition
              min-h-[340px]
              flex flex-col items-center justify-start
            "
                >
                  {/* BIGGER TEAM AVATAR */}
                  <img
                    src={m.image}
                    loading="lazy"
                    alt={m.name}
                    className="
                w-36 
                h-36 
                rounded-full 
                object-cover 
                shadow-lg 
                mb-5
              "
                  />

                  <div className="text-xl font-semibold text-[#102A43]">
                    {m.name}
                  </div>

                  <div className="text-sm text-[#607B8B] mt-1">{m.role}</div>
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
            <div className="rounded-2xl p-8 bg-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-[#102A43]">
                  Let’s Help Make Your Idea a Reality
                </h3>
                <p className="text-sm text-[#42566A] mt-2 max-w-xl">
                  We bring your vision to life with innovation and excellence.
                </p>
              </div>

              <div className="flex items-center md:justify-end gap-3">
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
          <div className="text-[#CDE9EF]">
            Built with care by the COLTEK team
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
