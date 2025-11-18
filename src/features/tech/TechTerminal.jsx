import { motion } from "framer-motion";
import { styles } from "../../styles";
import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";

const TechTerminal = () => {
  // Group technologies by category - Updated to reflect current job and learning
  const techCategories = {
    "backend": {
      label: "Backend Development",
      techs: [".NET", "C#", "MongoDB", "Python", "Node.js"],
      color: "text-terminal-green"
    },
    "frontend": {
      label: "Frontend Development",
      techs: ["Angular", "React", "JavaScript", "TypeScript"],
      color: "text-blueprint-light"
    },
    "robotics": {
      label: "Robotics & Automation",
      techs: ["ROS2", "Python", "Playwright", "Linux/Ubuntu", "C++"],
      color: "text-[#00FFCB]"
    },
    "devops": {
      label: "DevOps & Tools",
      techs: ["Docker", "Git", "GitHub", "VS Code", "Visual Studio", "WebStorm"],
      color: "text-blueprint"
    },
    "learning": {
      label: "AI & Learning",
      techs: ["LLM", "AI Agents", "MCP", "RAG", "Prompt Engineering"],
      color: "text-yellow-400"
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

      {/* Bento Grid Layout - Unique Floating Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {Object.entries(techCategories).map(([key, { label, techs, color }], catIndex) => (
          <motion.div
            key={key}
            variants={fadeIn("up", "spring", 0.2 + catIndex * 0.1, 0.75)}
            className={`
              bento-box group relative overflow-hidden
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
                  <h3 className={`${color} font-mono text-sm font-semibold tracking-wider`}>
                    {label.toUpperCase()}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-secondary/50 text-xs font-mono">{techs.length} techs</span>
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
                      relative px-3 py-1.5 rounded-full
                      bg-tertiary/50 backdrop-blur-sm
                      border border-white/5
                      hover:border-white/20
                      transition-all duration-300
                      cursor-pointer
                      group/pill
                    `}
                  >
                    <span className="text-white/90 text-sm font-sans group-hover/pill:text-white transition-colors">
                      {tech}
                    </span>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover/pill:opacity-20 transition-opacity ${color.replace('text-', 'bg-')} blur-md -z-10`} />
                  </motion.div>
                ))}
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${color.replace('text-', 'bg-')} opacity-5 blur-2xl rounded-full -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Icon Grid - Minimal Cards */}
      <motion.div
        variants={fadeIn("up", "spring", 0.9, 0.75)}
        className="mt-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.03 }}
            className="group relative"
          >
            <div className="aspect-square bento-box p-3 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-blueprint">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
              />

              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-tertiary border border-blueprint/50 px-3 py-1.5 rounded text-xs text-blueprint-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-lg">
                {tech.name}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-tertiary border-l border-t border-blueprint/50 rotate-45" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Info Cards - Updated */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          variants={fadeIn("right", "spring", 1, 0.75)}
          className="bento-box p-6 border-l-2 border-terminal-green"
        >
          <div className="font-mono text-terminal-green text-xs mb-2 uppercase tracking-wider flex items-center gap-2">
            <span>■</span> Current Focus
          </div>
          <div className="font-sans text-white text-lg font-semibold mb-2">
            .NET Development
          </div>
          <div className="font-sans text-secondary text-sm">
            Building enterprise solutions with .NET, MongoDB, and Angular
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 1.1, 0.75)}
          className="bento-box p-6 border-l-2 border-[#00FFCB]"
        >
          <div className="font-mono text-[#00FFCB] text-xs mb-2 uppercase tracking-wider flex items-center gap-2">
            <span>■</span> Robotics Background
          </div>
          <div className="font-sans text-white text-lg font-semibold mb-2">
            ROS2 & Automation
          </div>
          <div className="font-sans text-secondary text-sm">
            ROS2, Python, Playwright automation on Linux/Ubuntu
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 1.2, 0.75)}
          className="bento-box p-6 border-l-2 border-yellow-400"
        >
          <div className="font-mono text-yellow-400 text-xs mb-2 uppercase tracking-wider flex items-center gap-2">
            <span>■</span> Exploring
          </div>
          <div className="font-sans text-white text-lg font-semibold mb-2">
            AI & LLM
          </div>
          <div className="font-sans text-secondary text-sm">
            LLMs, AI Agents, MCP, RAG, and Prompt Engineering
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(TechTerminal, "tech");
