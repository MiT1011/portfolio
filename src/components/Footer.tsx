import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

          {/* Brand blurb */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Meet Patel</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI Software Engineer specializing in production Generative AI systems, RAG pipelines, and agentic workflows.
              <br /><br />
              There are more projects and experiments on my GitHub and LinkedIn.
              <br />
              Feel free to connect - ways happy to chat!
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:meetnpatel101112@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  meetnpatel101112@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="tel:+918866589159"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  +91 88665 89159
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Hyderabad, India</span>
              </div>

            </div>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Connect</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/MiT1011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm group-hover:underline">github.com/MiT1011</span>
              </a>

              <a
                href="https://www.linkedin.com/in/meet-patel-b76742202"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm group-hover:underline">linkedin.com/in/meet-patel-b76742202</span>
              </a>


              <a
                href="https://x.com/MeetPatel10111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <XIcon />
                <span className="text-sm group-hover:underline">@MeetPatel10111</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
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