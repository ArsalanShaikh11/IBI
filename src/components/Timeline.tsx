// import React, { useEffect, useRef } from "react";
// import { Clock, Briefcase, GraduationCap, Award, Heart } from "lucide-react";

// interface TimelineItem {
//   icon: React.ReactNode;
//   year: string;
//   title: string;
//   description: string;
// }

// const timelineData: TimelineItem[] = [
//   {
//     icon: <GraduationCap className="w-6 h-6" />,
//     year: "2018",
//     title: "University Graduation",
//     description: "Graduated with honors in Computer Science",
//   },
//   {
//     icon: <Briefcase className="w-6 h-6" />,
//     year: "2019",
//     title: "First Developer Role",
//     description: "Started career as a Junior Developer at Tech Corp",
//   },
//   {
//     icon: <Award className="w-6 h-6" />,
//     year: "2020",
//     title: "Team Lead Promotion",
//     description: "Promoted to lead the frontend development team",
//   },
//   {
//     icon: <Clock className="w-6 h-6" />,
//     year: "2021",
//     title: "Major Project Launch",
//     description: "Successfully launched company's flagship product",
//   },
//   {
//     icon: <Heart className="w-6 h-6" />,
//     year: "2022",
//     title: "Community Recognition",
//     description: "Awarded 'Developer of the Year' by local tech community",
//   },
// ];

// function Timeline() {
//   const timelineRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("opacity-100", "translate-y-0");
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     const timelineItems = document.querySelectorAll(".timeline-item");
//     timelineItems.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//           Our Journey
//         </h1>

//         <div ref={timelineRef} className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-[21px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

//           {/* Timeline items */}
//           <div className="space-y-12">
//             {timelineData.map((item, index) => (
//               <div
//                 key={index}
//                 className="timeline-item opacity-0 translate-y-4 transition-all duration-700 ease-out"
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 <div className="flex items-start gap-x-6">
//                   <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gray-800 border border-gray-700 shadow-lg">
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 animate-pulse"></div>
//                     {item.icon}
//                   </div>
//                   <div className="flex-1 bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700 hover:border-gray-600 transition-colors">
//                     <div className="flex items-center justify-between mb-2">
//                       <h3 className="text-xl font-semibold">{item.title}</h3>
//                       <span className="text-sm text-gray-400">{item.year}</span>
//                     </div>
//                     <p className="text-gray-300">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Timeline;


import React, { useEffect, useRef } from "react";
import { Clock, Briefcase, GraduationCap, Award, Heart } from "lucide-react";

interface TimelineItem {
  icon: React.ReactNode;
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    year: "2018",
    title: "University Graduation",
    description: "Graduated with honors in Computer Science",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    year: "2019",
    title: "First Developer Role",
    description: "Started career as a Junior Developer at Tech Corp",
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    year: "2020",
    title: "Team Lead Promotion",
    description: "Promoted to lead the frontend development team",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    year: "2021",
    title: "Major Project Launch",
    description: "Successfully launched company's flagship product",
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    year: "2022",
    title: "Community Recognition",
    description: "Awarded 'Developer of the Year' by local tech community",
  },
];

function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-blue-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-blue-700">
          Our Journey
        </h1>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-[21px] top-0 bottom-0 w-0.5 bg-blue-600"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="timeline-item opacity-0 translate-y-4 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-x-6">
                  <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-blue-100 border border-blue-400 shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 animate-pulse"></div>
                    {item.icon}
                  </div>
                  <div className="flex-1 bg-blue-50 rounded-lg p-6 shadow-xl border border-blue-300 hover:border-blue-400 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-blue-800">
                        {item.title}
                      </h3>
                      <span className="text-sm text-blue-600">{item.year}</span>
                    </div>
                    <p className="text-blue-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;