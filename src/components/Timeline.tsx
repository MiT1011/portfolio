import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, ExternalLink, ChevronDown } from "lucide-react";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const timelineData = [
    {
      year: "June 2025 – Present",
      title: "AI Software Engineer",
      company: "Quantum AI Global",
      companyLink: "https://thequantum.ai/",
      summary: "Building production-grade LLM systems — multi-agent pipelines, RAG workflows, and H100 GPU deployments with full observability.",
      details: [
        "Built LLM-powered applications integrating web search with Tavily, chat memory, and RAG pipelines for long-form structured content generation — producing correlated multi-step outputs of 15,000 to 20,000 tokens using custom LangChain workflows.",
        "Designed complex multi-agent workflows using LangGraph and PydanticAI with human-in-the-loop, state memory, multi-step reasoning and PostgreSQL & Redis backends.",
        "Developed a 2-tier multi-agent network analysis module using LangGraph with 4 to 5 agents per tier and 8 to 10 specialized tools for distributed private-network environments.",
        "Deployed open-source LLMs (Llama 70B BF16, Llama 3 70B FP8) on H100 GPUs using vLLM and TensorRT-LLM, with KV cache tuning, Docker containerization, and production monitoring through Prometheus and Grafana.",
        "Containerized model serving with NVIDIA NIM for reproducible, scalable deployments with built-in health checks and auto-recovery.",
      ],
      type: "work",
      icon: Briefcase,
      color: "bg-violet-500",
    },
    {
      year: "July 2024 – March 2025",
      title: "AI Researcher",
      company: "DRDO (DIA-SVPCoE)",
      companyLink: "https://diasvpcoe.gujaratuniversity.ac.in/",
      summary: "MTech thesis research on CCTV data extraction — finetuned vision model on 50K images, built conversational surveillance system. Awarded MeitY India AI Fellowship.",
      details: [
        "MTech thesis: \"Data Extraction from CCTV Images with Transformer-Based Models\" — built and deployed a vision-language model for automated surveillance data extraction from live camera feeds.",
        "Fine-tuned a lightweight vision model on 50,000+ custom CCTV images for captioning — achieving significant benchmark improvements: BLEU 62.9→78.1, CLIP Score 78.3→87.5, ROUGE 43.8→56.4.",
        "Integrated OCR, translation, and small language models for extracting and processing textual data from camera feeds across multilingual environments.",
        "Built a conversational interface to query structured CCTV data — retrieve relevant camera feeds or extracted insights via natural language keywords. System production-deployed on-premise.",
        "Awarded the India AI Fellowship by MeitY (Ministry of Electronics & IT) for innovative contributions to AI surveillance research.",
        "Research paper published at ICDSAAI 2025 — \"Transformer-based Models for Visual and Textual Data Extraction\" (IEEE Xplore).",
        "Designed a local tool for document summarization, translation, and semantic search over large internal databases — currently in use in a large production environment.",
      ],
      type: "research",
      icon: Briefcase,
      color: "bg-blue-500",
    },
    {
      year: "Aug 2023 – June 2025",
      title: "MTech in CSE (Artificial Intelligence)",
      company: "Defence Institute of Advanced Technology, Pune",
      companyLink: "https://diat.ac.in/",
      cgpa: "CGPA: 8.44/10",
      summary: "Deemed university under DRDO, Ministry of Defence. Specialized in AI, Deep Learning, Computer Vision, NLP, and VR/AR.",
      details: [
        "Core coursework: Deep Learning, Machine Learning, Image Processing, Computer Vision, Natural Language Processing, Virtual Reality & Augmented Reality.",
        "MTech thesis on transformer-based models for CCTV data extraction — awarded MeitY India AI Fellowship for the research.",
        "Built AI projects during coursework: CCTV surveillance data extraction system (thesis project) and Text-to-SQL query generator using Google Gemini.",
        "Qualified GATE 2024 (Data Science & AI) alongside coursework.",
      ],
      type: "education",
      icon: GraduationCap,
      color: "bg-green-500",
    },
    {
      year: "Feb 2023 – July 2023",
      title: "Unity Game Developer",
      company: "ZenVara Infotech LLP",
      companyLink: "https://zenvarainfotech.com",
      summary: "Designed and developed 2D/3D games using Unity and C# — implemented game mechanics, physics, and UI/UX with performance optimization.",
      details: [
        "Designed and developed engaging 2D and 3D games using Unity Engine with C# scripting — from prototyping to polished builds.",
        "Implemented core game mechanics including physics-based interactions, collision systems, particle effects, and character controllers.",
        "Optimized game performance through object pooling, texture atlasing, LOD management, and efficient memory handling.",
        "Built responsive UI/UX for menus, HUDs, and in-game interfaces using Unity Canvas system.",
        "Integrated third-party assets, audio systems, and animation state machines for cohesive gameplay experiences.",
      ],
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
      summary: "Strong CS fundamentals in software development, data structures, algorithms, databases, and operating systems. GATE 2023 (CS) qualified.",
      details: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering.",
        "Final year project: Built a desktop-based 3D zombie FPS game using Unity Engine and C# — featuring enemy AI, weapon systems, level design, and real-time combat mechanics.",
        "Completed a 6-month internship as a Unity Game Developer at ZenVara Infotech LLP, designing and shipping 2D/3D games.",
        "Qualified CS GATE 2023 alongside undergraduate studies.",
      ],
      type: "education",
      icon: GraduationCap,
      color: "bg-purple-500",
    },
  ];

  const typeStyles: Record<string, string> = {
    work: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-100",
    research: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    internship: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    education: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  };

  const typeLabels: Record<string, string> = {
    work: "Full-time",
    research: "Research",
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
            {timelineData.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative mb-12"
                >
                  <div
                    className={`bg-white dark:bg-gray-700 rounded-xl shadow-xl p-6 relative cursor-pointer transition-all duration-300 ${isExpanded ? "shadow-2xl ring-1 ring-purple-200 dark:ring-purple-800" : "hover:shadow-2xl"
                      }`}
                    onClick={() => toggleExpand(index)}
                  >
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
                        className="text-base text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 mb-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.company}
                        <ExternalLink size={14} className="opacity-70" />
                      </a>
                    ) : (
                      <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-2">{item.company}</p>
                    )}

                    {/* CGPA for education */}
                    {(item as any).cgpa && (
                      <p className="text-gray-800 dark:text-gray-200 font-semibold text-sm mb-2">{(item as any).cgpa}</p>
                    )}

                    {/* Summary — always visible */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.summary}</p>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-1.5 mt-3 text-purple-500 dark:text-purple-400 text-xs font-medium">
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                      <span>{isExpanded ? "Show less" : "Click to see details"}</span>
                    </div>

                    {/* Expandable details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <ul className="space-y-2.5">
                              {item.details.map((point, pi) => (
                                <li key={pi} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                  <span className="text-purple-500 mt-0.5 flex-shrink-0">▸</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;