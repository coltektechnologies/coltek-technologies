export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const allServices: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: '🌐'
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android',
    icon: '📱'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services',
    icon: '☁️'
  },
  {
    id: 5,
    title: 'AI & ML',
    description: 'Artificial Intelligence and Machine Learning solutions',
    icon: '🤖'
  },
  {
    id: 6,
    title: 'DevOps',
    description: 'CI/CD pipelines and infrastructure automation',
    icon: '🔄'
  }
];

// Group services for desktop view (3 per group)
export const serviceGroups = [
  allServices.slice(0, 3),
  allServices.slice(3, 6),
  allServices.slice(0, 3) // Repeating to ensure smooth carousel
];
