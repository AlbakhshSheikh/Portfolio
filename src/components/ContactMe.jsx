import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-transparent p-4 text-white"
      style={{
        borderTop: '0.5px solid rgba(255,255,255,0.2)',
        borderBottom: '0.5px solid rgba(255,255,255,0.2)'
      }}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6">Get in touch with me</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center gap-6"
          >
            <a
              href="tel:+919766453761"
              className="flex items-center gap-4 no-underline"
              aria-label="Call Me"
            >
              <div className="p-4 rounded-full glass text-accent">
                <FaPhone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Call Me</h3>
                <p className="text-gray-300">(+91) 9766453761</p>
              </div>
            </a>

            <a
              href="mailto:albakhshsheikhofficial@gmail.com"
              className="flex items-center gap-4 no-underline"
              aria-label="Email"
            >
              <div className="p-4 rounded-full glass text-accent">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-300">albakhshsheikhofficial@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=India"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 no-underline"
              aria-label="Location"
            >
              <div className="p-4 rounded-full glass text-accent">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-gray-300">India</p>
              </div>
            </a>
          </motion.div>

          {/* Social Links - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/albakhshsheikh/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 no-underline"
              aria-label="LinkedIn"
            >
              <div className="p-4 rounded-full glass text-accent">
                <FaLinkedin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <p className="text-gray-300 hover:text-accent duration-300">Albakhsh Sheikh</p>
              </div>
            </a>

            <a
              href="https://github.com/AlbakhshSheikh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 no-underline"
              aria-label="GitHub"
            >
              <div className="p-4 rounded-full glass text-accent">
                <FaGithub size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">GitHub</h3>
                <p className="text-gray-300 hover:text-accent duration-300">AlbakhshSheikh</p>
              </div>
            </a>

            <a
              href="https://wa.me/919766453761"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 no-underline"
              aria-label="WhatsApp"
            >
              <div className="p-4 rounded-full glass text-accent">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">WhatsApp</h3>
                <p className="text-gray-300 hover:text-accent duration-300">(+91) 9766453761</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
