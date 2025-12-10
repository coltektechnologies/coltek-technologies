// src/pages/Portfolio/Portfolio.tsx
import React, { useMemo, useState, useEffect } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";
import Inventory from "../../assets/portfolio/inventory.png";
import Banking from "../../assets/portfolio/banking.png";
import CRM from "../../assets/portfolio/crm.png";
import Product from "../../assets/portfolio/product.png";
import Retail from "../../assets/portfolio/retail.png";
import Commerce from "../../assets/portfolio/commerce.png";
import {
  Tag,
  ArrowRightCircle,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Zap,
} from "lucide-react";


/**
 * Portfolio / Projects Page (Polished)
 *
 * Features implemented:
 *  - Sticky filter bar with icons + active underline
 *  - Real client-side filtering
 *  - Smooth enter animations (staggered) + graceful exit
 *  - Enhanced hover animation (lift + image zoom + shadow)
 *  - Featured project block with badge + gradient
 *  - Scroll reveal integration via Reveal component
 *  - CTA with subtle pulse
 *  - "Coming soon" behavior for project action button (no modal / routes)
 *
 * Placeholder images use local uploaded file:
 *   /mnt/data/Screenshot 2025-11-24 102145.png
 *
 * Paste into: src/pages/Portfolio/Portfolio.tsx
 */

type Category = "All" | "Web Development" | "Mobile Apps" | "Cloud" | "AI Solutions";

type Project = {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  tags?: string[];
  image?: string;
  featured?: boolean;
};

const ALL_CATEGORIES: { key: Category; icon: React.ReactNode }[] = [
  { key: "All", icon: <Tag className="w-4 h-4" /> },
  { key: "Web Development", icon: <Globe className="w-4 h-4" /> },
  { key: "Mobile Apps", icon: <Smartphone className="w-4 h-4" /> },
  { key: "Cloud", icon: <Cloud className="w-4 h-4" /> },
  { key: "AI Solutions", icon: <Cpu className="w-4 h-4" /> },
];

// Hardcoded project seed (easy to migrate later)
const projectsSeed: Project[] = [
  {
    id: "p1",
    title: "AI-Powered Inventory System",
    excerpt: "Smart inventory predictions and automatic reorder suggestions for growing businesses.",
    category: "AI Solutions",
    tags: ["AI", "Inventory", "Analytics"],
    image: Inventory,
  },
  {
    id: "p2",
    title: "Mobile Banking App",
    excerpt: "Secure mobile banking with seamless onboarding and biometric authentication.",
    category: "Mobile Apps",
    tags: ["iOS", "Android", "Security"],
    image: Banking,
  },
  {
    id: "p3",
    title: "Cloud-Based CRM",
    excerpt: "Scalable CRM to manage leads, automate tasks, and improve sales workflows.",
    category: "Cloud",
    tags: ["Cloud", "SaaS"],
    image: CRM,
  },
  {
    id: "p4",
    title: "E-Commerce Platform (Web)",
    excerpt: "Fast, accessible, conversion-optimized online stores that scale.",
    category: "Web Development",
    tags: ["React", "Payments"],
    image: Commerce,
  },
  {
    id: "p5",
    title: "Product Management Dashboard",
    excerpt: "Analytics-first dashboard to track product performance and team KPIs.",
    category: "Web Development",
    tags: ["Dashboard", "Analytics"],
    image: Product,
    featured: true,
  },
  {
    id: "p6",
    title: "Retail Mobile App (Offline-first)",
    excerpt: "An intuitive retail app with offline-first capabilities for emerging markets.",
    category: "Mobile Apps",
    tags: ["Offline", "Sync"],
    image: Retail,
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [visibleIds, setVisibleIds] = useState<string[]>([]);
  const [comingSoonId, setComingSoonId] = useState<string | null>(null);

  // filtered list
  const filtered = useMemo(() => {
    if (activeCategory === "All") return projectsSeed;
    return projectsSeed.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // reveal stagger when filter changes
  useEffect(() => {
    setVisibleIds([]); // reset
    const timers: number[] = [];
    filtered.forEach((p, idx) => {
      const t = window.setTimeout(() => {
        setVisibleIds((s) => [...s, p.id]);
      }, idx * 80); // 80ms stagger for polished feel
      timers.push(t);
    });

    return () => timers.forEach(window.clearTimeout);
  }, [filtered]);

  // featured project
  const featured = useMemo(() => projectsSeed.find((p) => p.featured) ?? projectsSeed[0], []);

  // small in-page "coming soon" flash for the action button
  const handleComingSoon = (id: string) => {
    setComingSoonId(id);
    setTimeout(() => setComingSoonId(null), 1800);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-[#102A43]">
      {/* HERO */}
      <Reveal delay={40}>
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold">Our Projects & Case Studies</h1>
              <p className="text-sm text-[#607B8B] mt-2 max-w-xl">
                Discover how COLTEK Technologies helps businesses innovate and grow through tailored agile solutions.
              </p>
            </div>

            <div className="w-full lg:w-auto flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-3 bg-gradient-to-r from-[#1C3D72] to-[#2EC4B6] text-white px-4 py-2 rounded-md font-semibold shadow hover:opacity-95 transition"
              >
                Start Your Project
              </Link>

              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                className="inline-flex md:hidden items-center gap-2 bg-gradient-to-r from-[#1C3D72] to-[#2EC4B6] text-white px-3 py-2 rounded-md font-semibold shadow hover:opacity-95 transition"
              >
                Work with us
              </button>
            </div>
          </div>

          {/* STICKY FILTER BAR */}
          <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-sm border-t border-b border-[#E8EDF2]">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3 overflow-x-auto">
              {ALL_CATEGORIES.map((c) => {
                const isActive = c.key === activeCategory;
                return (
                  <button
                    key={c.key}
                    onClick={() => setActiveCategory(c.key)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition ${
                      isActive
                        ? "bg-[#102A43] text-white shadow-lg ring-2 ring-[#2EC4B6]/30"
                        : "bg-white text-[#102A43] border border-[#E8EDF2] hover:shadow-sm"
                    }`}
                    title={c.key}
                  >
                    <span className={`inline-flex items-center justify-center ${isActive ? "text-white" : "text-[#1C3D72]"}`}>
                      {c.icon}
                    </span>
                    <span>{c.key}</span>
                    {/* active underline small accent */}
                    {isActive && <span className="ml-2 w-2 h-2 rounded-full bg-[#2EC4B6]" />}
                  </button>
                );
              })}
            </div>
          </div>
        </header>
      </Reveal>

      {/* MAIN GRID */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Grid of cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const isVisible = visibleIds.includes(p.id);
            const isComing = comingSoonId === p.id;

            return (
              <Reveal key={p.id} delay={isVisible ? 80 : 0}>
                <article
                  aria-live="polite"
                  className={`bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  } hover:shadow-2xl hover:-translate-y-1`}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100 group">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* category badge top-left */}
                    <div className="absolute left-3 top-3 bg-white/90 text-xs text-[#102A43] px-2 py-1 rounded-md shadow-sm">
                      {p.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                      <div className="text-xs text-[#607B8B]">{p.tags?.[0] ?? ""}</div>
                    </div>

                    <p className="text-sm text-[#42566A]">{p.excerpt}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-2 items-center">
                        {p.tags?.slice(0, 2).map((t) => (
                          <span key={t} className="text-xs bg-[#F1F7F9] text-[#102A43] px-2 py-1 rounded-full shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {/* View button - simply shows "Coming soon" micro-feedback */}
                        <button
                          onClick={() => handleComingSoon(p.id)}
                          className="text-sm px-3 py-1 rounded-md border border-[#E8EDF2] bg-white hover:bg-[#fbfdff] transition"
                          aria-label={`View ${p.title}`}
                        >
                          View
                        </button>

                        <button
                          onClick={() => handleComingSoon(p.id)}
                          className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-[#1C3D72] to-[#2EC4B6] text-white shadow-md flex items-center gap-2"
                          aria-label={`Open ${p.title}`}
                        >
                          Link
                          <ArrowRightCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* coming soon toast / micro */}
                    {isComing && (
                      <div className="mt-3 text-xs bg-[#FFFBEB] border border-[#FDE68A] px-3 py-2 rounded-md inline-flex items-center gap-2 text-[#92400E]">
                        <Zap className="w-4 h-4" />
                        Coming soon — full case study
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </section>

        {/* FEATURED */}
        <aside className="mt-12">
          <Reveal delay={120}>
            <div className="bg-gradient-to-r from-[#E6F6FF] to-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3 h-56 rounded overflow-hidden shadow-inner">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1C3D72] text-white px-3 py-1 rounded-full text-xs font-semibold">Featured</div>
                  <div className="text-sm text-[#607B8B] ml-auto">{featured.category}</div>
                </div>

                <h2 className="text-2xl font-bold mt-3">{featured.title}</h2>
                <p className="text-sm text-[#42566A] mt-3 max-w-3xl">
                  {featured.excerpt} — a comprehensive dashboard for tracking product performance and analytics.
                </p>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleComingSoon(featured.id)}
                    className="px-4 py-2 rounded-md bg-white text-[#1C3D72] font-semibold border border-[#E8EDF2]"
                  >
                    Explore Full Case Study
                  </button>

                  <Link
                    to="/contact"
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-[#1C3D72] to-[#2EC4B6] text-white font-semibold flex items-center gap-2 animate-[pulse_2.5s_infinite]"
                  >
                    Let US Create Your Project Today <ArrowRightCircle className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </aside>
      </main>

      {/* FOOTER CTA */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-lg p-8 bg-gradient-to-r from-[#1C3D72] to-[#2EC4B6] text-white text-center shadow-lg">
          <h3 className="text-2xl font-bold">Let US Create Your Project Today</h3>
          <p className="text-sm mt-2">Ready to build? Talk to our team and we'll scope your project.</p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-md bg-white text-[#1C3D72] font-semibold shadow hover:scale-[1.02] transition"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
