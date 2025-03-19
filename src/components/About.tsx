import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Brain, Database, Globe, Terminal } from 'lucide-react';

const skills = {
  technical: [
    { name: 'AI & Machine Learning', icon: Brain, progress: 95 },
    { name: 'Deep Learning & NLP', icon: Globe, progress: 90 },
    { name: 'Generative AI & LLMs', icon: Code2, progress: 92 },
    { name: 'Vector Databases', icon: Database, progress: 88 },
  ],
  soft: [
    { name: 'Research & Innovation', icon: Users, progress: 95 },
    { name: 'Problem Solving', icon: Terminal, progress: 92 },
  ],
};

const About = () => {
  const [skillType, setSkillType] = useState<'technical' | 'soft'>('technical');

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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

            <div className="mb-8">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSkillType('technical')}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    skillType === 'technical'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  Technical Skills
                </button>
                <button
                  onClick={() => setSkillType('soft')}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    skillType === 'soft'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  Soft Skills
                </button>
              </div>

              <div className="space-y-4">
                {skills[skillType].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <skill.icon className="w-6 h-6 text-purple-600" />
                      <h3 className="font-medium">{skill.name}</h3>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium shadow-lg inline-flex items-center gap-2"
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
      </div>
    </section>
  );
};

export default About;