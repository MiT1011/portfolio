import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Link } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Conversational Chatbot (Generative AI)",
      description: "Developed a Conversational AI chatbot supporting text, audio, image, and PDF interactions with RAG tasks for document querying. Built with Streamlit frontend and deployed on Streamlit Cloud.",
      technologies: ["FAISS", "Groq", "Llama3.3 70b", "Llama3.2-vision", "OpenAI whisper", "Huggingface", "Sqlite", "Langchain", "Embedding"],
      link: "https://github.com/VirtulMachine01/Adv-Chatbot",
      github: "https://github.com/VirtulMachine01/Adv-Chatbot"
    },
    {
      title: "Text to SQL (Generative AI)",
      description: "Developed a Text-to-SQL query extractor web application using Google Gemini Pro, where text input is converted into SQL queries and retrieves data from SQLite database.",
      technologies: ["Gemini flash1.5", "Sqlite", "Streamlit", "Huggingface", "Text-to-SQL"],
      link: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini/tree/main",
      github: "https://huggingface.co/spaces/VirtualMachine01/text2query_gemini/tree/main"
    },
    {
      title: "Movie Recommendation System (NLP)",
      description: "Developed using Count Vectorizer and Cosine Similarity, TMDB database, with data preprocessing using Pandas, Numpy, and Matplotlib. Interactive web application deployed on Streamlit Cloud.",
      technologies: ["NLP", "TMDB", "Pandas", "Numpy", "Matplotlib", "Streamlit"],
      link: "https://github.com/MiT1011/Movie_Recommender_System",
      github: "https://github.com/MiT1011/Movie_Recommender_System"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600">Recent AI and Machine Learning Projects</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Link size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;