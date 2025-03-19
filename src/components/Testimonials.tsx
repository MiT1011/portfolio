import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const testimonials = [
  {
    quote: "An exceptional developer who delivered beyond our expectations.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    linkedin: "https://linkedin.com/in/example"
  },
  {
    quote: "Transformed our vision into reality with impressive attention to detail.",
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    linkedin: "https://linkedin.com/in/example"
  },
  {
    quote: "Outstanding technical skills and excellent communication throughout.",
    name: "Emma Davis",
    role: "CEO",
    company: "DigitalFirst",
    linkedin: "https://linkedin.com/in/example"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-purple-100 dark:border-purple-900"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;