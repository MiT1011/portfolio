import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ArrowDown, Hand } from 'lucide-react';

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  // Track if animation has already played
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  // Typewriter cycling animation
  const specializations = [
    "Generative AI",
    "Large Language Models",
    "Agentic Workflows",
    "Multi-Agent Systems",
    "RAG Pipelines",
    "LLM Deployment & Inference",
  ];
  const [typedText, setTypedText] = useState("");
  const [specIndex, setSpecIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = specializations[specIndex];
    const typeSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDelete = 1400;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, typedText.length + 1);
        setTypedText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        const next = current.slice(0, typedText.length - 1);
        setTypedText(next);
        if (next === "") {
          setIsDeleting(false);
          setSpecIndex((prev) => (prev + 1) % specializations.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, specIndex]);

  // Animation controls
  const helloControls = useAnimationControls();
  const nameControls = useAnimationControls();

  // Animation for character by character text reveal
  const helloText = "Hello!!";
  const nameText = "Meet Patel";

  const characterAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
  };

  // Function to start animations
  const startAnimations = () => {
    helloControls.start("visible");
    nameControls.start("visible");
    setHasAnimationPlayed(true);
  };

  // Reset animation function
  const resetAndStartAnimations = () => {
    // Reset controls to hidden state first
    helloControls.set("hidden");
    nameControls.set("hidden");

    // Short timeout to ensure state is reset before starting again
    setTimeout(() => {
      helloControls.start("visible");
      nameControls.start("visible");
    }, 50);
  };

  // Start animation on initial render
  useEffect(() => {
    startAnimations();

    // Add listener for home navigation
    const handleHashChange = () => {
      if (window.location.hash === '#home' || window.location.hash === '') {
        resetAndStartAnimations();
      }
    };

    // Add listener for custom animation restart event
    const handleRestartAnimation = () => {
      resetAndStartAnimations();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('restartHeroAnimation', handleRestartAnimation);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('restartHeroAnimation', handleRestartAnimation);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 text-gray-900 dark:text-white">
      <div className="absolute inset-0 opacity-30 dark:opacity-30 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.08)_0,rgba(147,51,234,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_70%)]"></div>
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-100" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between h-screen relative z-10">
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center md:text-left"
          >
            <div className="mb-6">
              <motion.div
                className="text-2xl sm:text-4xl font-bold mb-2 text-purple-600 dark:text-purple-300 flex items-center justify-center md:justify-start"
                initial="hidden"
                animate={helloControls}
              >
                {helloText.split("").map((char, index) => (
                  <motion.span
                    key={`hello-${index}`}
                    custom={index}
                    variants={characterAnimation}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  custom={helloText.length}
                  variants={characterAnimation}
                  style={{ display: "inline-block", marginLeft: "5px" }}
                >
                  <Hand className="w-8 h-8 text-yellow-300 inline-block" />
                </motion.span>
              </motion.div>

              <h1 className="text-3xl sm:text-5xl font-bold">
                I am {" "}
                <motion.span
                  initial="hidden"
                  animate={nameControls}
                  className="text-purple-600 dark:text-purple-300"
                >
                  {nameText.split("").map((char, index) => (
                    <motion.span
                      key={`name-${index}`}
                      custom={index}
                      variants={characterAnimation}
                      style={{ display: "inline-block" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>

              {/* Open to Work badge */}
              {import.meta.env.VITE_OPEN_TO_WORK_BADGE === 'true' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-green-500/15 dark:bg-green-500/20 border border-green-500/40 dark:border-green-400/40 backdrop-blur-sm text-green-700 dark:text-green-300 text-sm font-medium"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  Open to Work
                </motion.div>
              )}
            </div>
            <p className="text-xl sm:text-2xl mb-10 text-gray-600 dark:text-gray-200">
              AI Software Engineer at Quantum AI Global
            </p>
            <p className="text-lg sm:text-xl mb-10 text-purple-600 dark:text-purple-300 font-medium h-8">
              <span>{typedText}</span>
              <span className="inline-block w-0.5 h-5 bg-purple-600 dark:bg-purple-300 ml-0.5 align-middle animate-pulse" />
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-purple-100 dark:hover:bg-purple-700 text-purple-700 dark:text-white border-2 border-purple-600 dark:border-white px-8 py-3 rounded-full font-medium text-lg shadow-lg"
                onClick={() => {
                  scrollToSection('footer');
                }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src="/portfolio/cartoon.png"
            alt="AI Technology Concept"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md max-h-[40vh] md:max-h-none object-contain transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
        onClick={() => {
          scrollToSection('about');
        }}
      >
        <ArrowDown className="w-8 h-8 text-purple-600 dark:text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;