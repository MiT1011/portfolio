import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Link, X } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Conversational Chatbot",
      shortDescription: "Multi-modal AI Conversational chatbot with RAG",
      description: "Developed a Conversational AI chatbot supporting user input as text, audio, image and PDF interactions using RAG for document querying. Web Application is built with Streamlit frontend and deployed on Streamlit Cloud.",
      technologies: ["FAISS", "Huggingface", "Llama3.3 70b", "Llama3.2-vision", "OpenAI whisper", "Groq", "Langchain", "Embedding"],
      link: "https://chat-all-mit-patel.streamlit.app/",
      github: "https://github.com/VirtulMachine01/Adv-Chatbot?tab=readme-ov-file",
      image: "images/chatbot.jpg"
    },
    {
      title: "Text to SQL",
      shortDescription: "Convert natural language to SQL queries",
      description: "Developed a Text-to-SQL query extractor web application using Google Gemini Pro, where text input is converted into SQL queries and retrieves data from SQLite database.",
      technologies: ["Gemini Models", "Huggingface", "LangChain", "Sqlite", "Streamlit", "Text-to-SQL"],
      link: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini",
      github: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini/tree/main",
      image: "images/text2sql.jpg"
    },
    {
      title: "Movie Recommendation System",
      shortDescription: "NLP-based personalized movie suggestions",
      description: "Developed using Count Vectorizer and Cosine Similarity, TMDB database, with data preprocessing using Pandas, Numpy, and Matplotlib. Interactive web application deployed on Streamlit Cloud.",
      technologies: ["NLP", "Embedding", "Streamlit", "TMDB", "Pandas", "Numpy", "Matplotlib"],
      link: "https://movie-recommender-system-by-meet-patel.streamlit.app/",
      github: "https://github.com/MiT1011/Movie_Recommender_System?tab=readme-ov-file",
      image: "images/movie.jpeg"
    }
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
          <p className="text-xl text-gray-600 dark:text-gray-300">Recent AI and Machine Learning Projects</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 dark:bg-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                  />
                  <button 
                    className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-full p-1 shadow-md"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={24} className="text-gray-800 dark:text-gray-200" />
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full flex items-center gap-2 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-full flex items-center gap-2 transition-colors"
                    >
                      <Link size={18} />
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