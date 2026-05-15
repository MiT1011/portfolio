import { motion } from 'framer-motion';
import {
  Brain, Database, Globe, Code, Server, Cpu,
  Zap, Box, Activity, Layers, Workflow,
  Sparkles, Search, BarChart3, GitBranch,
  Cloud, MessageSquare, Shield, Wrench,
  Gamepad2, Eye,
} from 'lucide-react';

/* ─── core domains (top chips) ─── */

const coreDomains = [
  { name: 'Generative AI', icon: Sparkles, color: 'from-violet-500 to-purple-600' },
  { name: 'Large Language Models', icon: Brain, color: 'from-purple-500 to-indigo-600' },
  { name: 'Multi-Agent Systems', icon: Workflow, color: 'from-indigo-500 to-blue-600' },
  { name: 'RAG Pipelines', icon: Database, color: 'from-blue-500 to-cyan-600' },
  { name: 'Finetuning', icon: Zap, color: 'from-amber-500 to-orange-600' },
  { name: 'Computer Vision', icon: Search, color: 'from-teal-500 to-emerald-600' },
  { name: 'NLP', icon: MessageSquare, color: 'from-cyan-500 to-teal-600' },
  { name: 'Deep Learning', icon: Layers, color: 'from-emerald-500 to-green-600' },
  { name: 'Edge AI', icon: Cpu, color: 'from-orange-500 to-red-600' },
  { name: 'Responsible AI', icon: Shield, color: 'from-rose-500 to-pink-600' },
];

/* ─── 6 tool-group boxes ─── */

const toolGroups = [
  {
    label: 'AI / ML',
    color: 'text-orange-500',
    borderHover: 'hover:border-orange-400/40 dark:hover:border-orange-500/30',
    icon: Brain,
    items: [
      'PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn',
      'HuggingFace', 'vLLM', 'TensorRT', 'NVIDIA NIM',
      'Local Models', 'Ollama', 'RAG', 'Prompt Engineering',
    ],
  },
  {
    label: 'Agentic & LLM',
    color: 'text-purple-500',
    borderHover: 'hover:border-purple-400/40 dark:hover:border-purple-500/30',
    icon: Workflow,
    items: [
      'LangChain', 'LangGraph', 'PydanticAI', 'CrewAI',
      'OpenAI', 'Groq', 'Claude Code', 'Cursor AI',
      'Antigravity', 'MCPs', 'Tools',
    ],
  },
  {
    label: 'Deployment & Monitoring',
    color: 'text-green-500',
    borderHover: 'hover:border-green-400/40 dark:hover:border-green-500/30',
    icon: Cloud,
    items: [
      'Docker', 'Kubernetes', 'CI/CD', 'Git',
      'Prometheus', 'Grafana', 'LLMOps', 'LangSmith',
      'AWS', 'GCP',
    ],
  },
  {
    label: 'Databases',
    color: 'text-blue-500',
    borderHover: 'hover:border-blue-400/40 dark:hover:border-blue-500/30',
    icon: Database,
    items: [
      'PostgreSQL', 'FAISS', 'Pinecone',
      'ChromaDB', 'Milvus', 'PgVector', 'Redis',
    ],
  },
  {
    label: 'Languages',
    color: 'text-yellow-500',
    borderHover: 'hover:border-yellow-400/40 dark:hover:border-yellow-500/30',
    icon: Code,
    items: ['Python', 'C#', 'SQL'],
  },
  {
    label: 'Other',
    color: 'text-pink-500',
    borderHover: 'hover:border-pink-400/40 dark:hover:border-pink-500/30',
    icon: Wrench,
    items: [
      'FastAPI', 'Flask', 'Streamlit', 'Pandas',
      'Tavily Web Search', 'VR', 'AR',
      'Game Development', 'Unity',
    ],
  },
];

/* ─── component ─── */

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800" />
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Domains and technologies I use to build intelligent systems
          </p>
        </motion.div>

        {/* ── core domain chips ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {coreDomains.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="group"
              >
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 hover:border-purple-300/50 dark:hover:border-purple-600/30 transition-all duration-300 cursor-default">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${d.color} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                    {d.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── 6 tool group boxes (uniform grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolGroups.map((group, gi) => {
            const GIcon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: gi * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                className={`bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/40 rounded-2xl p-5 ${group.borderHover} transition-colors duration-300`}
              >
                {/* group header */}
                <div className="flex items-center gap-2 mb-4">
                  <GIcon className={`w-5 h-5 ${group.color}`} />
                  <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {group.label}
                  </h3>
                </div>

                {/* pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, idx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: gi * 0.04 + idx * 0.025 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
