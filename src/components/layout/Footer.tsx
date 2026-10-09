// ========== FOOTER ==========
// Global footer (CLAUDE.md §8). Rendered by Layout and, like Navbar, also
// directly by the Services pages.
//
// Link destinations and labels are unchanged from the original. Several of
// them point at routes that do not exist — see the Stage 3 report.
import { NavLink } from "react-router-dom";
import images from "../../assets/images/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ACCOUNT_LINKS = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Login / Register", to: "/login" },
  { label: "Services", to: "/services" },
  { label: "Get in Touch", to: "/contact" },
];

const QUICK_LINKS = [
  { label: "Privacy Policy", to: "/legal#privacy" },
  { label: "Terms & Conditions", to: "/legal#terms" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/services" },
];

const SOCIAL_LINKS = [
  {
    href: "https://web.facebook.com/coltektechnologies",
    icon: images.fb,
    label: "Visit our Facebook page",
  },
  {
    href: "https://x.com/coltekdev",
    icon: images.twiter,
    label: "Visit our X (Twitter) page",
  },
  {
    href: "https://www.linkedin.com/company/coltek-technologies",
    icon: images.linkedin,
    label: "Visit our LinkedIn page",
  },
  {
    href: "https://www.instagram.com/coltektechnologies/",
    icon: images.instagram,
    label: "Visit our Instagram page",
  },
];

// Shared by every footer link so hover and focus behave identically.
const footerLinkClass =
  "block rounded-control text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) => (
  <div className="space-y-3">
    <h4 className="mb-4 text-lg font-semibold text-white">{title}</h4>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={`${link.label}-${link.to}`}>
          <NavLink to={link.to} className={footerLinkClass}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--footer-bg-color)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-10 lg:py-16">
        {/* Top grid */}
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mb-12 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: brand + newsletter */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img
              src={images.logo}
              className="mb-4 h-20 w-auto"
              alt="Coltek Technologies"
            />

            <p className="text-sm leading-relaxed text-gray-300">
              Transforming potentials into excellence by inspiring growth,
              fostering innovation and leading with integrity
            </p>

            <div className="pt-2">
              {/* The input previously had no associated label. */}
              <label
                htmlFor="footer-newsletter-email"
                className="mb-3 block text-sm font-bold text-white"
              >
                Subscribe to our newsletter
              </label>

              <div className="relative flex items-center">
                <Input
                  id="footer-newsletter-email"
                  type="email"
                  tone="onDark"
                  placeholder="Enter your email"
                  className="pr-12"
                />
                <Button
                  type="button"
                  size="icon"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 h-8 w-8 bg-blue-600 hover:bg-blue-700"
                >
                  <img src={images.vector} alt="" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: support */}
          <div className="space-y-3">
            <h4 className="mb-4 text-lg font-semibold text-white">Support</h4>

            <p className="text-sm leading-relaxed text-gray-300">
              Remote Operations
              <br />
              Serving Clients Worldwide
              <br />
              Registered in Ghana
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <a href="mailto:info@coltek.com" className={footerLinkClass}>
                info@coltektechnologies.io
              </a>
              <a href="tel:+233244567890" className={footerLinkClass}>
                +233 538 008 122
              </a>
            </div>
          </div>

          <FooterColumn title="Account" links={ACCOUNT_LINKS} />
          <FooterColumn title="Quick Links" links={QUICK_LINKS} />
        </div>

        {/* Download app + social */}
        <div className="border-t border-white/10 pb-6 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Download App</h4>
              <img
                src={images.app}
                alt="Download on the App Store and Google Play"
                className="w-auto cursor-pointer transition-opacity hover:opacity-80"
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white md:text-right">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-pill bg-white/10 p-2 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <img src={social.icon} alt="" className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Coltek Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
