import { timeline } from "../constants/experience";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience & <span className="text-blue-600 dark:text-blue-400">Education</span>
        </motion.h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-10"
            >
              <div className="absolute left-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -ml-2 mt-1"></div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{item.institute}</p>
              <p className="text-sm mb-2">{item.date}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
