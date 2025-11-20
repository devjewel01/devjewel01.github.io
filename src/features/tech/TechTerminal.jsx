import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";

const TechTerminal = () => {
  const techCategories = {
    "backend": {
      label: "Backend Development",
      techs: [".NET", "C#", "MongoDB", "Python"],
      color: "text-terminal-green"
    },
    "frontend": {
      label: "Frontend Development",
      techs: ["Angular", "JavaScript", "TypeScript"],
      color: "text-blueprint-light"
    },
    "robotics": {
      label: "Robotics & Automation",
      techs: ["ROS2", "Python", "C++", "Linux", "Arduino", "ESP", "Raspberry PI", "Tinkercad", "EasyEDA"],
      color: "text-orange-500"
    },
    "devops": {
      label: "DevOps & Tools",
      techs: ["Docker", "Git", "GitHub", "VS Code", "Visual Studio", "WebStorm"],
      color: "text-blueprint"
    },
    "learning": {
      label: "AI & Learning",
      techs: ["Prompt Engineering", "LLM", "AI Agents", "RAG", "MCP"],
      color: "text-pink-500"
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary font-sans text-base md:text-lg max-w-3xl leading-relaxed mb-10"
      >
        Tech stack powering enterprise software, robotics automation, and AI-driven solutions.
      </motion.p>

      {/* Modern Card Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {Object.entries(techCategories).map(([key, { label, techs, color }], catIndex) => (
          <motion.div
            key={key}
            variants={fadeIn("up", "spring", 0.2 + catIndex * 0.1, 0.75)}
            className={`
              glass-card group relative overflow-hidden
              ${key === 'backend' ? 'lg:col-span-2' : ''}
              ${key === 'learning' ? 'md:col-span-2 lg:col-span-1' : ''}
            `}
          >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${color.replace('text-', 'from-')} to-transparent`} />

            {/* Card Content */}
            <div className="relative p-6 h-full flex flex-col">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 ${color.replace('text-', 'bg-')} rounded-full`} />
                <div>
                  <h3 className={`${color} text-lg font-semibold tracking-wide`}>
                    {label}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-secondary/50 text-xs">{techs.length} technologies</span>
                    <div className={`h-px w-8 ${color.replace('text-', 'bg-')} opacity-30`} />
                  </div>
                </div>
              </div>

              {/* Technologies as Floating Pills */}
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`
                      relative px-3 py-1.5 rounded
                      glass-light
                      hover:glass
                      transition-all duration-300
                      cursor-pointer
                      group/pill
                    `}
                  >
                    <span className={`${color.replace('text-', 'text-')}/70 text-sm group-hover/pill:${color} transition-colors`}>
                      {tech}
                    </span>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded opacity-0 group-hover/pill:opacity-20 transition-opacity ${color.replace('text-', 'bg-')} blur-md -z-10`} />
                  </motion.div>
                ))}
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${color.replace('text-', 'bg-')} opacity-5 blur-2xl rounded-full -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity`} />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechTerminal, "tech");
