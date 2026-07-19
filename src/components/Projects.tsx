import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Link, X, Bot, Database, Film, Youtube, FileText, Camera, Server } from "lucide-react";
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
  images?: { src: string; caption: string }[];
  icon: React.FC<{ className?: string }>;
  gradient: string;
  featured?: boolean;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Chat with CCTV Cluster",
      shortDescription: "MeitY-funded AI research - finetuned vision & language models for CCTV data extraction, OCR, translation & conversational querying",
      description:
        "An end-to-end intelligent surveillance system that extracts structured data from live CCTV feeds using a finetuned open-weight vision model combined with OCR, translation, and small language models for textual data extraction. The solution architecture was designed as part of an M.Tech thesis and enables conversational querying over multi-camera CCTV data - users can chat with cameras and retrieve live feeds based on keyword search. The system is locally deployed in an organization for a specific operational use case.",
      bullets: [
        "Finetuned a compact open-weight vision model on a custom-curated dataset of <strong>50,000 CCTV images</strong>, improving <strong>BLEU, ROUGE, and CLIPScore</strong> benchmarks for CCTV-specific image captioning.",
        "Integrated <strong>OCR</strong>, <strong>translation</strong>, and <strong>small language models</strong> for extracting and processing textual data from camera feeds across multilingual environments.",
        "Built a <strong>conversational interface</strong> to query structured CCTV data - retrieve relevant camera feeds or extracted insights via natural language keywords.",
        "Solution architecture developed during <strong>M.Tech thesis</strong>; system is <strong>production-deployed on-premise</strong> at an organization for real-time monitoring.",
        "Awarded the <strong>India AI Fellowship by MeitY</strong> for AI research excellence. Research paper <strong>published at ICDSAAI 2025</strong>.",
      ],
      technologies: ["Finetuning", "Vision Transformers", "OCR", "Translation", "Small LMs", "BLEU", "ROUGE", "CLIPScore", "Python", "PyTorch", "OpenCV", "FastAPI", "On-Premise"],
      link: "https://ieeexplore.ieee.org/abstract/document/11011827",
      github: "#",
      image: "/cctv_data.jpg",
      images: [
        { src: "/cctv_data.jpg", caption: "Structured data extraction from live CCTV camera feed using finetuned vision model" },
        { src: "/cctv_recomenndation.jpg", caption: "Conversational querying - keyword-based camera feed suggestions and live retrieval" },
      ],
      icon: Camera,
      gradient: "from-amber-500 to-orange-600",
      featured: true,
    },
    {
      title: "QueryForge AI - Agentic Text-to-SQL",
      shortDescription: "7-agent LangGraph pipeline with dual HITL gates, self-healing SQL loop - 98% accuracy on a 78-table production database",
      description:
        "A production-grade Agentic Text-to-SQL system built on a LangGraph StateGraph that converts plain English into SQL across PostgreSQL, MySQL, and SQLite. Orchestrates 7 specialized agents with parallel schema fan-out, dual Human-in-the-Loop approval gates, and an automatic self-healing retry loop - validated at 98% accuracy on a 78-table enterprise production database.",
      bullets: [
        "Built a <strong>7-agent LangGraph StateGraph</strong> (Schema Analyzer, Planner, SQL Generator, Validator, Self-Healer, Executor, Visualizer) with parallel fan-out and conditional runtime routing across <strong>PostgreSQL, MySQL, and SQLite</strong>.",
        "Implemented <strong>dual HITL safety gates</strong> - Gate 1 approves the NL execution plan; Gate 2 confirms exact SQL before any INSERT/UPDATE/DELETE - with server-side UUID session persistence.",
        "<strong>Self-Healing loop</strong> injects error context back into the SQL Generator for up to <strong>3 automatic retries</strong>; Visualizer Agent auto-selects the best chart type from result semantics.",
      ],
      technologies: ["LangGraph", "LangChain", "Llama 4 Scout 17B", "Groq", "FastAPI", "SQLAlchemy", "PostgreSQL", "MySQL", "SQLite", "Pydantic v2", "Agentic AI", "HITL"],
      link: "https://www.youtube.com/watch?v=so4ItTa0DwQ",
      github: "https://github.com/MiT1011/text_to_sql",
      image: "/queryforge_result.png",
      images: [
        { src: "/queryforge_db.png", caption: "DB Connection & Auto Schema Introspection - 23-table PostgreSQL" },
        { src: "/queryforge_er.png", caption: "ER Diagram - Complex FK relationships across 23 tables handled by the Schema Agent" },
        { src: "/queryforge_plan.png", caption: "Planner Agent - Human-in-the-Loop approval gate before SQL generation" },
        { src: "/queryforge_result.png", caption: "Execution result with Visualizer Agent auto-selecting chart type" },
      ],
      icon: Database,
      gradient: "from-green-500 to-teal-500",
      featured: true,
    },
    {
      title: "Production LLM Infrastructure",
      shortDescription: "Llama 70B (BF16) on H100 GPUs — vLLM & TensorRT-LLM inference with Grafana/Prometheus observability and production request optimization",
      description:
        "A production-grade local LLM deployment platform serving Llama 70B in full BF16 precision on NVIDIA H100 GPUs for maximum output quality. Explored and benchmarked both vLLM and TensorRT-LLM as inference backends independently, with NVIDIA NIM for containerized model serving. In parallel, deployed a Llama 3 70B FP8 quantized variant for cost-efficient general-purpose tasks. The entire stack is monitored via a Grafana + Prometheus observability layer with production-grade request optimization.",
      bullets: [
        "Deployed <strong>Llama 70B in full BF16 precision</strong> on <strong>NVIDIA H100 GPUs</strong> for maximum output quality — no quantization trade-offs for critical inference workloads.",
        "Explored and benchmarked <strong>vLLM</strong> (continuous batching, PagedAttention, tensor parallelism) and <strong>TensorRT-LLM</strong> independently as inference backends, comparing throughput, latency, and resource utilization.",
        "Deployed a parallel <strong>Llama 3 70B FP8 quantized</strong> instance for general-purpose tasks — reducing compute cost while maintaining output quality for non-critical workloads.",
        "Containerized serving with <strong>NVIDIA NIM</strong> for reproducible, scalable deployments with built-in health checks and auto-recovery.",
        "Built a full <strong>Grafana + Prometheus</strong> observability stack tracking GPU utilization, tokens/sec, request queue depth, P95/P99 latency, and VRAM usage in real-time.",
        "Implemented <strong>production request optimization</strong> — dynamic batching, request queuing, rate limiting, and load balancing across multi-GPU nodes for sustained high-concurrency workloads.",
      ],
      technologies: ["vLLM", "TensorRT-LLM", "NVIDIA NIM", "Llama 70B", "Llama 3 70B FP8", "BF16", "H100 GPU", "Grafana", "Prometheus", "Docker", "Kubernetes", "LLMOps"],
      link: "#",
      github: "#",
      image: "/llm_deployment.png",
      icon: Server,
      gradient: "from-emerald-500 to-cyan-600",
      featured: true,
    },
    {
      title: "Conversational AI Assistant",
      shortDescription: "Production-ready multimodal AI - text, audio, image & PDF inputs with RAG",
      description:
        "A production-ready multimodal conversational AI supporting 4 input modalities (text, audio, image, PDF) with a fully integrated RAG pipeline for answering questions directly from uploaded documents.",
      bullets: [
        "Supports <strong>4 modalities</strong>: text, audio, image, and PDF inputs with a fully integrated <strong>RAG pipeline</strong> for document Q&A.",
        "Integrated semantic search using <strong>FAISS vector store</strong> with <strong>Llama 3.3 70B</strong> via Groq, <strong>OpenAI Whisper</strong> for audio transcription, and <strong>Llama 3.2 Vision</strong> for image understanding.",
        "Deployed on <strong>Streamlit Cloud</strong> with session-aware architecture, maintaining persistent chat history across multi-turn conversations.",
      ],
      technologies: ["FAISS", "Llama 3.3 70B", "Llama 3.2 Vision", "OpenAI Whisper", "Groq", "LangChain", "Streamlit", "RAG"],
      link: "https://chat-all-mit-patel.streamlit.app/",
      github: "https://github.com/VirtulMachine01/Adv-Chatbot?tab=readme-ov-file",
      image: "/chatbot.jpg",
      icon: Bot,
      gradient: "from-purple-600 to-blue-500",
    },
    {
      title: "Movie Recommendation System",
      shortDescription: "NLP-based personalized movie suggestions using TMDB data",
      description:
        "Developed using Count Vectorizer and Cosine Similarity on the TMDB database, with data preprocessing using Pandas, NumPy, and Matplotlib. Deployed as an interactive web application on Streamlit Cloud.",
      bullets: [
        "Built <strong>content-based filtering</strong> using Count Vectorizer and <strong>Cosine Similarity</strong> on 5000+ TMDB movies.",
        "Full data preprocessing pipeline using <strong>Pandas, NumPy, and Matplotlib</strong> for feature engineering.",
        "Deployed as an interactive <strong>Streamlit</strong> web app with live movie poster fetching from <strong>TMDB API</strong>.",
      ],
      technologies: ["NLP", "Cosine Similarity", "TMDB API", "Pandas", "NumPy", "Streamlit"],
      link: "https://movie-recommender-system-by-meet-patel.streamlit.app/",
      github: "https://github.com/MiT1011/Movie_Recommender_System?tab=readme-ov-file",
      image: "/movie.jpeg",
      icon: Film,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Text to SQL - Gemini (Classic)",
      shortDescription: "Convert natural language to SQL queries using Google Gemini",
      description:
        "A Text-to-SQL query extractor web application using Google Gemini Pro, where text input is converted into SQL queries and retrieves data from a SQLite database. Deployed on HuggingFace Spaces.",
      bullets: [
        "Converts plain-English questions into accurate SQL queries using <strong>Google Gemini Pro</strong>.",
        "Retrieves and displays results from a <strong>SQLite</strong> student database in real-time.",
        "Simple and clean Streamlit interface deployed on <strong>HuggingFace Spaces</strong> for instant access.",
      ],
      technologies: ["Gemini Pro", "HuggingFace", "LangChain", "SQLite", "Streamlit", "Text-to-SQL"],
      link: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini",
      github: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini/tree/main",
      image: "/texttosql.jpg",
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
              className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -6 }}
            >
              {/* Featured star */}
              {project.featured && (
                <motion.div
                  className="absolute top-3 right-3 z-10 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ⭐
                </motion.div>
              )}

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
                  {project.github !== "#" && (
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
                  )}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title="Watch Demo"
                    >
                      <Link size={20} />
                    </a>
                  )}
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
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedProject.description }} />

                  {/* Bullet points */}
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="text-purple-500 mt-0.5 flex-shrink-0">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>

                  {/* Screenshot Gallery */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Screenshots</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {selectedProject.images.map((img, i) => (
                          <div key={i} className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 shadow-md">
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="w-full object-cover"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 text-center">
                              {img.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
                    {selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full flex items-center gap-2 text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                    {selectedProject.link !== "#" && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center gap-2 text-sm font-medium transition-colors"
                      >
                        {selectedProject.link.includes("youtube") ? (
                          <><Youtube size={16} /> Watch Demo</>
                        ) : selectedProject.link.includes("springer") || selectedProject.link.includes("arxiv") || selectedProject.link.includes("ieee") ? (
                          <><FileText size={16} /> Read Paper</>
                        ) : (
                          <><Link size={16} /> Live Demo</>
                        )}
                      </a>
                    )}

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