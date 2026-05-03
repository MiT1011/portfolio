import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Users, Brain, Database, Globe, Terminal,
  Gamepad2Icon, Book, Code, Library, Server, Cpu,
  Clock, Lightbulb, Shuffle, Shield, Zap, Box, Activity,
} from 'lucide-react';

type SkillCategory = 'languages' | 'libraries' | 'vectordb' | 'frameworks' | 'deployment';
type SkillSection = 'domains' | 'technical' | 'soft';

const technicalSkills = {
  domains: [
    { name: 'Generative AI', icon: Brain },
    { name: 'LLM Engineering', icon: Brain },
    { name: 'Multi-agent Workflows', icon: Cpu },
    { name: 'RAG Pipelines', icon: Database },
    { name: 'Finetuning', icon: Zap },
    { name: 'Computer Vision', icon: Globe },
    { name: 'Natural Language Processing', icon: Globe },
    { name: 'Deep Learning', icon: Brain },
    { name: 'Machine Learning', icon: Brain },
    { name: 'Edge AI Deployment', icon: Activity },
    { name: 'Responsible AI', icon: Shield },
    { name: 'Prompt Engineering', icon: Lightbulb },
    { name: 'Virtual Reality', icon: Globe },
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
    { name: 'PydanticAI', icon: Library },
    { name: 'CrewAI', icon: Library },
    { name: 'HF Transformers', icon: Library },
    { name: 'PyTorch', icon: Library },
    { name: 'TensorFlow', icon: Library },
    { name: 'Keras', icon: Library },
    { name: 'OpenCV', icon: Library },
    { name: 'FastAPI', icon: Library },
    { name: 'Streamlit', icon: Library },
    { name: 'Numpy', icon: Library },
    { name: 'Pandas', icon: Library },
    { name: 'Tavily', icon: Library },
    { name: 'LangSmith', icon: Library },
    { name: 'WebSockets', icon: Library },
  ],
  vectordb: [
    { name: 'FAISS', icon: Database },
    { name: 'Pinecone', icon: Database },
    { name: 'Milvus', icon: Database },
    { name: 'Chroma', icon: Database },
    { name: 'PgVector', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Redis', icon: Database },
    { name: 'SQLite', icon: Database },
  ],
  frameworks: [
    { name: 'vLLM', icon: Cpu },
    { name: 'TensorRT', icon: Cpu },
    { name: 'NVIDIA NIM', icon: Cpu },
    { name: 'LangGraph', icon: Cpu },
    { name: 'CrewAI', icon: Cpu },
    { name: 'PydanticAI', icon: Cpu },
  ],
  deployment: [
    { name: 'Docker', icon: Box },
    { name: 'Kubernetes', icon: Server },
    { name: 'CI/CD', icon: Activity },
    { name: 'Git', icon: Code2 },
    { name: 'Prometheus', icon: Activity },
    { name: 'Grafana', icon: Activity },
    { name: 'LLMOps', icon: Cpu },
    { name: 'LangSmith', icon: Activity },
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

const Skills = () => {
  const [skillSection, setSkillSection] = useState<SkillSection>('domains');
  const [techCategory, setTechCategory] = useState<SkillCategory>('languages');

  const currentSkills =
    skillSection === 'domains'
      ? technicalSkills.domains
      : skillSection === 'technical'
        ? technicalSkills[techCategory]
        : softSkills;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            The tools and technologies I work with
          </p>

          {/* Section toggle */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {(['domains', 'technical', 'soft'] as SkillSection[]).map((section) => (
              <button
                key={section}
                onClick={() => setSkillSection(section)}
                className={`px-4 py-2 rounded-full transition-colors text-sm font-medium ${
                  skillSection === section
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {section === 'domains' ? 'Domains' : section === 'technical' ? 'Technical' : 'Soft Skills'}
              </button>
            ))}
          </div>

          {/* Sub-category tabs (only for Technical) */}
          {skillSection === 'technical' && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {([
                { key: 'languages', label: 'Languages' },
                { key: 'libraries', label: 'Libraries & Tools' },
                { key: 'vectordb', label: 'Databases' },
                { key: 'frameworks', label: 'LLM Inference' },
                { key: 'deployment', label: 'Deployment & MLOps' },
              ] as { key: SkillCategory; label: string }[]).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTechCategory(key)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    techCategory === key
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Skill grid */}
          <motion.div
            key={`${skillSection}-${techCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <skill.icon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <h3 className="font-medium text-sm whitespace-normal leading-snug">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
