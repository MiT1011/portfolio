import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Brain, Database, Globe, Terminal, Gamepad2Icon, Book, Code, Library, Server, Cpu, Clock, Lightbulb, Shuffle } from 'lucide-react';

type SkillCategory = 'languages' | 'libraries' | 'vectordb' | 'frameworks';
type SkillSection = 'domains' | 'technical' | 'soft';

const technicalSkills = {
  domains: [
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Generative AI', icon: Cpu },
    { name: 'Large Language Models', icon: Brain },
    { name: 'Deep Learning', icon: Brain },
    { name: 'Machine Learning', icon: Brain },
    { name: 'Natural Language Processing', icon: Globe },
    { name: 'Vector DBs', icon: Database },
    { name: 'SQL', icon: Database },
    { name: 'Virtual Reality', icon: Globe },
    { name: 'Augmented Reality', icon: Globe },
    { name: 'Game Development', icon: Gamepad2Icon },
  ],
  languages: [
    { name: 'Python', icon: Code },
    { name: 'C#', icon: Code },
    { name: 'C++', icon: Code },
  ],
  libraries: [
    { name: 'LangChain', icon: Library },
    { name: 'LangGraph', icon: Library },
    { name: 'HF Transformers', icon: Library },
    { name: 'LlamaIndex', icon: Library },
    { name: 'PyTorch', icon: Library },
    { name: 'Scikit-learn', icon: Library },
    { name: 'TensorFlow', icon: Library },
    { name: 'Keras', icon: Library },
    { name: 'Numpy', icon: Library },
    { name: 'Pandas', icon: Library },
    { name: 'Streamlit', icon: Library },
    { name: 'Flask', icon: Library },
  ],
  vectordb: [
    { name: 'FAISS', icon: Database },
    { name: 'PineCone', icon: Database },
    { name: 'Milvus', icon: Database },
    { name: 'Chroma', icon: Database },
    { name: 'PGVector', icon: Database },
  ],
  frameworks: [
    { name: 'LangGraph', icon: Cpu },
    { name: 'CrewAI', icon: Cpu },
    { name: 'PhiData', icon: Cpu },
  ],
};

const softSkills = [
  { name: 'Problem Solving', icon: Terminal },
  { name: 'Leadership', icon: Users },
  { name: 'Teamwork', icon: Users },
  { name: 'Time Management', icon: Clock },
  { name: 'Creativity', icon: Lightbulb },
  { name: 'Adaptability', icon: Shuffle },
];

const About = () => {
  const [skillSection, setSkillSection] = useState<SkillSection>('domains');
  const [techCategory, setTechCategory] = useState<SkillCategory>('languages');

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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I am a passionate MTech student specializing in Artificial Intelligence with experience in Generative AI, Deep Learning, Machine Learning, and Natural Language Processing. Skilled in designing and deploying cutting-edge AI applications, I have worked on research collaborations, developed innovative solutions using transformers and large language models, and delivered end-to-end AI applications with real-world impact.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium shadow-lg inline-flex items-center gap-2"
              onClick={() => window.open("https://drive.google.com/file/d/1j3J9sF1DHysYPkYRNaL3ZIKaLN_MsS5x/view?usp=sharing", "_blank")}
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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          
          {/* Skills Toggle Section */}
          <div className="mb-8">
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setSkillSection('domains')}
                className={`px-4 py-2 rounded-full transition-colors text-base ${
                  skillSection === 'domains'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                Domains
              </button>
              <button
                onClick={() => setSkillSection('technical')}
                className={`px-4 py-2 rounded-full transition-colors text-base ${
                  skillSection === 'technical'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setSkillSection('soft')}
                className={`px-4 py-2 rounded-full transition-colors text-base ${
                  skillSection === 'soft'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                Soft Skills
              </button>
            </div>

            {skillSection === 'technical' && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <button
                  onClick={() => setTechCategory('languages')}
                  className={`px-3 py-1 rounded-full text-base transition-colors ${
                    techCategory === 'languages'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  Languages
                </button>
                <button
                  onClick={() => setTechCategory('libraries')}
                  className={`px-3 py-1 rounded-full text-base transition-colors ${
                    techCategory === 'libraries'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  Libraries
                </button>
                <button
                  onClick={() => setTechCategory('vectordb')}
                  className={`px-3 py-1 rounded-full text-base transition-colors ${
                    techCategory === 'vectordb'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  Vector DB
                </button>
                <button
                  onClick={() => setTechCategory('frameworks')}
                  className={`px-3 py-1 rounded-full text-base transition-colors ${
                    techCategory === 'frameworks'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  Agentic Frameworks
                </button>
              </div>
            )}

            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3`}>
              {skillSection === 'domains' && 
                technicalSkills.domains.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <h3 className="font-medium text-base whitespace-normal">{skill.name}</h3>
                    </div>
                  </motion.div>
                ))
              }
              {skillSection === 'technical' && 
                technicalSkills[techCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <h3 className="font-medium text-base whitespace-normal">{skill.name}</h3>
                    </div>
                  </motion.div>
                ))
              }
              {skillSection === 'soft' && 
                softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <h3 className="font-medium text-base whitespace-normal">{skill.name}</h3>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;