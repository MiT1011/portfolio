import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's discuss your next AI project</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a
                    href="mailto:meetnpatel101112@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    meetnpatel101112@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <a
                    href="tel:+918866589159"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 88665 89159
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Social Links</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/MiT1011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-100 dark:bg-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 p-3 rounded-lg transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                  <span>github.com/MiT1011</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/meet-patel-b76742202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-100 dark:bg-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>linkedin.com/in/meet-patel-b76742202</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;