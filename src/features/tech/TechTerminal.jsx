import { motion } from "framer-motion";
import { styles } from "../../styles";
import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";

const TechTerminal = () => {
  // Group technologies by category for better terminal display
  const techCategories = {
    "Programming Languages": ["C Programming", "C++ Programming", "Python Programming", "JavaScript"],
    "Tools & Platforms": ["VS Code", "git", "github", "docker"],
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
        A comprehensive overview of the technologies, tools, and frameworks
        I use to bring robotics and software projects to life.
      </motion.p>

      {/* Terminal Window */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="terminal-window w-full"
      >
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="ml-3 font-mono text-xs text-secondary">
            jewel@portfolio: ~/skills
          </span>
        </div>

        <div className="p-6 md:p-8 font-mono text-sm space-y-6">
          {/* Terminal command */}
          <div className="text-secondary">
            <span className="text-terminal-green">$</span> cat tech_stack.json
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {Object.entries(techCategories).map(([category, techs], catIndex) => (
              <motion.div
                key={category}
                variants={fadeIn("right", "spring", 0.3 + catIndex * 0.1, 0.75)}
                className="space-y-3"
              >
                <div className="text-blueprint-light">
                  "{category}": [
                </div>

                <div className="pl-6 space-y-2">
                  {techs.map((tech, index) => {
                    const techData = technologies.find(t => t.name === tech);
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-3 text-secondary group hover:text-blueprint-light transition-colors"
                      >
                        <span className="text-terminal-green">•</span>
                        <span className="min-w-[140px]">"{tech}"</span>
                        {techData && (
                          <div className="w-8 h-8 rounded border border-blueprint/30 p-1 flex items-center justify-center group-hover:border-blueprint group-hover:shadow-blueprint transition-all">
                            <img
                              src={techData.icon}
                              alt={tech}
                              className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                        )}
                        {index < techs.length - 1 && <span className="text-secondary/50">,</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="text-blueprint-light pl-0">
                  {catIndex < Object.entries(techCategories).length - 1 ? "]," : "]"}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies Grid */}
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="pt-6 border-t border-blueprint/20"
          >
            <div className="text-secondary mb-4">
              <span className="text-terminal-green">$</span> ls -la tech_icons/
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={fadeIn("up", "spring", 0.5 + index * 0.05, 0.75)}
                  className="group"
                >
                  <div className="relative bento-box p-4 flex flex-col items-center justify-center aspect-square hover:shadow-blueprint transition-all">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-tertiary border border-blueprint px-2 py-1 rounded text-xs text-blueprint whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {tech.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal footer */}
          <div className="pt-4 text-terminal-green text-xs">
            <span className="animate-terminal-blink">█</span>
          </div>
        </div>
      </motion.div>

      {/* Additional Info Boxes */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          variants={fadeIn("right", "spring", 0.6, 0.75)}
          className="bento-box p-6"
        >
          <div className="font-mono text-blueprint text-xs mb-2 uppercase tracking-wider">
            Specialization
          </div>
          <div className="font-sans text-white text-lg font-semibold mb-2">
            Robotics Programming
          </div>
          <div className="font-sans text-secondary text-sm">
            Python, C++, ROS, Embedded Systems
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.75)}
          className="bento-box p-6"
        >
          <div className="font-mono text-blueprint text-xs mb-2 uppercase tracking-wider">
            Learning
          </div>
          <div className="font-sans text-white text-lg font-semibold mb-2">
            AI & Machine Learning
          </div>
          <div className="font-sans text-secondary text-sm">
            TensorFlow, PyTorch, Computer Vision
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 0.8, 0.75)}
          className="bento-box p-6"
        >
          <div className="font-mono text-blueprint text-xs mb-2 uppercase tracking-wider">
            Hardware
          </div>
          <div className="font-sans text-white text-lg font-semibold mb-2">
            Microcontrollers
          </div>
          <div className="font-sans text-secondary text-sm">
            Arduino, Raspberry Pi, Sensors
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(TechTerminal, "tech");
