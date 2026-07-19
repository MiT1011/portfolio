import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'India AI Fellowship',
    org: 'MeitY (Ministry of Electronics & IT)',
    description: 'Nationally recognized fellowship awarded and funded for innovative contributions to AI surveillance research and deployment.',
    color: 'from-yellow-400 to-orange-500',
    badge: 'Fellowship',
  },
  {
    icon: FileText,
    title: 'IEEE Publication - ICDSAAI 2025',
    org: 'International Conference on Data Science, AI & Applications',
    description: '"Transformer-based Models for Visual and Textual Data Extraction"',
    color: 'from-blue-500 to-purple-600',
    badge: 'Published',
    link: 'https://ieeexplore.ieee.org/abstract/document/11011827',
  },
];

const certificates = [
  { name: 'CrewAI', url: 'https://drive.google.com/file/d/1WQ9c7dJlHk7TTVB5NwJ0O_McXswz5xrN/view' },
  { name: 'Generative AI', url: 'https://drive.google.com/file/d/1rdmMr5-cjbmQsx5s9N0pE9fNR-LTT7Xd/view' },
  { name: 'Image & Video Analysis', url: 'https://drive.google.com/file/d/1j_3cDOjn_ww25lLnr2C1RHhcLGsBmXHu/view' },
  { name: 'CS GATE 2023', url: 'https://drive.google.com/file/d/1y-1Q2RiEthz2UhMGW4HlNg3wSCnvzFRg/view' },
  { name: 'DA GATE 2024', url: 'https://drive.google.com/file/d/18S7FoufODw9k2ELnGMDx4raEw3XtTsKI/view' },
  { name: 'Prompt Engineering', url: 'https://drive.google.com/file/d/1kX40lMmRohEQTSMSf9cJXQDY0F1KNfXR/view' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Photo and About Info Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
              <img
                src="/profile_photo.jpg"
                alt="Meet Patel"
                className="w-full h-full object-cover rounded-full"
                style={{ objectPosition: "50% 60%" }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap"
            >
              🏆 India AI Fellow · MeitY
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm an <span className="font-semibold text-purple-600">AI Software Engineer</span> with hands-on experience building and shipping production Generative AI systems - including RAG pipelines, vision-language models, finetuning, Agentic workflows, and complex multi-agent architectures.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Currently at <span className="font-semibold">Quantum AI Global</span>, I deploy open-source LLMs on H100 GPUs using vLLM, TensorRT and NVIDIA NIM, design multi-agent LangGraph workflows with human-in-the-loop reasoning, and build scalable FastAPI backends powering RAG applications that generate 15,000–20,000 token structured outputs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I was awarded the <span className="font-semibold text-yellow-600 dark:text-yellow-400">India AI Fellowship by MeitY</span> for my research at DRDO on Transformer-based CCTV data extraction, which was published at ICDSAAI 2025. I specialize in LangGraph, CrewAI, PydanticAI and end-to-end LLM deployment.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium shadow-lg inline-flex items-center gap-2"
              onClick={() => window.open("https://drive.google.com/file/d/1d0bE56ikecuolbI1Uo5zQm9FOcMwtE_7/view?usp=drive_link", "_blank")}
            >
              Download Resume
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => {
              const CardWrapper = (item as any).link ? motion.a : motion.div;
              const wrapperProps = (item as any).link
                ? { href: (item as any).link, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <CardWrapper
                  key={index}
                  {...wrapperProps}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 flex gap-5 items-start border border-gray-100 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.color} text-white`}>{item.badge}</span>
                      {(item as any).link && (
                        <span className="text-xs text-purple-500 font-medium ml-auto">View Paper →</span>
                      )}
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">{item.org}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Certificates</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certificates.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 border border-purple-200 dark:border-purple-800 px-4 py-2 rounded-full shadow-sm hover:border-purple-500 hover:shadow-md transition-all cursor-pointer"
              >
                <Award className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;