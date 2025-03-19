import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Create a custom event to trigger animation in Hero
    const event = new CustomEvent('restartHeroAnimation');
    window.dispatchEvent(event);
  };

  // Custom X (Twitter) icon
  const XIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M4 4l11.5 11.5M4 20L19 5" />
    </svg>
  );

  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Meet Patel</h3>
            <div className="text-gray-300">
              <p className="text-sm">
                There are some other projects and skills mentioned in my GitHub and LinkedIn.<br/><br/>
                Thank you for visiting my profile.<br/>
                Have a good day!!<br/>
                Feel free to connect.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a 
                  href="mailto:meetnpatel101112@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  meetnpatel101112@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <a 
                  href="tel:+918866589159"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  +91 88665 89159
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">
                  Pune, Maharashtra
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MiT1011"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/meet-patel-b76742202/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/MeetPatel10111?t=98mSg9xeM5y3Wj43LzJoUw&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Meet Patel. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700 p-2 rounded-full"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;