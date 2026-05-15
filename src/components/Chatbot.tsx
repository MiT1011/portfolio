import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Trash2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are the AI assistant embedded in Meet Patel's personal portfolio website. You speak AS Meet Patel in FIRST PERSON — use "I", "my", "me", "mine" instead of "Meet" or "Meet Patel". You answer questions about your background, skills, experience, projects, and achievements. Always be supportive, confident, and accurate. If someone asks something unrelated, politely redirect them.

Here is everything about Meet Patel:

## Profile
- Name: Meet Patel
- Role: AI Software Engineer
- Total Professional Experience: ~2 years (1 year full-time at Quantum AI Global + 8 months AI research internship at DRDO + 6 months game dev internship)
- Specialization: LLM & Generative AI, Agentic Workflows, RAG Pipelines, Multi-Agent Systems, Computer Vision, Deep Learning, NLP, LLM Deployment & Inference Optimization
- Also experienced in: Game Development (Unity/C#), Virtual Reality, Augmented Reality
- Location: Hyderabad, India
- Email: meetnpatel101112@gmail.com
- GitHub: github.com/MiT1011
- LinkedIn: linkedin.com/in/meet-patel-b76742202

## Current Role — AI Software Engineer at Quantum AI Global (June 2025 – Present, ~1 year)
This is my current full-time role where I work on production-grade LLM systems:
- Built LLM-powered applications integrating web search with Tavily, chat memory, and RAG pipelines for long-form structured content generation — producing outputs of 15,000–20,000 tokens using custom LangChain workflows.
- Deployed open-source LLMs (Llama 70B BF16, Llama 3 70B FP8) on H100 GPUs using vLLM and TensorRT-LLM independently, with KV cache tuning, Docker containerization, and production monitoring through Prometheus and Grafana.
- Deployed full BF16 precision Llama 70B for critical workloads (no quantization trade-offs), and a parallel FP8 quantized Llama 3 70B instance for cost-efficient general-purpose tasks.
- Containerized model serving with NVIDIA NIM for reproducible, scalable deployments with health checks and auto-recovery.
- Designed complex multi-agent workflows using LangGraph and PydanticAI with human-in-the-loop, state memory, multi-step reasoning and PostgreSQL & Redis backends.
- Developed a 2-tier multi-agent network analysis module using LangGraph with 4–5 agents per tier and 8–10 specialized tools for distributed private-network environments.
- Key tech: LangGraph, LangChain, PydanticAI, vLLM, TensorRT-LLM, NVIDIA NIM, FastAPI, Docker, Kubernetes, PostgreSQL, Redis, Prometheus, Grafana

## Previous — AI Research Intern at DRDO (July 2024 – March 2025, 8 months)
MTech research internship at DRDO's DIA-SVPCoE under Gujarat University:
- MTech thesis: "Data Extraction from CCTV Images with Transformer-Based Models" — built and deployed a vision-language model for automated surveillance data extraction.
- Fine-tuned a lightweight edge model on 50,000+ CCTV images. Benchmark improvements: BLEU 62.9→78.1, CLIP Score 78.3→87.5, ROUGE 43.8→56.4.
- Integrated OCR, translation, and small language models for extracting textual data from camera feeds across multilingual environments.
- Built a conversational interface to query structured CCTV data — production-deployed on-premise at an organization.
- Awarded the India AI Fellowship by MeitY for AI research excellence.
- Research paper published at ICDSAAI 2025 (IEEE Xplore).
- Designed a local tool for document summarization, translation, and semantic search over large internal databases.

## Previous — Unity Game Developer at ZenVara Infotech (Feb 2023 – July 2023, 6 months)
- Designed and developed 2D and 3D games using Unity and C#. Implemented game mechanics, physics, and UI/UX with performance optimization.

## Education
- MTech in CSE (AI) — DIAT, Pune — CGPA: 8.44/10 (Aug 2023 – June 2025). DIAT is under DRDO, Ministry of Defence.
- BE in Computer Engineering — SCET, Surat — CGPA: 9.10/10 (Aug 2019 – July 2023)

## Achievements
- India AI Fellowship by MeitY for AI surveillance research at DRDO
- Research Paper at ICDSAAI 2025 (IEEE Xplore): https://ieeexplore.ieee.org/abstract/document/11011827
- CS GATE 2023 & DA GATE 2024 qualified

## Key Projects (in priority order)

### 1. Chat with CCTV Cluster (⭐ Featured — MTech Thesis)
An end-to-end intelligent surveillance system I built as my MTech thesis project at DRDO. Awarded MeitY India AI Fellowship.
- Finetuned a compact open-weight vision model on a custom-curated dataset of 50,000 CCTV camera images, improving BLEU, ROUGE, and CLIPScore benchmarks for CCTV-specific image captioning.
- Integrated OCR, translation, and small language models for extracting and processing textual data from camera feeds across multilingual environments.
- Built a conversational interface to query structured CCTV data — users can ask natural language questions and retrieve relevant camera feeds or extracted insights via keyword search.
- Solution architecture developed during M.Tech thesis; system is production-deployed on-premise at an organization for real-time monitoring.
- Awarded the India AI Fellowship by MeitY for AI research excellence. Research paper published at ICDSAAI 2025 (IEEE Xplore).
- Tech: Finetuning, Vision Transformers, OCR, Translation, Small LMs, PyTorch, OpenCV, FastAPI, On-Premise Deployment
- Paper: https://ieeexplore.ieee.org/abstract/document/11011827

### 2. QueryForge AI — Agentic Text-to-SQL (⭐ Featured)
A production-grade Agentic Text-to-SQL system I built from scratch. It converts plain English into SQL queries across PostgreSQL, MySQL, and SQLite.
- Architecture: 7 specialized agents orchestrated via LangGraph StateGraph — Schema Analyzer, Planner, SQL Generator, Validator, Self-Healer, Executor, Visualizer
- Parallel schema fan-out with conditional runtime routing
- Dual Human-in-the-Loop (HITL) safety gates: Gate 1 approves the NL execution plan; Gate 2 confirms exact SQL before INSERT/UPDATE/DELETE
- Self-Healing Loop: Validator catches errors → injects error context → SQL Generator retries up to 3 times automatically
- Visualizer Agent auto-selects the best chart type (bar, line, pie, scatter, table) from result semantics
- Validated at 98% accuracy on a 78-table enterprise production database
- Tech: LangGraph, LangChain, Llama 4 Scout 17B via Groq, FastAPI, SQLAlchemy, PostgreSQL, MySQL, SQLite, Pydantic v2
- YouTube Demo: https://www.youtube.com/watch?v=so4ItTa0DwQ
- GitHub: https://github.com/MiT1011/text_to_sql

### 3. Production LLM Infrastructure (⭐ Featured)
A production-grade local LLM deployment platform I built at Quantum AI Global for enterprise inference.
- Deployed Llama 70B in full BF16 precision on NVIDIA H100 GPUs — no quantization trade-offs for critical inference workloads.
- Explored and benchmarked vLLM (continuous batching, PagedAttention, tensor parallelism) and TensorRT-LLM independently as inference backends, comparing throughput, latency, and resource utilization.
- Deployed a parallel Llama 3 70B FP8 quantized instance for general-purpose tasks — reducing compute cost while maintaining output quality for non-critical workloads.
- Containerized model serving with NVIDIA NIM for reproducible, scalable deployments with built-in health checks and auto-recovery.
- Built a full Grafana + Prometheus observability stack tracking GPU utilization, tokens/sec, request queue depth, P95/P99 latency, and VRAM usage in real-time.
- Implemented production request optimization — dynamic batching, request queuing, rate limiting, and load balancing across multi-GPU nodes.
- Tech: vLLM, TensorRT-LLM, NVIDIA NIM, Llama 70B BF16, Llama 3 70B FP8, H100 GPU, Grafana, Prometheus, Docker, Kubernetes, LLMOps

### 4. Conversational AI Assistant
A production-ready multimodal conversational AI I built that supports 4 input modalities:
- Text, Audio (OpenAI Whisper for transcription), Image (Llama 3.2 Vision for understanding), PDF (RAG with FAISS vector store)
- Integrated semantic search using FAISS vector store with Llama 3.3 70B via Groq for intelligent document Q&A
- Session-aware architecture with persistent chat history across multi-turn conversations
- Deployed on Streamlit Cloud
- Tech: FAISS, Llama 3.3 70B, Llama 3.2 Vision, OpenAI Whisper, Groq, LangChain, Streamlit, RAG
- Live: https://chat-all-mit-patel.streamlit.app/
- GitHub: https://github.com/VirtulMachine01/Adv-Chatbot

### 5. Movie Recommendation System
A content-based movie recommendation system I built using NLP techniques:
- Built content-based filtering using Count Vectorizer and Cosine Similarity on 5,000+ TMDB movies
- Full data preprocessing pipeline using Pandas, NumPy, and Matplotlib for feature engineering
- Interactive Streamlit web app with live movie poster fetching from TMDB API
- Tech: NLP, Cosine Similarity, TMDB API, Pandas, NumPy, Streamlit
- Live: https://movie-recommender-system-by-meet-patel.streamlit.app/
- GitHub: https://github.com/MiT1011/Movie_Recommender_System

### 6. Text to SQL — Gemini (Classic)
A Text-to-SQL query extractor web application:
- Converts plain-English questions into accurate SQL queries using Google Gemini Pro
- Retrieves and displays results from a SQLite student database in real-time
- Simple Streamlit interface deployed on HuggingFace Spaces for instant access
- Tech: Gemini Pro, HuggingFace, LangChain, SQLite, Streamlit
- Live: https://huggingface.co/spaces/VirtualMachine01/text2query_gemini

## Tech Stack
AI/ML: PyTorch, TensorFlow, Keras, OpenCV, HuggingFace, vLLM, TensorRT, NVIDIA NIM, Ollama, RAG, OCR, Translation, Small LMs
Agentic: LangChain, LangGraph, PydanticAI, CrewAI, OpenAI, Groq, Claude Code, Cursor AI, Antigravity, MCPs
Deployment: Docker, Kubernetes, CI/CD, Prometheus, Grafana, LLMOps, LangSmith, AWS, GCP, H100 GPU
DBs: PostgreSQL, FAISS, Pinecone, ChromaDB, Milvus, PgVector, Redis
Languages: Python, C#, SQL
Other: FastAPI, Flask, Streamlit, Pandas, Tavily, Unity, VR, AR

IMPORTANT RULES:
- ALWAYS answer in FIRST PERSON. Say "I built", "my experience" — NEVER "Meet built".
- Experience: "~2 years" (1yr full-time + 8mo research + 6mo game dev). Do NOT say 3 years.
- Keep answers SHORT — 2-3 sentences for simple, 4-5 for detailed.
- Use bullet points, **bold** for key terms.
- Be enthusiastic but brief and ACCURATE. This is a chat widget, not an essay.`;

// Simple markdown renderer for chat messages
const renderMarkdown = (text: string) => {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Replace **bold** with <strong>
    let rendered = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Replace *italic* with <em>
    rendered = rendered.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
    // Bullet points
    const isBullet = /^\s*[-•*]\s+/.test(rendered);
    if (isBullet) {
      rendered = rendered.replace(/^\s*[-•*]\s+/, '');
      return (
        <div key={i} className="flex gap-1.5 items-start mt-0.5">
          <span className="text-purple-500 mt-0.5 flex-shrink-0 text-xs">▸</span>
          <span dangerouslySetInnerHTML={{ __html: rendered }} />
        </div>
      );
    }
    // Empty line = spacing
    if (!rendered.trim()) return <div key={i} className="h-1.5" />;
    return <p key={i} className={i > 0 ? 'mt-1' : ''} dangerouslySetInnerHTML={{ __html: rendered }} />;
  });
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Greeting tooltip auto-hide
  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "⚠️ Groq API key is not configured. Please set VITE_GROQ_API_KEY in your environment." },
        ]);
        setIsLoading(false);
        return;
      }

      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: userMessage.content },
      ];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-4-scout-17b-16e-instruct',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 512,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantContent = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that. Please try again.";

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Something went wrong. Please try again in a moment." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What are your key skills?",
    "Tell me about QueryForge AI",
    "What is your work experience?",
    "What achievements do you have?",
  ];

  return (
    <>
      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Greeting tooltip */}
        <AnimatePresence>
          {showGreeting && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl px-4 py-2.5 whitespace-nowrap border border-purple-200 dark:border-purple-700"
            >
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                👋 Ask me anything!
              </p>
              <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-purple-200 dark:border-purple-700 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowGreeting(false);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <MessageCircle size={22} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
          )}
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[440px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-8rem)] flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-purple-200/50 dark:border-purple-800/50"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,243,255,0.95))',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm">My AI Assistant</h3>
                <p className="text-purple-200 text-xs">Ask anything about me</p>
              </div>
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="text-white/60 hover:text-white transition-colors p-1"
                  title="Clear chat"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 dark:bg-gray-900/90">
              {messages.length === 0 && (
                <div className="flex flex-col items-center text-center pt-4">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mb-3">
                    <Bot size={28} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-sm mb-1">
                    Hi! I'm Meet's portfolio assistant 👋
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                    Ask me about my skills, projects, experience, or achievements.
                  </p>

                  {/* Suggested questions */}
                  <div className="flex flex-col gap-2 w-full">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setInput('');
                          const userMessage: Message = { role: 'user', content: q };
                          setMessages((prev) => [...prev, userMessage]);
                          setIsLoading(true);

                          const apiKey = import.meta.env.VITE_GROQ_API_KEY;
                          if (!apiKey) {
                            setMessages((prev) => [...prev, { role: 'assistant', content: "⚠️ Groq API key is not configured." }]);
                            setIsLoading(false);
                            return;
                          }

                          fetch('https://api.groq.com/openai/v1/chat/completions', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
                            body: JSON.stringify({
                              model: 'meta-llama/llama-4-scout-17b-16e-instruct',
                              messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: q }],
                              temperature: 0.7,
                              max_tokens: 512,
                            }),
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              setMessages((prev) => [...prev, { role: 'assistant', content: data.choices?.[0]?.message?.content || "Sorry, please try again." }]);
                            })
                            .catch(() => {
                              setMessages((prev) => [...prev, { role: 'assistant', content: "Something went wrong. Please try again." }]);
                            })
                            .finally(() => setIsLoading(false));
                        }}
                        className="text-left text-xs bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-2 rounded-xl transition-colors border border-purple-100 dark:border-purple-800"
                      >
                        💬 {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'
                      }`}
                  >
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-purple-600 text-white rounded-br-md'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-bl-md'
                      }`}
                  >
                    {msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="px-4 py-3 border-t border-purple-100 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 flex-shrink-0">
              <div className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Meet..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition-all disabled:opacity-50"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                >
                  <Send size={16} />
                </motion.button>
              </div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-1.5">
                Powered by Llama Scout · Groq
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
