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

      {/* Terminal Window Wrapper */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="relative border border-white/10 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="bg-tertiary border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Terminal Buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
            </div>
            {/* Terminal Title */}
            <span className="ml-3 text-secondary/70 font-mono text-sm">
              tech_skills.sh
            </span>
          </div>
          <div className="flex items-center gap-2 text-secondary/50 text-xs font-mono">
            <span className="hidden sm:inline">zsh</span>
            <span>●</span>
            <span className="hidden sm:inline">5 modules</span>
          </div>
        </div>

        {/* Command Prompt Line */}
        <div className="bg-black/20 border-b border-white/5 px-6 py-3 font-mono text-sm">
          <span className="text-terminal-green">➜</span>
          <span className="text-blueprint ml-2">~/portfolio</span>
          <span className="text-secondary/50 ml-2">cat tech_skills.sh</span>
          <span className="animate-pulse ml-1">▊</span>
        </div>

        {/* Bento Grid Layout - Terminal Style */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
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
                {/* Category Header with Terminal Style */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 ${color.replace('text-', 'bg-')} rounded-full`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`${color} text-xs font-mono`}>$</span>
                      <h3 className={`${color} font-mono text-sm font-semibold tracking-wider`}>
                        {label.toUpperCase()}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-secondary/50 text-xs font-mono">[{techs.length} techs]</span>
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
                        bg-tertiary/50 backdrop-blur-sm
                        border border-white/10
                        hover:border-${color.replace('text-', '')}/50
                        transition-all duration-300
                        cursor-pointer
                        group/pill
                      `}
                    >
                      <span className={`${color.replace('text-', 'text-')}/70 text-sm font-mono group-hover/pill:${color} transition-colors`}>
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

        {/* Terminal Footer */}
        <div className="bg-black/20 border-t border-white/5 px-6 py-2 font-mono text-xs text-secondary/50 flex items-center justify-between">
          <span>5 categories loaded successfully</span>
          <span className="hidden sm:inline">Press ESC to exit</span>
        </div>
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
