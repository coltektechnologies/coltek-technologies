// Service card data for the Home page.
//
// Card images are the 4096px-wide assets. Cloud and AI/ML previously used
// "CS ServiceCard.webp" (50x50) and "AIML ServiceCard.webp" (64x64) — icon
// sprites that were being stretched across a 144px-tall card header.
//
// `path` was added so destinations live with the data instead of being
// derived by matching substrings of the title at render time. That inline
// mapping sent three of the four cards to routes that do not exist.
import SoftwareSolutionsImg from "../assets/ServicesPageImages/SoftwareSolutionsImg-card.webp";
import CloudSolutionImg from "../assets/ServicesPageImages/CloudSolutionImg-card.webp";
import MobileAppImg from "../assets/ServicesPageImages/MobileAppImg-card.webp";
import AIMLImg from "../assets/ServicesPageImages/AIMLImg-card.webp";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  /** Route for this service's detail page, as declared in AppRoutes. */
  path: string;
}

export const allServices: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Provide and manage website services",
    image: SoftwareSolutionsImg,
    icon: "🌐",
    path: "/Services/SoftwareSolutions",
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Provide Cloud hosting and service",
    image: CloudSolutionImg,
    icon: "☁️",
    path: "/Services/CloudSolutions",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create powerful cross-platform mobile applications",
    image: MobileAppImg,
    icon: "📱",
    path: "/Services/MobileAppDevelopment",
  },
  {
    id: 4,
    title: "AI/ML Solutions",
    description:
      "Leverage the power of artificial intelligence and machine learning",
    image: AIMLImg,
    icon: "🤖",
    path: "/Services/AIML",
  },
];
