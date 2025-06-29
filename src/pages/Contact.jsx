import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Thank you! This feature will be connected soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          className="mt-8 flex justify-center gap-6 text-2xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
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

export default Contact;
