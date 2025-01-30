import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { JobApplicationForm } from "../components/jobApplicationForm";


const Careers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const jobs = [
    {
      title: 'Senior Business Consultant',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Looking for an experienced business consultant to join our strategic consulting team.'
    },
    {
      title: 'Technology Solutions Architect',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Seeking a solutions architect to design and implement enterprise-level technology solutions.'
    },
    {
      title: 'Project Manager',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Experienced project manager needed to lead complex client projects.'
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
            'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
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
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Build your career with a company that values innovation and growth
          </motion.p>
        </div>
      </motion.section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join IBI Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with
              opportunities for growth and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Growth",
                description:
                  "Continuous learning and development opportunities",
              },
              {
                title: "Innovation Culture",
                description: "Work on cutting-edge projects and solutions",
              },
              {
                title: "Great Benefits",
                description:
                  "Competitive compensation and comprehensive benefits package",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next career opportunity with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        {job.type}
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <JobApplicationForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;