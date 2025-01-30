import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Transformation',
      client: 'Global Tech Solutions',
      description: 'Complete digital transformation project including cloud migration and process automation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Strategic Consulting',
      client: 'Innovation Corp',
      description: 'Strategic planning and market expansion consulting for a Fortune 500 company.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Enterprise Solutions',
      client: 'Global Manufacturing',
      description: 'Implementation of enterprise-wide resource planning and management systems.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Digital Transformation',
      client: 'Global Tech Solutions',
      description: 'Complete digital transformation project including cloud migration and process automation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Strategic Consulting',
      client: 'Innovation Corp',
      description: 'Strategic planning and market expansion consulting for a Fortune 500 company.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Enterprise Solutions',
      client: 'Global Manufacturing',
      description: 'Implementation of enterprise-wide resource planning and management systems.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Showcasing our successful partnerships and innovations
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    View Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Countries Served", value: "30+" },
              { label: "Success Rate", value: "98%" },
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Countries Served", value: "30+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;