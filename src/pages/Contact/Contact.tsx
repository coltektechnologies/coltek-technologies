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
  Clock,
  CheckCircle,
  AlertTriangle,
  X,
} from "lucide-react";

// Import your hero image
import ContactHeroImg from "../../assets/images/contact-hero (1).jpg";

/**
 * CONTACT PAGE (Hero Image Polish)
 *
 * ✔ Full hero image (no white gaps)
 * ✔ Correct cropping (object-cover)
 * ✔ Soft dark overlay for readability
 * ✔ Centered focus on mid-frame
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

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((p) => (p === i ? null : i));

  const pushToast = (toast: Omit<Toast, "id">) => {
    const id = ++toastCounter.current;
    setToasts((t) => [...t, { id, ...toast }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3000);
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

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

  const faqItems = [
    {
      q: "How do I get started with a project?",
      a: "You can reach out through our contact form or email us directly. Once we understand your needs, we’ll schedule a quick consultation to discuss goals, timelines, and the best approach.",
    },
    {
      q: "Can you build mobile apps for both iOS and Android?",
      a: "Yes! We develop both cross-platform and native mobile apps for iOS and Android.",
    },
    {
      q: "Do you offer ongoing support after project delivery?",
      a: "Absolutely. We provide post-launch maintenance, updates, and continuous technical support.",
    },
    {
      q: "How much does a typical project cost?",
      a: "It depends on the complexity. After understanding your requirements, we provide a transparent quote.",
    },
    {
      q: "What if I'm not sure exactly what I need?",
      a: "No worries — we offer consultation to help shape your idea and recommend the best solution.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F4F7FA] text-[#102A43] flex flex-col">
      {/* TOASTS */}
      <div
        aria-live="polite"
        className="fixed top-5 right-5 z-50 flex flex-col gap-3"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`w-80 max-w-full transition-all duration-300 ${
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
              {t.message && <div className="mt-1 text-sm opacity-90">{t.message}</div>}
            </div>

            <button
              aria-label="Close toast"
              onClick={() => setToasts((s) => s.filter((x) => x.id !== t.id))}
              className="pl-2"
            >
              <X className="w-4 h-4 text-white opacity-90" />
            </button>
          </div>
        ))}
      </div>

      {/* HERO  */}
      <Reveal delay={50}>
        <section className="relative w-full overflow-hidden">
          <div
            className="
              relative
              h-[300px] 
              md:h-[380px] 
              lg:h-[450px]
              w-full
              flex items-center
              justify-start
            "
          >
            {/* Background Image Layer */}
            <img
              src={ContactHeroImg}
              alt="Contact Hero"
              className="
                absolute inset-0 w-full h-full
                object-cover
                object-center
              "
            />

            {/* Dark overlay improves readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* HERO CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
              <div className="text-sm text-white/80 mb-2">Home / Contact Us</div>

              <h1 className="text-2xl md:text-4xl font-extrabold">
                Contact Us
              </h1>

              <p className="mt-2 max-w-2xl text-sm md:text-base text-white/90">
                Let’s bring your vision to life. Software, cloud, and AI
                solutions designed for your goals.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT BODY */}
      <Reveal delay={150}>
        <section className="py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* LEFT INFO */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-[#1C3D72]">CONTACT US</h2>
              <p className="text-sm text-[#42566A] mb-2">
                Reach out through phone, email, or our contact form.
              </p>

              {/* Cards */}
              <div className="flex flex-col gap-3">

                {/* Email */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#e8f8ff] to-white border border-[#E3E8EF] rounded-lg p-3">
                  <div className="p-3 bg-white rounded-md shadow">
                    <Mail className="w-5 h-5 text-[#1C3D72]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-xs text-[#607B8B]">coltektechnologies@gmail.com</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#e6f7f2] to-white border border-[#E3E8EF] rounded-lg p-3">
                  <div className="p-3 bg-white rounded-md shadow">
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
                  <div className="p-3 bg-white rounded-md shadow">
                    <MapPin className="w-5 h-5 text-[#5EC9F5]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Location</div>
                    <div className="text-xs text-[#607B8B]">Sunyani, Ghana (Remote-friendly)</div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#fff7ea] to-white border border-[#E3E8EF] rounded-lg p-3">
                  <div className="p-3 bg-white rounded-md shadow">
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

              {/* WhatsApp */}
              <div className="mt-4">
                <a
                  href="https://wa.me/233549361771"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white py-2 px-4 rounded-lg shadow hover:brightness-90 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">WhatsApp: +233 54 936 1771</span>
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.facebook.com/coltektechnologies"
                  target="_blank"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  {/* simple phone icon using existing Phone icon */}
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">WhatsApp: +233 XX XXX XXXX</span>
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-3 mt-4">
                <a href="#" aria-label="Facebook" className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition">
                  <Facebook className="text-[#1C3D72]" />
                </a>

                <a
                  href="https://www.instagram.com/coltektechnologies"
                  target="_blank"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Instagram className="text-[#1C3D72]" />
                </a>

                <a
                  href="https://www.linkedin.com/company/coltek-technologies/"
                  target="_blank"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <Linkedin className="text-[#1C3D72]" />
                </a>

                <a
                  href="https://x.com/coltekdev"
                  target="_blank"
                  className="p-2 bg-white rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <X className="text-[#1C3D72] w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/@coltektechnologies"
                  target="_blank"
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

            {/* FORM */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[#102A43] mb-3">
                Send Us a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                aria-live="polite"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="6434308c-6eff-4352-8d7e-513d733ee4a4"
                />

                <input type="hidden" name="to" value="coltektechnologies@gmail.com" />
                <input type="hidden" name="from_name" value="COLTEK Technologies" />
                <input
                  type="hidden"
                  name="subject"
                  value="Website Contact Form Submission"
                />

                <div>
                  <label className="text-sm font-medium text-[#102A43]">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#102A43]">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#102A43]">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm"
                    placeholder="Subject (optional)"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#102A43]">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C3D72] outline-none transition text-sm h-32"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-2 px-5 py-3 flex items-center justify-center gap-2 rounded-lg font-semibold text-white shadow-md transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(90deg, #1C3D72 0%, #2EC4B6 100%)" }}
                  >
                    {sending ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-sm text-[#607B8B]">We reply within 48 hours</div>
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
            {/* MAP */}
            <div>
              <div className="rounded-lg overflow-hidden border border-[#E3E8EF] shadow-sm">
                <div className="w-full h-64 bg-[#f5f7f9] flex items-center justify-center">
                  <iframe
                    title="COLTEK Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.434045334237!2d-2.3277!3d7.3377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbf9f5a9bb4abf%3A0x72d55c5a0adb5d71!2sSunyani!5e0!3m2!1sen!2sgh!4v00000000000"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="block grayscale contrast-90"
                    style={{ minHeight: 256 }}
                  />
                </div>

                <div className="p-4 bg-white">
                  <div className="text-sm font-semibold">Sunyani, Ghana</div>
                  <div className="text-xs text-[#607B8B]">We operate remotely — no public office yet.</div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-semibold text-[#1C3D72] mb-4">Frequently Asked Questions</h3>

              <div className="space-y-3">
                {faqItems.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="border border-[#E3E8EF] rounded-lg overflow-hidden">
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
                          className={`w-5 h-5 text-[#1C3D72] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        id={`faq-${i}`}
                        className={`px-4 pt-0 pb-3 text-sm text-[#42566A] transition-[max-height] duration-300 ease-out overflow-hidden ${
                          isOpen ? "max-h-40" : "max-h-0"
                        }`}
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

      {/* FOOTER */}
      <footer className="w-full bg-[#102A43] text-white py-6 px-6 mt-10">
        <div className="max-w-6xl mx-auto text-center text-sm text-[#CDE9EF]">
          © {new Date().getFullYear()} COLTEK Technologies — Built with care by the COLTEK team
        </div>
      </footer>
    </div>
  );
};

export default Contact;
