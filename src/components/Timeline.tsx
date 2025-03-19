import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      year: "2023 - 2025",
      title: "MTech in CSE with Specialization in AI",
      company: "Defence Institute of Advanced Technology, Pune",
      description: "CGPA: 8.42/10, Specialized in Artificial Intelligence, Deep Learning, and Machine Learning",
      type: "education",
      icon: GraduationCap,
      color: "bg-green-500"
    },
    {
      year: "July 2024 - March 2025",
      title: "Research Intern",
      company: "DRDO (DIA-SVPCoE)",
      description: "Conducted research on 'Data Extraction from CCTV Images'. Developed and deployed systems using vision language models and LLMs. Awarded India AI Fellowship for innovative contributions.",
      type: "internship",
      icon: Briefcase,
      color: "bg-blue-500"
    },
    {
      year: "2019 - 2023",
      title: "BE in Computer Engineering",
      company: "Sarvajanik College of Engineering and Technology, Surat",
      description: "CGPA: 9.10/10, Focused on Computer Engineering and Software Development",
      type: "education",
      icon: GraduationCap,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
          <p className="text-xl text-gray-600">Education and Professional Experience</p>
        </motion.div>

        <div ref={ref} className="relative flex">
          {/* Timeline line with gradient - 30% width */}
          <div className="w-[30%] relative">
            <div className="absolute right-0 h-full w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>
          </div>
          
          {/* Content area - 70% width */}
          <div className="w-[70%] pl-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12"
              >
                <div className="bg-white rounded-xl shadow-xl p-6 relative transform hover:scale-105 transition-transform duration-300">
                  {/* Decorative elements */}
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                    <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <span className="text-sm font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full inline-block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-3">{item.title}</h3>
                    <p className="text-lg text-gray-600 font-medium">{item.company}</p>
                    <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Type indicator */}
                  <div className="absolute bottom-0 right-0 translate-y-1/2">
                    <div className={`px-4 py-1 rounded-full text-sm font-medium ${
                      item.type === "education" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </div>
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