import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Shield, Clock, ChevronRight, Building2 } from 'lucide-react';
import Timeline from '../components/Timeline';

const About = () => {
   const timelineRef = useRef<HTMLDivElement>(null);
   const statsRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     const observerOptions = {
       threshold: 0.1,
       rootMargin: "0px",
     };

     const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           entry.target.classList.add("animate-fade-in");
         }
       });
     }, observerOptions);

     if (timelineRef.current) {
       observer.observe(timelineRef.current);
     }
     if (statsRef.current) {
       observer.observe(statsRef.current);
     }

     return () => observer.disconnect();
   }, []);
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About IBI Group
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto"
          >
            A legacy of excellence in professional consulting and technology
            solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="py-20 bg-white opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "Security Operations", value: "15,000+" },
              { icon: Users, label: "Clients Worldwide", value: "2,500+" },
              { icon: Award, label: "Industry Awards", value: "200+" },
              { icon: Clock, label: "Years of Experience", value: "25+" },
              { icon: Users, label: "Global Team", value: "1000+" },
              { icon: Target, label: "Projects Completed", value: "5000+" },
              { icon: Award, label: "Industry Awards", value: "100+" },
              {
                icon: TrendingUp,
                label: "Years of Excellence",
                value: "50+",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Timeline Section
      <div
        ref={timelineRef}
        className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Journey
          </h2>
          <div className="relative">
            {[
              {
                year: "1998",
                title: "Company Founded",
                description:
                  "Started with a vision to revolutionize security services",
              },
              {
                year: "2005",
                title: "International Expansion",
                description: "Expanded operations to 15 countries",
              },
              {
                year: "2012",
                title: "Digital Transformation",
                description:
                  "Launched cutting-edge security technology solutions",
              },
              {
                year: "2020",
                title: "Industry Leadership",
                description:
                  "Became the leading security provider in 3 continents",
              },
            ].map((item, index) => (
              <div key={index} className="mb-12 flex items-center">
                <div className="w-32 text-right pr-8">
                  <span className="text-2xl font-bold text-blue-600">
                    {item.year}
                  </span>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-600 relative">
                  <div className="absolute h-full w-0.5 bg-blue-600 left-1/2 transform -translate-x-1/2 -z-10"></div>
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Timeline></Timeline>

      {/* Founders Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Anderson",
                role: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
                description:
                  "Former military intelligence officer with 15+ years in security operations.",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
                description:
                  "Cybersecurity expert with multiple patents in security technology.",
              },
              {
                name: "David Williams",
                role: "Chief Operations Officer",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
                description:
                  "Twenty years of experience in global security management.",
              },
            ].map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {leader.role}
                </p>
                <p className="text-gray-600">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards in all our operations.",
              },
              {
                title: "Innovation",
                description:
                  "Constantly evolving our solutions to stay ahead of security threats.",
              },
              {
                title: "Excellence",
                description:
                  "Delivering exceptional service quality in everything we do.",
              },
              {
                title: "Reliability",
                description:
                  "Available 24/7, ensuring your security is never compromised.",
              },
              {
                title: "Collaboration",
                description:
                  "Working closely with clients to understand their unique needs.",
              },
              {
                title: "Accountability",
                description:
                  "Taking responsibility for the safety and security of our clients.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">Global Presence</h2>
              <p className="text-gray-600 mb-8">
                With operations in over 50 countries and a network of more than
                100 strategic partners, we provide comprehensive security
                solutions on a global scale.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                  <span>50+ Countries</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span>5000+ Personnel</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt="Global Operations"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;