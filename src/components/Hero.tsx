import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Hero = () => {
  // Track if animation has already played
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
  
  // Animation controls
  const helloControls = useAnimationControls();
  const nameControls = useAnimationControls();
  
  // Animation for character by character text reveal
  const helloText = "Hello\u{1F44B}!!";
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
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_70%)]"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between h-screen relative z-10">
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center md:text-left"
          >
            <div className="mb-6">
              <motion.h2 
                className="text-2xl sm:text-4xl font-bold mb-2 text-purple-300"
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
              </motion.h2>
              
              <h1 className="text-3xl sm:text-5xl font-bold">
                I am {" "}
                <motion.span
                  initial="hidden"
                  animate={nameControls}
                  className="text-purple-300"
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
            </div>
            <p className="text-xl sm:text-2xl mb-10 text-gray-200">
              MTech Student | AI Engineer | Game Developer
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
                className="bg-transparent hover:bg-purple-700 text-white border-2 border-white px-8 py-3 rounded-full font-medium text-lg shadow-lg"
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
            src="/images/cartoon.png" 
            alt="AI Technology Concept" 
            className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
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
        <ArrowDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;