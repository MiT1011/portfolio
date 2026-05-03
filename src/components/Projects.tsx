import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Link, X, Bot, Database, Film } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  technologies: string[];
  link: string;
  github: string;
  image: string;
  icon: React.FC<{ className?: string }>;
  gradient: string;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Conversational AI Assistant",
      shortDescription: "Production-ready multimodal AI — text, audio, image & PDF inputs with RAG",
      description:
        "A production-ready multimodal conversational AI supporting 4 input modalities (text, audio, image, PDF) with a fully integrated RAG pipeline for answering questions directly from uploaded documents.",
      bullets: [
        "Supports 4 modalities: text, audio, image, and PDF inputs with a fully integrated RAG pipeline for document Q&A.",
        "Integrated semantic search using FAISS vector store with Llama 3.3 70B via Groq, OpenAI Whisper for audio transcription, and Llama 3.2 Vision for image understanding.",
        "Deployed on Streamlit Cloud with session-aware architecture, maintaining persistent chat history across multi-turn conversations.",
      ],
      technologies: ["FAISS", "Llama 3.3 70B", "Llama 3.2 Vision", "OpenAI Whisper", "Groq", "LangChain", "Streamlit", "RAG"],
      link: "https://chat-all-mit-patel.streamlit.app/",
      github: "https://github.com/VirtulMachine01/Adv-Chatbot?tab=readme-ov-file",
      image: "/portfolio/chatbot.jpg",
      icon: Bot,
      gradient: "from-purple-600 to-blue-500",
    },
    {
      title: "Text to SQL (Agentic AI)",
      shortDescription: "Multi-database agentic Text-to-SQL with LangGraph and human-in-the-loop",
      description:
        "A multi-database Text-to-SQL system supporting PostgreSQL, MySQL, and SQLite with an interactive schema visualization of 10+ tables and a LangGraph agentic pipeline.",
      bullets: [
        "Supports PostgreSQL, MySQL, and SQLite with interactive schema visualization of 10+ tables showing relationships, primary and foreign keys.",
        "Dual query modes: standard SQL generation and a LangGraph agentic flow with human-in-the-loop confirmation, step-by-step planning, and automatic query refinement on errors.",
        "Agentic pipeline uses multiple specialized tools for query planning, execution, validation, and self-correction, returning results as interactive graphs and tables.",
      ],
      technologies: ["LangGraph", "PydanticAI", "PostgreSQL", "SQLite", "Gemini", "HuggingFace", "Streamlit", "Agentic AI"],
      link: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini",
      github: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini/tree/main",
      image: "/portfolio/text2sql.jpg",
      icon: Database,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Movie Recommendation System",
      shortDescription: "NLP-based personalized movie suggestions using TMDB data",
      description:
        "Developed using Count Vectorizer and Cosine Similarity on the TMDB database, with data preprocessing using Pandas, NumPy, and Matplotlib. Deployed as an interactive web application on Streamlit Cloud.",
      bullets: [
        "Built content-based filtering using Count Vectorizer and Cosine Similarity on 5000+ TMDB movies.",
        "Full data preprocessing pipeline using Pandas, NumPy, and Matplotlib for feature engineering.",
        "Deployed as an interactive Streamlit web app with live movie poster fetching from TMDB API.",
      ],
      technologies: ["NLP", "Cosine Similarity", "TMDB API", "Pandas", "NumPy", "Streamlit"],
      link: "https://movie-recommender-system-by-meet-patel.streamlit.app/",
      github: "https://github.com/MiT1011/Movie_Recommender_System?tab=readme-ov-file",
      image: "/portfolio/movie.jpeg",
      icon: Film,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Text to SQL — Gemini (Classic)",
      shortDescription: "Convert natural language to SQL queries using Google Gemini",
      description:
        "A Text-to-SQL query extractor web application using Google Gemini Pro, where text input is converted into SQL queries and retrieves data from a SQLite database. Deployed on HuggingFace Spaces.",
      bullets: [
        "Converts plain-English questions into accurate SQL queries using Google Gemini Pro.",
        "Retrieves and displays results from a SQLite student database in real-time.",
        "Simple and clean Streamlit interface deployed on HuggingFace Spaces for instant access.",
      ],
      technologies: ["Gemini Pro", "HuggingFace", "LangChain", "SQLite", "Streamlit", "Text-to-SQL"],
      link: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini",
      github: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini/tree/main",
      image: "/portfolio/texttosql.jpg",
      icon: Database,
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Production AI & Machine Learning Systems</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay with icon */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center`}>
                  <project.icon className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.shortDescription}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-200 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    title="Live Demo"
                  >
                    <Link size={20} />
                  </a>
                  <span className="ml-auto text-xs text-purple-500 font-medium group-hover:underline">View details →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hero image */}
                <div className="relative h-56">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-50`} />
                  <button
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-700/90 rounded-full p-1.5 shadow-md hover:scale-110 transition-transform"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={20} className="text-gray-800 dark:text-gray-200" />
                  </button>
                  <div className="absolute bottom-4 left-6">
                    <h2 className="text-2xl font-bold text-white drop-shadow">{selectedProject.title}</h2>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                  {/* Bullet points */}
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="text-purple-500 mt-0.5 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-full flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <Link size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;