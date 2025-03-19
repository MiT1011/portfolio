import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, Award, BookOpen, ExternalLink } from "lucide-react";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      year: "July 2024 - March 2025",
      title: "Research Intern",
      company: "DRDO (DIA-SVPCoE)",
      companyLink: "https://diasvpcoe.gujaratuniversity.ac.in/",
      description: "Conducted research on 'Visual and Textual Data Extraction from CCTV Images using Transformer-based Models'. Developed and deployed Web API using Flask and deployed on Local machine with Open models.",
      type: "internship",
      icon: Briefcase,
      color: "bg-blue-500"
    },
    {
      year: "Aug 2023 - Present",
      title: "MTech in CSE (Artificial Intelligence)",
      company: "Defence Institute of Advanced Technology, Pune",
      companyLink: "https://diat.ac.in/",
      cgpa: "CGPA: 8.42/10",
      description: "Specialized in Artificial Intelligence, Deep Learning, Machine Learning, Image Processing, Computer Vision, Natural Language Processing, Virtual Reality and Augmented Reality.",
      type: "education",
      icon: GraduationCap,
      color: "bg-green-500"
    },
    {
      year: "Feb 2023 - July 2023",
      title: "Unity Game Developer",
      company: "ZenVara Infotech LLP",
      companyLink: "https://zenvarainfotech.com",
      description: "Designed and developed engaging 2D and 3D games, building interactive prototypes using Unity and C#. Collaborated with the team to implement game mechanics, optimize performance, and enhance user experience. Gained hands-on experience in game physics, UI/UX, and asset integration while delivering functional and creative gaming solutions.",
      type: "internship",
      icon: Briefcase,
      color: "bg-orange-500"
    },
    {
      year: "Aug 2019 - July 2023",
      title: "BE in Computer Engineering",
      company: "Sarvajanik College of Engineering and Technology, Surat",
      companyLink: "https://scet.ac.in/",
      cgpa: "CGPA: 9.10/10",
      description: "Focused on Computer Engineering and Software Development core Subjects",
      type: "education",
      icon: GraduationCap,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Education and Professional Experience</p>
        </motion.div>

        <div ref={ref} className="relative flex max-w-6xl mx-auto">
          {/* Timeline line with gradient - 20% width */}
          <div className="w-[10%] relative">
            <div className="absolute right-0 h-full w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-purple-500"></div>
          </div>
          
          {/* Content area - 80% width */}
          <div className="w-[90%] pl-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12"
              >
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-6 relative transform hover:scale-105 transition-transform duration-300">
                  {/* Decorative elements */}
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                    <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    {/* Type indicator moved to top left */}
                    <div className="mb-3">
                      <div className={`px-4 py-1 rounded-full text-sm font-medium inline-block ${
                        item.type === "education" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" 
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                      }`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </div>
                    </div>
                    
                    <span className="text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full inline-block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3">{item.title}</h3>
                    <a 
                      href={item.companyLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                    >
                      {item.company}
                      <ExternalLink size={16} className="opacity-70" />
                    </a>
                    {item.type === "education" ? (
                      <div className="mt-3">
                        <p className="text-gray-800 dark:text-gray-200 font-semibold">{item.cgpa}</p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 