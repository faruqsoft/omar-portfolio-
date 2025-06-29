import { skillCategories } from "../constants/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map(({ name, icon: Icon }) => (
                  <div key={name} className="flex flex-col items-center">
                    <Icon className="text-3xl text-blue-500 dark:text-blue-400" />
                    <span className="text-sm mt-1">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
