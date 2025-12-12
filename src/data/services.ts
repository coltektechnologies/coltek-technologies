// Import service card images - using WebP versions
import SoftwareSolutionsImg from "../assets/ServicesPageImages/SoftwareSolutionsImg.webp";
import CS_ServiceCard from "../assets/ServicesPageImages/CS ServiceCard.webp";
import MobileAppServiceCard from "../assets/ServicesPageImages/MobileAppServiceCard.webp";
import AIML_ServiceCard from "../assets/ServicesPageImages/AIML ServiceCard.webp";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  buttonColor?: string;
}

export const allServices: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Provide and manage website services",
    image: SoftwareSolutionsImg,
    icon: '🌐',
    buttonColor: "bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6] text-white hover:opacity-90"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Provide Cloud hosting and service",
    image: CS_ServiceCard,
    icon: '☁️',
    buttonColor: "bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6] text-white hover:opacity-90"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create powerful cross-platform mobile applications",
    image: MobileAppServiceCard,
    icon: '📱',
    buttonColor: "bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6] text-white hover:opacity-90"
  },
  {
    id: 4,
    title: "AI/ML Solutions",
    description: "Leverage the power of artificial intelligence and machine learning",
    image: AIML_ServiceCard,
    icon: '🤖',
    buttonColor: "bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6] text-white hover:opacity-90"
  }
];

// Group services for desktop view (2 per group)
export const serviceGroups = [
  {
    id: 1,
    services: [allServices[0], allServices[1]]
  },
  {
    id: 2,
    services: [allServices[2], allServices[3]]
  }
];
