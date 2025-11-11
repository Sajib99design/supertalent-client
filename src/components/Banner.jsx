

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Replace with your actual image URL
const PROFILE_IMAGE_URL = 'https://i.ibb.co.com/5x18sdfv/Screenshot-2.png';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const imageCardVariants = {
    hidden: { opacity: 0, x: 50, rotate: 5 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <section className="bg-gradient-to-r from-[#632EE3]/10 to-orange-900/10 text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* ---------- Left Content Section ---------- */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl md:text-6xl font-extrabold leading-tight"
            variants={textItemVariants}
          >
            <h2 className="text-blue-900  md:text-6xl  inline text-3xl">
            Connect Client <br /> With   <span className='bg-gradient-to-l from-[#632EE3] to-orange-900 bg-clip-text text-transparent'> SuperTalents </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="h-1 bg-gradient-to-l from-[#632EE3] to-orange-900 mt-1 w-4/5"
            ></motion.div>
          </motion.h1>

          <motion.p className="text-gray-800 max-w-lg" variants={textItemVariants}>
          Explore countless job openings and take the next step toward your dream career.
          One platform. Endless opportunities. Find your dream job now.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              className="flex items-center justify-center px-8 py-3 bg-blue-700 hover:bg-blue-600 rounded-lg text-lg font-semibold transition duration-300 shadow-lg shadow-blue-700/50"
              variants={textItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find a job
            </motion.button>
            <motion.button
              className="flex items-center justify-center px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg font-semibold transition duration-300"
              variants={textItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create a Job
            </motion.button>
          </div>
        </motion.div>

        {/* ---------- Right Image/Card Section (Animated) ---------- */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          variants={imageCardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Background elements */}
          <div className="absolute w-80 h-80 bg-green-500/20 rounded-full blur-3xl opacity-50 -top-10 right-10 animate-pulse"></div>

          {/* Image Container with 3D layers effect */}
          <div className="relative p-2 rounded-2xl bg-gradient-to-br from-green-500/50 to-purple-700/50 shadow-2xl transition-all duration-300 hover:-translate-y-2 ">
            {/* Inner layers for 3D effect */}
            <div className="absolute inset-0 rounded-2xl border-4 border-green-500/50 transform translate-x-2 translate-y-2"></div>
            <div className="absolute inset-0 rounded-2xl border-4 border-purple-700/50 transform -translate-x-2 -translate-y-2"></div>

            <div className="relative rounded-xl overflow-hidden shadow-xl  w-72 h-72 ">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Profile of a UI/UX designer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Info Card (Similar to the image) */}
            <motion.div
              className="absolute bottom-5 -right-10 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 hover:-translate-y-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-lg font-bold text-green-400">Web developer </p>
              <p className="text-sm text-gray-300">$3000</p>
              <div className="flex items-center text-xs text-gray-400 mt-1">
                <span>5 years of experience</span>
                <ArrowUpRight className="w-4 h-4 ml-1 text-green-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;