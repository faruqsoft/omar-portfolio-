import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Omar Faruq</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl mt-4 font-medium text-gray-600 dark:text-gray-300"
        >
          <Typewriter
            words={["MERN Stack Developer", "React Enthusiast", "Node.js Backend Builder"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-lg"
        >
          I build modern full-stack web applications using MongoDB, Express.js, React, and Node.js.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-6 text-2xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
