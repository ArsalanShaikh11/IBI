// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle2, ArrowRight } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       title: 'Business Consulting',
//       description: 'Strategic guidance and solutions to optimize your business operations and drive growth.',
//       features: [
//         'Strategic Planning',
//         'Process Optimization',
//         'Market Analysis',
//         'Risk Management'
//       ]
//     },
//     {
//       title: 'Technology Solutions',
//       description: 'Cutting-edge technology implementation and digital transformation services.',
//       features: [
//         'Digital Transformation',
//         'Cloud Solutions',
//         'Custom Software Development',
//         'System Integration'
//       ]
//     },
//     {
//       title: 'Project Management',
//       description: 'Professional project delivery and resource optimization services.',
//       features: [
//         'Project Planning',
//         'Resource Allocation',
//         'Risk Mitigation',
//         'Quality Assurance'
//       ]
//     }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative h-[400px] flex items-center"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Our Services
//           </motion.h1>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-xl max-w-2xl mx-auto"
//           >
//             Comprehensive solutions tailored to meet your business needs
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Services Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white rounded-lg shadow-lg p-8"
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
//                 <p className="text-gray-600 mb-6">{service.description}</p>
//                 <ul className="space-y-3 mb-6">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-start">
//                       <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
//                   Learn More
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               A systematic approach to delivering exceptional results
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
//               { step: '02', title: 'Strategy', description: 'Developing a tailored solution' },
//               { step: '03', title: 'Implementation', description: 'Executing the plan with precision' },
//               { step: '04', title: 'Optimization', description: 'Continuous improvement and refinement' }
//             ].map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="text-center"
//               >
//                 <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;


import React, { useState, useEffect } from "react";
import {
  Shield,
  Users,
  Building2,
  Camera,
  Lock,
  Bell,
  Radio,
  Car,
  Dog,
  Fingerprint,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  Award,
  Star,
  Map,
  Calendar,
  FileText,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";
import { JobApplicationForm } from "../components/jobApplicationForm";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface JobOpening {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
}

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<
    "overview" | "requirements" | "training"
  >("overview");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const services: Service[] = [
    {
      id: 1,
      icon: <Shield className="w-12 h-12" />,
      title: "Armed Security Services",
      description:
        "Professional armed security personnel trained to handle high-risk situations and protect valuable assets.",
      features: [
        "24/7 armed protection",
        "Highly trained personnel",
        "Risk assessment and management",
        "Emergency response protocols",
        "Tactical training",
      ],
    },
    {
      id: 2,
      icon: <Building2 className="w-12 h-12" />,
      title: "Commercial Security",
      description:
        "Comprehensive security solutions for businesses, office buildings, and commercial properties.",
      features: [
        "Access control systems",
        "Surveillance monitoring",
        "Visitor management",
        "Emergency planning",
        "Security audits",
      ],
    },
    {
      id: 3,
      icon: <Camera className="w-12 h-12" />,
      title: "Surveillance Systems",
      description:
        "State-of-the-art surveillance and monitoring solutions using advanced technology.",
      features: [
        "HD camera systems",
        "24/7 monitoring",
        "Video analytics",
        "Remote viewing",
        "Data storage",
      ],
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12" />,
      title: "Event Security",
      description:
        "Specialized security services for events, conferences, and large gatherings.",
      features: [
        "Crowd control",
        "VIP protection",
        "Access management",
        "Emergency response",
        "Risk assessment",
      ],
    },
    {
      id: 5,
      icon: <Lock className="w-12 h-12" />,
      title: "Residential Security",
      description:
        "Custom security solutions for homes and residential communities.",
      features: [
        "Home security systems",
        "Patrol services",
        "Smart home integration",
        "Emergency response",
        "Access control",
      ],
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      company: "Tech Innovations Inc",
      content:
        "The level of professionalism and attention to detail is outstanding. Our facilities have never been more secure.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Property Manager",
      company: "Luxury Residences",
      content:
        "Their residential security solutions give our tenants peace of mind. The smart home integration is seamless.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Event Director",
      company: "Global Events",
      content:
        "We've used their event security services for multiple high-profile conferences. They're simply the best.",
      rating: 5,
    },
  ];

  const jobOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Armed Security Officer",
      location: "New York",
      type: "Full-time",
      experience: "3+ years",
    },
    {
      id: 2,
      title: "Security Systems Technician",
      location: "Los Angeles",
      type: "Full-time",
      experience: "2+ years",
    },
    {
      id: 3,
      title: "Security Operations Manager",
      location: "Chicago",
      type: "Full-time",
      experience: "5+ years",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
            alt="Security Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Professional Security Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Protecting what matters most with cutting-edge technology and
            trained professionals
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Users />, value: "1000+", label: "Clients Protected" },
            { icon: <Clock />, value: "24/7", label: "Monitoring" },
            { icon: <CheckCircle2 />, value: "99.9%", label: "Success Rate" },
            {
              icon: <AlertTriangle />,
              value: "< 5min",
              label: "Response Time",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                data-animate
                className={`bg-gray-800 p-6 rounded-lg transform transition-all duration-500 hover:scale-105 ${
                  isVisible[`service-${service.id}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Industry Leading Expertise",
                description: "Over 20 years of experience in security services",
              },
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Certified Professionals",
                description: "Highly trained and certified security personnel",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Client Satisfaction",
                description: "99% client satisfaction rate with 24/7 support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-center mb-4 text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Programs Section */}
      <div className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Training Programs
          </h2>
          <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-2 rounded-lg ${
                activeTab === "overview" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("requirements")}
              className={`px-6 py-2 rounded-lg ${
                activeTab === "requirements" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              Requirements
            </button>
            <button
              onClick={() => setActiveTab("training")}
              className={`px-6 py-2 rounded-lg ${
                activeTab === "training" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              Training Process
            </button>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg">
            {activeTab === "overview" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Program Overview
                </h3>
                <p>
                  Our comprehensive training programs are designed to prepare
                  security professionals for any situation.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Basic Security Training (4 weeks)</li>
                  <li>Advanced Security Operations (8 weeks)</li>
                  <li>Specialized Tactical Training (12 weeks)</li>
                </ul>
              </div>
            )}
            {activeTab === "requirements" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Program Requirements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Must be 21 years or older</li>
                  <li>Clean criminal record</li>
                  <li>Physical fitness requirements</li>
                  <li>Valid driver's license</li>
                </ul>
              </div>
            )}
            {activeTab === "training" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Training Process
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Initial assessment and screening</li>
                  <li>Classroom instruction</li>
                  <li>Physical training and tactical exercises</li>
                  <li>Practical scenarios and simulations</li>
                  <li>Final evaluation and certification</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Join Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedLocation("all")}
              className={`px-4 py-2 rounded-lg ${
                selectedLocation === "all" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              All Locations
            </button>
            {["New York", "Los Angeles", "Chicago"].map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-4 py-2 rounded-lg ${
                  selectedLocation === location ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                {location}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings
              .filter(
                (job) =>
                  selectedLocation === "all" ||
                  job.location === selectedLocation
              )
              .map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex items-center">
                      <Map className="w-4 h-4 mr-2" />
                      {job.location}
                    </p>
                    <p className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {job.type}
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.experience}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="mt-6 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </button>
                  <JobApplicationForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8">
            Contact us for a free security consultation and assessment
          </p>
          <div className="flex justify-center items-center space-x-6">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-white hover:text-blue-600 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-400">
              Leading security provider with over 20 years of experience in
              protecting businesses and individuals.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>1-800-SECURITY</li>
              <li>info@securitypro.com</li>
              <li>123 Security Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Certifications</h4>
            <div className="flex space-x-4">
              <Shield className="w-8 h-8" />
              <Lock className="w-8 h-8" />
              <CheckCircle2 className="w-8 h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;