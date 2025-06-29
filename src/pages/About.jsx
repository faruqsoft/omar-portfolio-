import { motion } from "framer-motion";
// use your image here or a placeholder

const About = () => {
  return (
    <section className="min-h-[80vh] px-6 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.img
          src='https://i.ibb.co/nWVVpCk/ACLD-196294-copy.jpg'
          alt="Omar Faruq"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I’m <strong>Omar Faruq</strong>, a passionate MERN stack developer from Bangladesh. I build robust and modern full-stack web applications using technologies like MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I love building clean UI, reusable components, and scalable backend APIs. Currently, I'm working on various full-stack projects and polishing my DevOps and Firebase skills.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
