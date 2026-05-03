import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, ExternalLink } from "lucide-react";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      year: "June 2025 – Present",
      title: "AI Software Engineer",
      company: "Quantum AI Global",
      companyLink: "https://thequantum.ai/",
      description: [
        "Built LLM-powered applications integrating web search with Tavily, chat memory, and RAG pipelines for long-form structured content generation — producing correlated multi-step outputs of 15,000 to 20,000 tokens using custom LangChain workflows.",
        "Deployed open-source LLMs on H100 GPUs using vLLM, TensorRT, and NVIDIA NIM, with KV cache tuning, Docker containerization, and production monitoring through Prometheus and Grafana.",
        "Designed complex multi-agent workflows using LangGraph and PydanticAI with human-in-the-loop, state memory, multi-step reasoning and PostgreSQL & Redis backends.",
        "Developed a 2-tier multi-agent network analysis module using LangGraph with 4 to 5 agents per tier and 8 to 10 specialized tools for distributed private-network environments.",
      ],
      type: "work",
      icon: Briefcase,
      color: "bg-violet-500",
    },
    {
      year: "July 2024 – March 2025",
      title: "AI Research Intern",
      company: "DRDO (DIA-SVPCoE)",
      companyLink: "https://diasvpcoe.gujaratuniversity.ac.in/",
      description: [
        "MTech research on Data Extraction from CCTV Images with Transformer-Based Models - built and deployed a vision-language model for automated surveillance data extraction.",
        "Fine-tuned a lightweight edge model on 50,000+ CCTV images for captioning with significant benchmark improvements: BLEU 62.9 to 78.1, CLIP Score 78.3 to 87.5, ROUGE 43.8 to 56.4.",
        "Awarded the India AI Fellowship by MeitY for innovative contributions to AI surveillance research.",
        "Designed a local tool for document summarization, translation, and semantic search over large internal databases.",
      ],
      type: "internship",
      icon: Briefcase,
      color: "bg-blue-500",
    },
    {
      year: "Aug 2023 – Present",
      title: "MTech in CSE (Artificial Intelligence)",
      company: "Defence Institute of Advanced Technology, Pune",
      companyLink: "https://diat.ac.in/",
      cgpa: "CGPA: 8.44/10",
      description: "Specialized in Artificial Intelligence, Deep Learning, Machine Learning, Image Processing, Computer Vision, Natural Language Processing, Virtual Reality and Augmented Reality.",
      type: "education",
      icon: GraduationCap,
      color: "bg-green-500",
    },
    {
      year: "Feb 2023 – July 2023",
      title: "Unity Game Developer",
      company: "ZenVara Infotech LLP",
      companyLink: "https://zenvarainfotech.com",
      description: "Designed and developed engaging 2D and 3D games using Unity and C#. Implemented game mechanics, optimized performance, and enhanced UX. Gained hands-on experience in game physics, UI/UX, and asset integration.",
      type: "internship",
      icon: Briefcase,
      color: "bg-orange-500",
    },
    {
      year: "Aug 2019 – July 2023",
      title: "BE in Computer Engineering",
      company: "Sarvajanik College of Engineering and Technology, Surat",
      companyLink: "https://scet.ac.in/",
      cgpa: "CGPA: 9.10/10",
      description: "Focused on Computer Engineering and Software Development core subjects.",
      type: "education",
      icon: GraduationCap,
      color: "bg-purple-500",
    },
  ];

  const typeStyles: Record<string, string> = {
    work: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-100",
    internship: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    education: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  };

  const typeLabels: Record<string, string> = {
    work: "Full-time",
    internship: "Internship",
    education: "Education",
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Education &amp; Professional Experience</p>
        </motion.div>

        <div ref={ref} className="relative flex max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="w-[10%] relative">
            <div className="absolute right-0 h-full w-1 bg-gradient-to-b from-violet-500 via-blue-500 via-green-500 via-orange-500 to-purple-500"></div>
          </div>

          {/* Content area */}
          <div className="w-[90%] pl-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-12"
              >
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-6 relative hover:shadow-2xl transition-shadow duration-300">
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-6">
                    <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Type badge + date */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeStyles[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                    <span className="text-xs font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>

                  {item.companyLink ? (
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 mb-3"
                    >
                      {item.company}
                      <ExternalLink size={14} className="opacity-70" />
                    </a>
                  ) : (
                    <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-3">{item.company}</p>
                  )}

                  {/* Education */}
                  {item.type === "education" && (
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">{(item as any).cgpa}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description as string}</p>
                    </div>
                  )}

                  {/* Work / Internship — bullet list */}
                  {item.type !== "education" && Array.isArray(item.description) && (
                    <ul className="space-y-2 mt-1">
                      {(item.description as string[]).map((point, pi) => (
                        <li key={pi} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          <span className="text-purple-500 mt-1 flex-shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Internship with plain string */}
                  {item.type !== "education" && typeof item.description === "string" && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  )}
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