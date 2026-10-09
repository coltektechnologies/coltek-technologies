// src/pages/Contact/Contact.tsx
//
// Stage 5D. The page keeps its own information architecture — channels,
// form, map, FAQ — and every word of its copy. The submit handler, the
// web3forms endpoint and all hidden fields are untouched.
//
// SURFACE RULE (see About.tsx): --card is #FFFFFF and --background is
// #F5F9FF, so a card must never sit on a section of its own colour.
//
// Defects this pass closed, all in the Stage 5D report:
//   * The page had no navbar offset, so it rendered under the fixed navbar.
//   * <form aria-live="polite"> made the whole form a live region, on top of
//     the separate toast region — two announcers for one page.
//   * FAQ answers were clamped to max-h-40, so the longest one clipped.
//   * Collapsed FAQ answers stayed exposed to assistive tech: max-h-0 with
//     overflow-hidden hides visually only, so all five were always readable.
//   * Four of the five social links had no accessible name, and four
//     target="_blank" links had no rel at all.
//   * The YouTube icon was hotlinked from upload.wikimedia.org.
import React, { useRef, useState } from "react";
import {
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  X,
  Youtube,
} from "lucide-react";

import Reveal from "../../components/Reveal";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";
import { Textarea } from "@/components/ui/textarea";
import { accentAt } from "@/lib/accents";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

type IconComponent = React.ComponentType<{ className?: string }>;

const CHANNELS: { label: string; value: string; Icon: IconComponent }[] = [
  { label: "Email", value: "coltektechnologies@gmail.com", Icon: Mail },
  { label: "Phone", value: "+233 (0) 54 936 1771", Icon: Phone },
  { label: "Location", value: "Accra, Ghana (Remote-friendly)", Icon: MapPin },
  { label: "Business Hours", value: "Mon–Fri: 9:00 AM – 5:00 PM", Icon: Clock },
];

// Every entry carries a label. Only Facebook had one before, so the other
// four announced as an unnamed "link". `rel` was missing entirely on the four
// that open in a new tab.
const SOCIALS: { label: string; href: string; Icon: IconComponent }[] = [
  {
    label: "COLTEK on Facebook",
    href: "https://www.facebook.com/coltektechnologies",
    Icon: Facebook,
  },
  {
    label: "COLTEK on Instagram",
    href: "https://www.instagram.com/coltektechnologies",
    Icon: Instagram,
  },
  {
    label: "COLTEK on LinkedIn",
    href: "https://www.linkedin.com/company/coltek-technologies/",
    Icon: Linkedin,
  },
  { label: "COLTEK on X", href: "https://x.com/coltekdev", Icon: X },
  {
    label: "COLTEK on YouTube",
    href: "https://www.youtube.com/@coltektechnologies",
    // Was an <img> hotlinked from upload.wikimedia.org.
    Icon: Youtube,
  },
];

const FAQ_ITEMS = [
  {
    q: "How do I get started with a project?",
    a: "You can reach out through our contact form or email us directly. Once we understand your needs, we'll schedule a quick consultation to discuss goals, timelines, and the best approach.",
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

type Toast = {
  id: number;
  type: "success" | "error";
  title: string;
  message?: string;
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const Contact: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastCounter = useRef(0);

  const pushToast = (toast: Omit<Toast, "id">) => {
    const id = ++toastCounter.current;
    setToasts((t) => [...t, { id, ...toast }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3000);
  };

  // Submission is unchanged: same endpoint, same FormData, same validation,
  // same toasts. UI refactoring stays UI refactoring (CLAUDE.md §5).
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

  return (
    // pt-nav offsets the fixed navbar. The page previously started at top:0
    // and rendered underneath it.
    <div className="min-h-screen w-full bg-background pt-nav text-foreground md:pt-nav-lg">
      {/* The page's single live region. The <form> also declared one. */}
      <div
        aria-live="polite"
        className="fixed right-5 top-5 z-50 flex flex-col gap-3"
      >
        {toasts.map((t) => (
          <Alert
            key={t.id}
            appearance="solid"
            variant={t.type === "success" ? "success" : "error"}
            title={t.title}
            className="w-80 max-w-full"
            onDismiss={() => setToasts((s) => s.filter((x) => x.id !== t.id))}
            dismissLabel="Close toast"
          >
            {t.message}
          </Alert>
        ))}
      </div>

      {/* The brand gradient rather than a photograph, matching About,
          Services and Portfolio. */}
      <PageHeader
        tone="brand"
        size="auto"
        className="py-20 md:py-28"
        align="left"
        eyebrow="Home / Contact Us"
        title="Contact Us"
        description="Let's bring your vision to life. Software, cloud, and AI solutions designed for your goals."
      />

      <ContactBody sending={sending} onSubmit={handleSubmit} />
      <MapAndFaq />
    </div>
  );
};

export default Contact;

// ---------------------------------------------------------------------------
// Channels + form — tinted section, so the cards are white.
// ---------------------------------------------------------------------------

function ContactBody({
  sending,
  onSubmit,
}: {
  sending: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Reveal>
      <section className="bg-background py-section md:py-section-lg">
        <div className="container-page grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {/* Channels */}
          <div className="flex flex-col gap-4">
            {/* Was an <h2> reading "CONTACT US", directly under an <h1>
                reading "Contact Us". */}
            <h2 className="text-2xl font-bold text-primary">
              Talk to our team
            </h2>
            <p className="text-sm text-muted-foreground">
              Reach out through phone, email, or our contact form.
            </p>

            <ul className="flex flex-col gap-3">
              {CHANNELS.map(({ label, value, Icon }, i) => {
                const accent = accentAt(i);

                return (
                  <li key={label}>
                    <Card
                      variant="flat"
                      className="flex items-center gap-4 p-3"
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-control",
                          accent.chip,
                        )}
                      >
                        <Icon className={cn("h-5 w-5", accent.icon)} />
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {label}
                        </p>
                        <p className="text-xs text-muted-foreground">{value}</p>
                      </div>
                    </Card>
                  </li>
                );
              })}
            </ul>

            {/* #25D366 is WhatsApp's own brand green — an external service's
                identity, not an invented COLTEK colour, so it stays. */}
            <div className="mt-2">
              <Button
                asChild
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90"
              >
                <a
                  href="https://wa.me/233549361771"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp: +233 54 936 1771
                </a>
              </Button>
            </div>

            <ul className="mt-2 flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-pill border border-border bg-card text-primary transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal hover:text-brand-teal hover:shadow-card"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Card className="p-6 md:p-8">
            <h2 className="mb-4 text-lg font-bold text-foreground">
              Send Us a Message
            </h2>

            {/* aria-live removed: the toast region above is the page's
                announcer, and a live region around an entire form makes
                assistive tech re-read it on any re-render. */}
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                type="hidden"
                name="access_key"
                value="6434308c-6eff-4352-8d7e-513d733ee4a4"
              />
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

              <FormField id="contact-name" label="Name" required>
                {(field) => (
                  <Input
                    {...field}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
                )}
              </FormField>

              <FormField id="contact-email" label="Email" required>
                {(field) => (
                  <Input
                    {...field}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                )}
              </FormField>

              <FormField id="contact-subject" label="Subject">
                {(field) => (
                  <Input
                    {...field}
                    name="subject"
                    type="text"
                    placeholder="Subject (optional)"
                  />
                )}
              </FormField>

              <FormField id="contact-message" label="Message" required>
                {(field) => (
                  <Textarea
                    {...field}
                    name="message"
                    required
                    className="h-32"
                    placeholder="Write your message..."
                  />
                )}
              </FormField>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  variant="brand"
                  size="lg"
                  loading={sending}
                  className="w-full sm:w-auto"
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && (
                    <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                </Button>

                <p className="text-sm text-muted-foreground">
                  We reply within 48 hours
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Map + FAQ — white section, so the cards are tinted.
// ---------------------------------------------------------------------------

function MapAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq((p) => (p === i ? null : i));

  return (
    <Reveal>
      <section className="border-t border-border bg-card py-section md:py-section-lg">
        <div className="container-page grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {/* Map */}
          <Card variant="muted" className="overflow-hidden">
            <iframe
              title="COLTEK location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.434045334237!2d-2.3277!3d7.3377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbf9f5a9bb4abf%3A0x72d55c5a0adb5d71!2sSunyani!5e0!3m2!1sen!2sgh!4v00000000000"
              width="100%"
              height={256}
              loading="lazy"
              className="block h-64 w-full grayscale"
            />

            <div className="border-t border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">
                Sunyani, Ghana
              </p>
              <p className="text-xs text-muted-foreground">
                We operate remotely — no public office yet.
              </p>
            </div>
          </Card>

          {/* FAQ */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-primary">
              Frequently Asked Questions
            </h2>

            <ul className="space-y-3">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openFaq === i;

                return (
                  <li key={item.q}>
                    <Card variant="muted" className="overflow-hidden">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${i}`}
                          onClick={() => toggleFaq(i)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                        >
                          <span className="text-sm font-medium text-foreground">
                            {item.q}
                          </span>

                          <ChevronDown
                            className={cn(
                              "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                              isOpen && "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </h3>

                      {/* grid-rows 0fr -> 1fr animates to the answer's natural
                          height. The previous max-h-40 clamp cut off the
                          longest answer at narrow widths. `inert` keeps the
                          collapsed answer out of the reading and tab order —
                          overflow-hidden alone hides it visually only. */}
                      <div
                        id={`faq-panel-${i}`}
                        inert={!isOpen}
                        className={cn(
                          "grid transition-[grid-template-rows] duration-300 ease-out",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
