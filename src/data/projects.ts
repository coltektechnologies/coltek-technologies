// Project data, shared by the Portfolio page and the Home page's
// "Featured projects" section. Previously this lived inline in Portfolio.tsx.
//
// The screenshots are WebP derivatives capped at 800px wide. The .png
// originals were palette-mode and totalled 2.36MB for images that render at
// roughly 300px — opendoor.png alone was 386KB for a 458x401 frame. They were
// also caught by the `assetFileNames` rule in vite.config.ts, which sends
// every .png to the dist root UNHASHED, so they shipped without cache
// busting. As .webp they get hashed filenames under dist/assets like
// everything else. The originals are still on disk.
import Inventory from "../assets/portfolio/inventory.webp";
import Banking from "../assets/portfolio/banking.webp";
import CRM from "../assets/portfolio/crm.webp";
import Product from "../assets/portfolio/product.webp";
import Retail from "../assets/portfolio/retail.webp";
import Commerce from "../assets/portfolio/commerce.webp";
import opendoor from "../assets/images/opendoor.webp";

export type Category =
  | "All"
  | "Web Development"
  | "Mobile Apps"
  | "Cloud"
  | "AI Solutions";

export type Project = {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  tags?: string[];
  image?: string;
  featured?: boolean;
  url?: string;
};

export const projects: Project[] = [
  {
    id: "p7",
    title: "Church Management System",
    excerpt:
      "An intuitive church management system for managing church activities and members.",
    category: "Web Development",
    tags: ["SaaS", "Cloud"],
    image: opendoor,
    url: "https://open-door.site/",
  },
  {
    id: "p1",
    title: "AI-Powered Inventory System",
    excerpt:
      "Smart inventory predictions and automatic reorder suggestions for growing businesses.",
    category: "AI Solutions",
    tags: ["AI", "Inventory", "Analytics"],
    image: Inventory,
  },
  {
    id: "p2",
    title: "Mobile Banking App",
    excerpt:
      "Secure mobile banking with seamless onboarding and biometric authentication.",
    category: "Mobile Apps",
    tags: ["iOS", "Android", "Security"],
    image: Banking,
  },
  {
    id: "p3",
    title: "Cloud-Based CRM",
    excerpt:
      "Scalable CRM to manage leads, automate tasks, and improve sales workflows.",
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
    excerpt:
      "Analytics-first dashboard to track product performance and team KPIs.",
    category: "Web Development",
    tags: ["Dashboard", "Analytics"],
    image: Product,
    featured: true,
  },
  {
    id: "p6",
    title: "Retail Mobile App (Offline-first)",
    excerpt:
      "An intuitive retail app with offline-first capabilities for emerging markets.",
    category: "Mobile Apps",
    tags: ["Offline", "Sync"],
    image: Retail,
  },
];

// The three shown on the Home page. These are the highest-resolution
// screenshots in the set (~1024px), so they stay sharp on retina displays.
export const featuredProjects: Project[] = [
  projects.find((p) => p.id === "p5")!, // Product dashboard — flagged `featured`
  projects.find((p) => p.id === "p1")!, // AI inventory
  projects.find((p) => p.id === "p4")!, // E-commerce
];
