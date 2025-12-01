// src/pages/Contact/Contact.tsx
import React, { useRef, useState } from "react";
import Reveal from "../../components/Reveal";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  Globe,
  Users,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  X,
} from "lucide-react";

/**
 * CONTACT PAGE — Final corrected version (no extra libs)
 *
 * - Uses only React + Tailwind + lucide-react (no framer-motion, no react-icons)
 * - AJAX submission to Web3Forms (access_key placeholder present)
 * - Vibrant toasts (top-right)
 * - FAQ uses pure React + CSS transitions (max-height) — no external animation libs
 * - Business hours + WhatsApp placeholder + improved grayscale map styling
 *
 * Paste over: src/pages/Contact/Contact.tsx
 */

type Toast = {
  id: number;
  type: "success" | "error";
  title: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastCounter = useRef(0);

  // FAQ accordion state (keep the current client-friendly FAQ set)
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((p) => (p === i ? null : i));

  // Helper to show toast
  const pushToast = (toast: Omit<Toast, "id">) => {
    const id = ++toastCounter.current;
    setToasts((t) => [...t, { id, ...toast }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3000);
  };

  // AJAX submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic client-side check
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      pushToast({
        type: "error",
        title: "Please fill required fields",
        message: "Name, email and message are required.",
      });
      return;
    }

    setSending(true);

    try {
      // NOTE: keep access_key hidden input filled with the CEO-provided key
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await resp.json();

      if (json.success) {
        pushToast({
          type: "success",
          title: "Message sent",
          message: "Thanks! We'll get back to you soon.",
        });
        form.reset();
      } else {
        pushToast({
          type: "error",
          title: "Submission failed",
          message: json.message || "Please try again later.",
        });
      }
    } catch {
      pushToast({
        type: "error",
        title: "Network error",
        message: "Unable to send message. Check your connection and try again.",
      });
    } finally {
      setSending(false);
    }
  };

  // Keep the FAQ items that were approved earlier (client-friendly)
  const faqItems = [
    {
      q: "How do I get started with a project?",
      a: "You can reach out through our contact form or email us directly. Once we understand your needs, we’ll schedule a quick consultation to discuss goals, timelines, and the best approach for your project.",
    },
    {
      q: "Can you build mobile apps for both iOS and Android?",
      a: "Yes! We develop both cross-platform and native mobile apps that run smoothly on iOS and Android devices.",
    },
    {
      q: "Do you offer ongoing support after project delivery?",
      a: "Absolutely. We provide post-launch maintenance, feature improvements, updates, and continuous technical support.",
    },
    {
      q: "How much does a typical project cost?",
      a: "It depends on the project’s complexity and scope. Once we understand your requirements, we’ll provide a transparent and accurate estimate.",
    },
    {
      q: "What if I'm not sure exactly what I need?",
      a: "No problem — that’s what we’re here for. Our team offers consultation to help clarify your idea, define the solution, and recommend the best technologies to bring it to life.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F4F7FA] text-[#102A43] flex flex-col">
      {/* Toast container (top-right) */}
      <div
        aria-live="polite"
        className="fixed top-5 right-5 z-50 flex flex-col gap-3"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`w-80 max-w-full transform transition-all duration-300 ${
              t.type === "success"
                ? "bg-emerald-500/95 text-white shadow-lg"
                : "bg-rose-500/95 text-white shadow-lg"
            } rounded-lg flex items-start gap-3 p-3`}
          >
            <div className="pt-0.5">
              {t.type === "success" ? (
                <CheckCircle className="w-6 h-6 text-white" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-white" />
              )}
            </div>

            <div className="flex-1 text-sm">
              <div className="font-semibold">{t.title}</div>
              {t.message && (
                <div className="mt-1 text-sm opacity-90">{t.message}</div>
              )}
            </div>

            <button
              aria-label="Close notification"
              onClick={() => setToasts((s) => s.filter((x) => x.id !== t.id))}
              className="pl-2"
            >
              <X className="w-4 h-4 text-white opacity-90" />
            </button>
          </div>
        ))}
      </div>

      {/* HERO */}
      <Reveal delay={50}>
        <section className="relative w-full">
          <div className="h-[220px] md:h-[260px] lg:h-[320px] bg-[url('/placeholder-hero.jpg')] bg-cover bg-center flex items-center">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#102A43]/70 to-transparent"
              aria-hidden
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
              <div className="text-sm text-white/80 mb-2">
                Home / Contact Us
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold">
                Contact Us
              </h1>
              <p className="mt-2 max-w-2xl text-sm md:text-base text-white/90">
                Let’s bring your vision to life — software, cloud, and AI
                solutions designed for your goals.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT FORM + DETAILS */}
      <Reveal delay={150}>
        <section className="py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Contact Info */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-[#1C3D72]">CONTACT US</h2>
              <p className="text-sm text-[#42566A] mb-2">
                Reach out through phone, email, or our quick contact form.
              </p>

              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#e8f8ff] to-white border border-[#E3E8EF] rounded-lg p-3">
                  <div className="p-3 bg-white rounded-md shadow flex items-center">
                    <Mail className="w-5 h-5 text-[#1C3D72]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-xs text-[#607B8B]">
                      coltektechnologies@gmail.com
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#e6f7f2] to-white border border-[#E3E8EF] rounded-lg p-3">
                  <div className="p-3 bg-white rounded-md shadow flex items-center">
                    <Phone className="w-5 h-5 text-[#FFB766]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <div className="text-xs text-[#607B8B]">
                      +233 (0) 54 936 1771
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#eef8ff] to-white border border-[#E3E8EF] rounded-lg p-3">
                  <div className="p-3 bg-white rounded-md shadow flex items-center">
                    <MapPin className="w-5 h-5 text-[#5EC9F5]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Location</div>
                    <div className="text-xs text-[#607B8B]">
                      Sunyani, Ghana (Remote-friendly)
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#fff7ea] to-white border border-[#E3E8EF] rounded-lg p-3">
                  <div className="p-3 bg-white rounded-md shadow flex items-center">
                    <Clock className="w-5 h-5 text-[#7DE3C7]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Business Hours</div>
                    <div className="text-xs text-[#607B8B]">
                      Mon–Fri: 9:00 AM – 5:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp placeholder button */}
              <div className="mt-4">
                <a
                  href="https://wa.me/233000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white py-2 px-4 rounded-lg shadow hover:brightness-90 transition"
                >
                  {/* simple phone icon using existing Phone icon */}
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">WhatsApp: +233 54 936 1771</span>
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-3 mt-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/coltektechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Facebook className="text-[#1C3D72]" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/coltektechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Instagram className="text-[#1C3D72]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/coltektechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Linkedin className="text-[#1C3D72]" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/coltekdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023.svg"
                    alt="X"
                    className="w-5 h-5"
                  />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@coltektechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                    alt="YouTube"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[#102A43] mb-3">
                Send Us a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                aria-live="polite"
              >
                {/* Web3Forms Access Key (EMPTY) */}
                <input
                  type="hidden"
                  name="access_key"
                  value="6434308c-6eff-4352-8d7e-513d733ee4a4"
                />

                {/* ensure messages get forwarded to the company email */}
                <input
                  type="hidden"
                  name="to"
                  value="coltektechnologies@gmail.com"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="COLTEK Technologies"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Website Contact Form Submission"
                />

                <div>
                  <label className="text-sm font-medium text-[#102A43]">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#102A43]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#102A43]">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm"
                    placeholder="Subject (optional)"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#102A43]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm h-32"
                    placeholder="Write your message..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-2 px-5 py-3 flex items-center justify-center gap-2 rounded-lg font-semibold text-white shadow-md transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "linear-gradient(90deg, #1C3D72 0%, #2EC4B6 100%)",
                    }}
                  >
                    {sending ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-sm text-[#607B8B]">
                    We reply within 48 hours
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Reveal>

      {/* MAP + FAQ */}
      <Reveal delay={250}>
        <section className="py-6 md:py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Map (soft grayscale) */}
            <div>
              <div className="rounded-lg overflow-hidden border border-[#E3E8EF] shadow-sm">
                <div className="w-full h-64 bg-[#f5f7f9] flex items-center justify-center">
                  <iframe
                    title="COLTEK Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.434045334237!2d-2.3277!3d7.3377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbf9f5a9bb4abf%3A0x72d55c5a0adb5d71!2sSunyani!5e0!3m2!1sen!2sgh!4v00000000000"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block grayscale filter contrast-90"
                    style={{ minHeight: 256 }}
                  />
                </div>

                <div className="p-4 bg-white">
                  <div className="text-sm font-semibold">Sunyani, Ghana</div>
                  <div className="text-xs text-[#607B8B]">
                    We operate remotely — no public office yet.
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-semibold text-[#1C3D72] mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqItems.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="border border-[#E3E8EF] rounded-lg overflow-hidden"
                    >
                      <button
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-[#fbfdff] transition"
                      >
                        <span className="text-sm font-medium text-[#102A43]">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#1C3D72] transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        />
                      </button>

                      <div
                        id={`faq-${i}`}
                        className={`px-4 pt-0 pb-3 text-sm text-[#42566A] transition-[max-height] duration-300 ease-out overflow-hidden ${isOpen ? "max-h-40" : "max-h-0"}`}
                      >
                        <div className="pt-2">{item.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SERVICE CARDS ROW */}
      <Reveal delay={350}>
        <section className="py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded bg-[#e8f8ff]">
                    <Users className="w-6 h-6 text-[#1C3D72]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#102A43]">
                      Customer Support
                    </div>
                    <div className="text-sm text-[#607B8B]">
                      Get in touch with our support team
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded bg-[#fff7ea]">
                    <Globe className="w-6 h-6 text-[#FFB766]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#102A43]">Sales</div>
                    <div className="text-sm text-[#607B8B]">
                      Contact our sales professionals
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded bg-[#eef8ff]">
                    <Star className="w-6 h-6 text-[#5EC9F5]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#102A43]">
                      Technical Support
                    </div>
                    <div className="text-sm text-[#607B8B]">
                      Need technical help? Our engineers are ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* STATS / VALUES ROW */}
      <Reveal delay={450}>
        <section className="py-6 md:py-8 bg-[#f8fbff]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-[#1C3D72]" />
                </div>
                <div className="font-semibold">24/7 Support</div>
              </div>

              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-[#1C3D72]" />
                </div>
                <div className="font-semibold">500+ Clients</div>
              </div>

              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-[#1C3D72]" />
                </div>
                <div className="font-semibold">98% Rating</div>
              </div>

              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-[#1C3D72]" />
                </div>
                <div className="font-semibold">10+ Countries</div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="w-full bg-[#102A43] text-white py-6 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="font-semibold">COLTEK Technologies</div>
            <div className="text-xs text-[#CDE9EF] mt-2">
              Building innovative software and digital solutions.
            </div>
          </div>

          <div>
            <div className="font-semibold">Support</div>
            <div className="text-xs text-[#CDE9EF] mt-2">Help Center</div>
            <div className="text-xs text-[#CDE9EF] mt-1">Contact</div>
          </div>

          <div>
            <div className="font-semibold">Account</div>
            <div className="text-xs text-[#CDE9EF] mt-2">Your Account</div>
            <div className="text-xs text-[#CDE9EF] mt-1">Privacy</div>
          </div>

          <div>
            <div className="font-semibold">Quick Links</div>
            <div className="text-xs text-[#CDE9EF] mt-2">About</div>
            <div className="text-xs text-[#CDE9EF] mt-1">Contact</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 text-center text-sm text-[#CDE9EF]">
          © {new Date().getFullYear()} COLTEK Technologies — Built with care by
          the COLTEK team
        </div>
      </footer>
    </div>
  );
};

export default Contact;
