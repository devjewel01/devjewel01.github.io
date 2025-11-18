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

      {/* Terminal Window */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="terminal-window w-full"
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="flex items-center gap-2">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
          </div>
          <span className="font-mono text-xs text-secondary/70">
            jewel@portfolio:~/tech-stack
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm space-y-6">
          {/* Command prompt */}
          <div className="flex items-center gap-2 text-secondary">
            <span className="text-terminal-green">➜</span>
            <span className="text-blueprint">~</span>
            <span className="text-secondary/70">cat</span>
            <span className="text-yellow-400">stack.yml</span>
          </div>

          {/* ASCII Art Separator */}
          <div className="text-blueprint/40 text-xs leading-tight">
            ╔════════════════════════════════════════════════════╗
          </div>

          {/* Technology Categories */}
          <div className="space-y-5">
            {Object.entries(techCategories).map(([key, { label, techs, color }], catIndex) => (
              <motion.div
                key={key}
                variants={fadeIn("right", "spring", 0.3 + catIndex * 0.1, 0.75)}
                className="space-y-2"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2">
                  <span className={`${color} font-bold`}>■</span>
                  <span className={`${color} text-sm font-semibold tracking-wide`}>
                    {label}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-blueprint/30 to-transparent" />
                </div>

                {/* Technologies List */}
                <div className="pl-4 space-y-1.5">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + catIndex * 0.1 + index * 0.05 }}
                      className="flex items-center gap-2 text-secondary/90 hover:text-white transition-colors group"
                    >
                      <span className={`${color} text-xs`}>▸</span>
                      <span className="text-sm group-hover:translate-x-1 transition-transform">
                        {tech}
                      </span>
                      <div className={`h-px flex-1 ${color} opacity-0 group-hover:opacity-30 transition-opacity`} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ASCII Art Separator */}
          <div className="text-blueprint/40 text-xs leading-tight">
            ╚════════════════════════════════════════════════════╝
          </div>

          {/* System Info */}
          <motion.div
            variants={fadeIn("up", "spring", 0.8, 0.75)}
            className="pt-4 space-y-2 text-xs"
          >
            <div className="flex items-center gap-3 text-secondary/70">
              <span className="text-terminal-green">●</span>
              <span>System: Ready</span>
              <span className="text-blueprint">|</span>
              <span>Stack: Updated</span>
              <span className="text-blueprint">|</span>
              <span>Status: Active</span>
            </div>
          </motion.div>

          {/* Terminal cursor */}
          <div className="flex items-center gap-2">
            <span className="text-terminal-green">➜</span>
            <span className="text-blueprint">~</span>
            <span className="animate-terminal-blink text-white">█</span>
          </div>
        </div>
      </motion.div>

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
