// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// const Home = (props: { [x: string]: any; image1Src: any; image2Src: any; image3Src: any; image4Src: any; image5Src: any; image6Src: any; image7Src: any; image8Src: any; image9Src: any; image10Src: any; image11Src: any; image12Src: any; }) => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative h-screen flex items-center"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-white"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Innovating for a Better Tomorrow
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 max-w-2xl">
//               IBI Group delivers innovative solutions that drive sustainable
//               growth and enhance communities worldwide.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
//             >
//               Get Started
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>

      
//       <div className="flex flex-col items-center w-full overflow-hidden relative">
//         <div className="flex flex-col items-start gap-6 w-full relative">
//           <div className="flex w-full overflow-hidden">
//             <div className="flex animate-scroll-x">
//               {[
//                 props.image1Src,
//                 props.image2Src,
//                 props.image3Src,
//                 props.image4Src,
//                 props.image5Src,
//                 props.image6Src,
//               ].map((src, index) => (
//                 <img
//                   key={index}
//                   alt={props[`image${index + 1}Alt`]}
//                   src={src}
//                   className="w-40 h-40 object-cover m-2"
//                 />
//               ))}
//             </div>
//             <div className="flex animate-scroll-x">
//               {[
//                 props.image1Src,
//                 props.image2Src,
//                 props.image3Src,
//                 props.image4Src,
//                 props.image5Src,
//                 "https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixlib=rb-4.0.3&w=1500",
//               ].map((src, index) => (
//                 <img
//                   key={index + 6}
//                   alt={props[`image${index + 1}Alt`] || "Hero Image"}
//                   src={src}
//                   className="w-40 h-40 object-cover m-2"
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="flex w-full overflow-hidden">
//             <div className="flex animate-scroll-x-reverse">
//               {[
//                 props.image7Src,
//                 props.image8Src,
//                 props.image9Src,
//                 props.image10Src,
//                 props.image11Src,
//                 props.image12Src,
//               ].map((src, index) => (
//                 <img
//                   key={index + 12}
//                   alt={props[`image${index + 7}Alt`]}
//                   src={src}
//                   className="w-40 h-40 object-cover m-2"
//                 />
//               ))}
//             </div>
//             <div className="flex animate-scroll-x-reverse">
//               {[
//                 props.image7Src,
//                 props.image8Src,
//                 props.image9Src,
//                 props.image10Src,
//                 props.image11Src,
//                 "https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixlib=rb-4.0.3&w=1500",
//               ].map((src, index) => (
//                 <img
//                   key={index + 18}
//                   alt={props[`image${index + 7}Alt`] || "Hero Image"}
//                   src={src}
//                   className="w-40 h-40 object-cover m-2"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <style>{`
//         @keyframes scroll-x {
//           from { transform: translateX(0); }
//           to { transform: translateX(calc(-100% - 16px)); }
//         }
        
//         @keyframes scroll-x-reverse {
//           from { transform: translateX(0); }
//           to { transform: translateX(calc(100% + 16px)); }
//         }
        
//         .animate-scroll-x { animation: scroll-x 10s linear infinite; }
//         .animate-scroll-x-reverse { animation: scroll-x-reverse 10s linear infinite; }
//       `}</style>
//       </div>
//       {/* Services Preview */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Our Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive solutions tailored to meet your business needs
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Consulting Services",
//                 description:
//                   "Strategic guidance to optimize your business operations",
//                 image:
//                   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 title: "Technology Solutions",
//                 description:
//                   "Cutting-edge tech implementation for digital transformation",
//                 image:
//                   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 title: "Project Management",
//                 description:
//                   "Expert project delivery and resource optimization",
//                 image:
//                   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden"
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <Link
//                     to="/services"
//                     className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
//                   >
//                     Learn More
//                     <ChevronRight className="ml-1 h-5 w-5" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-blue-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center text-white"
//           >
//             <h2 className="text-3xl font-bold mb-4">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Let's work together to achieve your goals and drive success.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               Contact Us
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// Home.defaultProps = {
//   image3Src:
//     "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjUzN3w&ixlib=rb-4.0.3&q=80&w=1080",
//   image8Alt: "Secure Business Premises",
//   image2Src:
//     "https://images.unsplash.com/photo-1531804159968-24716780d214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjUzOHw&ixlib=rb-4.0.3&q=80&w=1080",
//   image6Alt: "Emergency Response Team",
//   image11Src:
//     "https://images.unsplash.com/photo-1531413496675-fb7f363c2c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjUzOXw&ixlib=rb-4.0.3&q=80&w=1080",
//   image5Alt: "Alarm System Installation",
//   image1Alt: "Security Service Provider",
//   image7Src:
//     "https://images.unsplash.com/photo-1609525313694-4faff62586af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjUzOXw&ixlib=rb-4.0.3&q=80&w=1080",
//   image7Alt: "24/7 Monitoring Center",
//   image12Alt: "Security Consultation",
//   image2Alt: "Security Guard Monitoring Area",
//   image6Src:
//     "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjUzOXw&ixlib=rb-4.0.3&q=80&w=1080",
//   image12Src:
//     "https://images.unsplash.com/photo-1639815188498-e23242c9c796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjU0MHw&ixlib=rb-4.0.3&q=80&w=1080",
//   image3Alt: "Surveillance Cameras",
//   image9Src:
//     "https://images.unsplash.com/photo-1587200292891-9b3a506060f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjU0MXw&ixlib=rb-4.0.3&q=80&w=1080",
//   image11Alt: "Risk Assessment Services",
//   action2: undefined,
//   action1: undefined,
//   image8Src:
//     "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjU0MXw&ixlib=rb-4.0.3&q=80&w=1080",
//   image5Src:
//     "https://images.unsplash.com/photo-1629732902845-70eebe524b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjU0MXw&ixlib=rb-4.0.3&q=80&w=1080",
//   image4Src:
//     "https://images.unsplash.com/photo-1496152658208-d41635783718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjU0Mnw&ixlib=rb-4.0.3&q=80&w=1080",
//   image10Alt: "Customized Security Solutions",
//   image4Alt: "Access Control Systems",
//   heading1: undefined,
//   content1: undefined,
//   image10Src:
//     "https://images.unsplash.com/photo-1518218392262-1beb4730fb09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjU0Mnw&ixlib=rb-4.0.3&q=80&w=1080",
//   image9Alt: "Professional Security Team",
//   image1Src:
//     "https://images.unsplash.com/photo-1614064849377-2ec42b722a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODA5MjU0Mnw&ixlib=rb-4.0.3&q=80&w=1080",
// };

// Home.propTypes = {
//   image3Src: PropTypes.string,
//   image8Alt: PropTypes.string,
//   image2Src: PropTypes.string,
//   image6Alt: PropTypes.string,
//   image11Src: PropTypes.string,
//   image5Alt: PropTypes.string,
//   image1Alt: PropTypes.string,
//   image7Src: PropTypes.string,
//   image7Alt: PropTypes.string,
//   image12Alt: PropTypes.string,
//   image2Alt: PropTypes.string,
//   image6Src: PropTypes.string,
//   image12Src: PropTypes.string,
//   image3Alt: PropTypes.string,
//   image9Src: PropTypes.string,
//   image11Alt: PropTypes.string,
//   action2: PropTypes.element,
//   action1: PropTypes.element,
//   image8Src: PropTypes.string,
//   image5Src: PropTypes.string,
//   image4Src: PropTypes.string,
//   image10Alt: PropTypes.string,
//   image4Alt: PropTypes.string,
//   heading1: PropTypes.element,
//   content1: PropTypes.element,
//   image10Src: PropTypes.string,
//   image9Alt: PropTypes.string,
//   image1Src: PropTypes.string,
// };

// export default Home;


import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Users,
  Building2,
  Eye,
  Shield as ShieldIcon,
  CheckCircle2,
  Briefcase,
  Building,
  Factory,
  Ban as Bank,
  Guitar as Hospital,
  ShieldCheck,
} from "lucide-react";

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Advanced Security Systems",
      description:
        "State-of-the-art security solutions utilizing cutting-edge technology",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Team",
      description:
        "Highly trained security personnel with extensive experience",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Facility Protection",
      description:
        "Comprehensive security coverage for all types of facilities",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description:
        "Round-the-clock surveillance and rapid response capabilities",
    },
  ];

  const industries = [
    { icon: <Briefcase className="w-6 h-6" />, name: "Corporate" },
    { icon: <Building className="w-6 h-6" />, name: "Real Estate" },
    { icon: <Factory className="w-6 h-6" />, name: "Industrial" },
    { icon: <Bank className="w-6 h-6" />, name: "Financial" },
    { icon: <Hospital className="w-6 h-6" />, name: "Healthcare" },
  ];

  const testimonials = [
    {
      quote:
        "The level of security and professionalism provided is unmatched. Our facilities have never been safer.",
      author: "Sarah Johnson",
      position: "Operations Director, TechCorp",
    },
    {
      quote:
        "Their advanced security solutions have given us complete peace of mind. Highly recommended!",
      author: "Michael Chen",
      position: "Facility Manager, Global Industries",
    },
    {
      quote:
        "Outstanding service and cutting-edge security systems. They've exceeded our expectations.",
      author: "Emma Rodriguez",
      position: "Security Director, Healthcare Plus",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
            alt="Security Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <ShieldIcon className="w-20 h-20 text-blue-500" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            {...fadeIn}
          >
            Securing Your World
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            {...fadeIn}
          >
            Advanced security solutions for businesses and institutions
          </motion.p>

          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Protected Now
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="py-20 px-4 bg-gray-800/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Protected" },
              { number: "24/7", label: "Monitoring" },
              { number: "100%", label: "Success Rate" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Solutions Showcase */}
      <div className="py-20 px-4 bg-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-400">
              Protecting businesses across all industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
                alt="Security Command Center"
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Command Center Operations
                  </h3>
                  <p className="text-gray-300">
                    24/7 monitoring and rapid response capabilities
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80"
                alt="Access Control Systems"
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Access Control Systems
                  </h3>
                  <p className="text-gray-300">
                    Advanced biometric and smart card solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-500 mb-2 flex justify-center">
                  {industry.icon}
                </div>
                <div className="text-sm font-medium">{industry.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-400">
              What our clients say about us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4 text-blue-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="py-20 px-4 bg-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get in touch with our security experts today
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;