import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import ServicesCTA from "@/components/ServicesCTA";
import {
  Cloud,
  Database,
  Shield,
  Lock,
  Server,
  RefreshCw,
  Cpu,
  TrendingUp,
  Activity,
  Zap,
  DollarSign,
  Globe,
  Users,
  HardDrive,
  Rocket,
  Maximize,
} from "lucide-react";

const CloudSolutions = () => {
  const developmentSteps = [
    {
      title: "Assessment & Discovery",
      description:
        "We analyze your existing infrastructure, applications, and workloads to create a comprehensive migration strategy that meets your specific requirements, business goals, and determines the best approach for your cloud migration.",
      position: "left" as const,
    },
    {
      title: "Strategy & Planning",
      description:
        "Develop a detailed migration roadmap and timelines, resource allocation, and risk mitigation strategies. We prioritize workloads that benefit most from cloud solutions and create a phased approach for minimal disruption.",
      position: "right" as const,
    },
    {
      title: "Cloud Architecture Design",
      description:
        "Design a scalable, secure, and cost-effective cloud architecture tailored to your business requirements. We implement best practices for high availability, disaster recovery, security, and performance optimization.",
      position: "left" as const,
    },
    {
      title: "Migration Execution",
      description:
        "Execute the migration with minimal downtime using proven tools and methodologies. Our team handles data migration, application refactoring, and integration, ensuring a smooth transition with thorough testing at every step.",
      position: "right" as const,
    },
    {
      title: "Testing & Validation",
      description:
        "Comprehensive testing to ensure all systems function correctly and meet performance benchmarks. We validate data integrity, application functionality, security configurations, and conduct user acceptance testing before final cutover.",
      position: "left" as const,
    },
    {
      title: "Optimization & Support",
      description:
        "Post-migration optimization to enhance performance and reduce costs. We continuously monitor and fine-tune resources, implement cost optimization strategies, and provide ongoing technical support to ensure sustained success.",
      position: "right" as const,
    },
  ];

  const whyChooseBenefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce capital expenses and pay only for what you use.",
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-100",
      hover: "hover:shadow-green-300/60",
    },
    {
      title: "Scalability",
      description: "Scale resources up or down instantly based on demand.",
      icon: Maximize,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      hover: "hover:shadow-indigo-300/60",
    },
    {
      title: "Global Reach",
      description: "Deploy applications worldwide with low latency.",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-100",
      hover: "hover:shadow-blue-300/60",
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security and compliance.",
      icon: Lock,
      color: "text-red-600",
      bg: "bg-red-100",
      hover: "hover:shadow-red-300/60",
    },
    {
      title: "Disaster Recovery",
      description: "Automated backups and quick recovery options.",
      icon: HardDrive,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      hover: "hover:shadow-yellow-300/60",
    },
    {
      title: "Innovation Speed",
      description: "Deploy faster and iterate quickly.",
      icon: Rocket,
      color: "text-purple-600",
      bg: "bg-purple-100",
      hover: "hover:shadow-purple-300/60",
    },
    {
      title: "Collaboration",
      description: "Enable remote teams to work seamlessly.",
      icon: Users,
      color: "text-pink-600",
      bg: "bg-pink-100",
      hover: "hover:shadow-pink-300/60",
    },
    {
      title: "Performance",
      description: "High-performance computing resources.",
      icon: Zap,
      color: "text-cyan-600",
      bg: "bg-cyan-100",
      hover: "hover:shadow-cyan-300/60",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION: Deep Gradient (Primary Brand Color) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-800 text-white py-24 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000" />
        </div>

        {/* Floating cloud icons */}
        <div className="absolute inset-0 opacity-20">
          {[
            { Icon: Database, pos: "top-24 right-32", delay: "0s", size: "w-12 h-12" },
            { Icon: Shield, pos: "top-40 right-64", delay: "0.5s", size: "w-14 h-14" },
            { Icon: Server, pos: "bottom-40 right-48", delay: "1s", size: "w-10 h-10" },
            { Icon: Lock, pos: "top-56 right-80", delay: "1.5s", size: "w-12 h-12" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`absolute ${item.pos} ${item.size} text-white opacity-40 animate-float-gentle`}
              style={{ animationDelay: item.delay }}
            >
              <item.Icon className="w-full h-full" strokeWidth={1.5} />
            </div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content - Hero text and CTAs */}
            <div className="max-w-xl space-y-8 animate-fade-in-up">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <Cloud className="w-5 h-5 text-cyan-300" strokeWidth={2} />
                <span className="text-sm font-medium text-white">
                  Enterprise Cloud Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Scale Your
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                  Cloud Infrastructure
                </span>
              </h1>

              <p className="text-xl text-blue-200 leading-relaxed">
                Migrate, manage, and optimize your infrastructure with
                enterprise-grade cloud solutions. Scale effortlessly, reduce
                costs, and accelerate innovation with our comprehensive cloud
                services.
              </p>

              {/* Cloud Platform Badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "AWS", icon: Cloud },
                  { name: "Azure", icon: Cloud },
                  { name: "Google Cloud", icon: Cloud },
                ].map((platform, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg h-full"
                  >
                    <platform.icon
                      className="w-5 h-5 text-cyan-300 group-hover:text-cyan-200 transition-colors"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-semibold">
                      {platform.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {[
                  { number: "60%+", label: "Cost Savings", icon: TrendingUp },
                  { number: "24/7", label: "Support", icon: Activity },
                ].map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center transform hover:scale-105 transition-all duration-300 group hover:bg-white/15 h-full min-h-24 flex flex-col justify-center"
                    >
                      <StatIcon
                        className="w-6 h-6 text-cyan-300 mb-2 mx-auto group-hover:scale-110 transition-transform"
                        strokeWidth={2}
                      />
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs text-blue-200">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all duration-300 border-0"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full px-8 py-6 text-base border border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Space for decorations */}
            <div className="relative hidden lg:block h-96"></div>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}

      {/* SERVICES SECTION: Light Blue/Cyan Gradient (Great contrast for white cards) */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl font-bold text-gray-900">
              Cloud Services We Offer
            </h2>
            <p className="text-gray-700">
              Comprehensive cloud solutions to power your digital transformation
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                description:
                  "Seamlessly migrate your applications, data, and workloads to the cloud with minimal disruption and zero data loss.",
                features: [
                  "Assessment & planning",
                  "Data migration strategies",
                  "Application modernization",
                  "Post-migration optimization",
                ],
                icon: RefreshCw,
                gradient: "from-blue-600 to-cyan-500",
                glowColor: "rgba(37, 99, 235, 0.3)",
              },
              {
                title: "Infrastructure as a Service",
                description:
                  "Build and manage scalable, flexible infrastructure tailored to your business needs with enterprise-grade reliability.",
                features: [
                  "Virtual machines & containers",
                  "Network configuration",
                  "Load balancing",
                  "Auto-scaling solutions",
                ],
                icon: Server,
                gradient: "from-indigo-600 to-blue-700",
                glowColor: "rgba(67, 56, 202, 0.3)",
              },
              {
                title: "Cloud Storage Solutions",
                description:
                  "Secure, scalable storage solutions with automated backups, disaster recovery, and data archiving capabilities.",
                features: [
                  "Object & block storage",
                  "Backup & disaster recovery",
                  "Data archiving",
                  "Content delivery network",
                ],
                icon: Database,
                gradient: "from-purple-600 to-indigo-700",
                glowColor: "rgba(109, 40, 217, 0.3)",
              },
              {
                title: "Database Management",
                description:
                  "Managed database services with high availability, automated backups, and performance optimization.",
                features: [
                  "Relational databases (SQL)",
                  "NoSQL databases",
                  "Database migration",
                  "Performance tuning",
                ],
                icon: Cpu,
                gradient: "from-green-600 to-teal-700",
                glowColor: "rgba(5, 150, 105, 0.3)",
              },
              {
                title: "Cloud Security",
                description:
                  "Enterprise-grade security solutions to protect your cloud infrastructure and ensure compliance with industry standards.",
                features: [
                  "Identity & access management",
                  "Encryption & key management",
                  "Security monitoring",
                  "Compliance management",
                ],
                icon: Shield,
                gradient: "from-red-600 to-orange-700",
                glowColor: "rgba(220, 38, 38, 0.3)",
              },
              {
                title: "Cloud Monitoring & Management",
                description:
                  "24/7 monitoring, performance optimization, and cost management to ensure your cloud infrastructure runs optimally.",
                features: [
                  "Real-time monitoring",
                  "Performance analytics",
                  "Cost optimization",
                  "Resource management",
                ],
                icon: TrendingUp,
                gradient: "from-pink-600 to-rose-700",
                glowColor: "rgba(219, 39, 119, 0.3)",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 transition-all duration-500 border border-gray-100 relative overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50"
                >
                  {/* Gradient glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                    style={{
                      background: `radial-gradient(circle at top, ${service.glowColor}, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon container */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${service.gradient} transform transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    {/* Service title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>

                    {/* Service description */}
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                      {" "}
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End of Services Section */}

      {/* PLATFORMS SECTION: Deep Blue/Indigo Gradient (Maximum Contrast) */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-indigo-950">
        <div className="container mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl font-bold text-white">
              Cloud Platforms We Support
            </h2>
            <p className="text-gray-300">
              Expertise across major cloud platforms to meet your specific needs
            </p>
          </div>

          {/* Platforms grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                description:
                  "Leverage the world's most comprehensive cloud platform with unmatched reliability and scalability.",
                features: [
                  "EC2, S3, Lambda",
                  "RDS, DynamoDB",
                  "CloudFront CDN",
                  "IAM & Security Groups",
                  "Auto Scaling & Load Balancing",
                ],
              },
              {
                name: "Microsoft Azure",
                description:
                  "Seamless integration with Microsoft ecosystem and enterprise-grade cloud services for hybrid solutions.",
                features: [
                  "Virtual Machines & App Services",
                  "Azure SQL & Cosmos DB",
                  "Azure Active Directory",
                  "Azure DevOps",
                  "Hybrid cloud solutions",
                ],
              },
              {
                name: "Google Cloud Platform",
                description:
                  "Advanced data analytics, machine learning capabilities, and cutting-edge infrastructure solutions.",
                features: [
                  "Compute Engine & App Engine",
                  "Cloud Storage & BigQuery",
                  "Kubernetes Engine",
                  "AI & ML services",
                  "Firebase integration",
                ],
              },
            ].map((platform, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/80 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-700/50 h-full"
                style={{
                  background: "rgba(17, 24, 39, 0.8)",
                  borderColor: "#3B82F6",
                  borderWidth: "1px",
                }}
              >
                {/* Cloud icon illustration */}
                <div className="w-20 h-16 mx-auto mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    {/* Stylized cloud shape */}
                    <div className="relative">
                      <div className="w-16 h-10 bg-gradient-to-br from-cyan-300/80 to-blue-300/60 rounded-full relative shadow-lg">
                        {" "}
                        <div className="absolute -top-3 left-4 w-10 h-10 bg-gradient-to-br from-cyan-300/90 to-blue-300/70 rounded-full"></div>
                        <div className="absolute -top-2 right-2 w-8 h-8 bg-gradient-to-br from-cyan-300/85 to-blue-300/65 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform name */}
                <h3 className="text-2xl font-bold mb-3 text-white text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {platform.name}
                </h3>

                {/* Platform description */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed text-center">
                  {" "}
                  {platform.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {platform.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      {" "}
                      <span className="text-cyan-400 mt-0.5">•</span>{" "}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End of Platforms Section */}

      {/* BENEFITS SECTION (Why Choose Cloud Solutions): Warm Light Gray (Neutral break) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Cloud Solutions
            </h2>
            <p className="text-gray-600">
              Transform your business with the power of cloud computing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/90 rounded-xl p-6 text-center shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group hover:shadow-2xl ${benefit.hover}`}
                >
                  {/* Icon container */}
                  <div
                    className={`w-16 h-16 ${benefit.bg} rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-105`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${benefit.color} stroke-2`}
                    />
                  </div>

                  {/* Benefit title */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {benefit.title}
                  </h3>

                  {/* Benefit description */}
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End of Benefits Section */}

      {/* Development Process Section: White (Standard background) */}
      <DevelopmentProcess steps={developmentSteps} />

      {/* CTA Section */}
      <ServicesCTA
        primaryButtonText="Get Cloud Consultation"
        secondaryButtonText="Schedule Assessment"
      />

      <Footer />

      <style jsx>{`
        /* Fade in up animation */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Float animation */
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        /* Gentle float for icons */
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        /* Animation classes */
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        /* Animation delays */
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default CloudSolutions;