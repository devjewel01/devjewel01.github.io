import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import TechOrb from "../../components/ui/TechOrb";

const HeroBento = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Software Engineer (.NET) | Robotics Explorer";

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full min-h-screen mx-auto pt-24 pb-16 blueprint-bg overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(5, 191, 219, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0, 255, 203, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(5, 191, 219, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute top-0 bottom-0 w-px bg-blueprint"
            style={{ left: `${(i + 1) * 16.66}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute left-0 right-0 h-px bg-terminal-green"
            style={{ top: `${(i + 1) * 16.66}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2 + 0.5,
            }}
          />
        ))}
      </div>

      <div className={`max-w-7xl mx-auto ${styles.paddingX} relative z-10`}>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Main Hero Box - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="col-span-7 md:col-span-8 bento-box p-4 md:p-8 lg:p-12 min-h-[350px] md:min-h-[400px] flex flex-col justify-center scanline relative group"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blueprint/5 via-terminal-green/5 to-blueprint/5 rounded-lg" />
            </div>
            {/* Terminal-style greeting */}
            <div className="font-mono text-terminal-green text-xs md:text-sm mb-3 md:mb-6">
              <span className="text-blueprint">jewel@portfolio</span>
              <span className="text-secondary">:</span>
              <span className="text-white">~</span>
              <span className="text-terminal-green">$</span>{" "}
              <span className="text-secondary">./introduce.sh</span>
            </div>

            {/* Name */}
            <h1 className={`${styles.heroHeadText} mb-2 md:mb-4 text-3xl md:text-5xl lg:text-6xl font-bold`}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blueprint-light via-terminal-green to-blueprint bg-clip-text text-transparent animate-blueprint-glow">
                Jewel Nath
              </span>
            </h1>

            {/* Typing effect subtitle */}
            <div className="min-h-[60px] md:min-h-[80px]">
              <p className={`${styles.heroSubText} flex items-center text-xs md:text-base lg:text-lg`}>
                {displayText}
                <span className="terminal-cursor ml-1"></span>
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 relative z-10">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="blueprint-corners p-2 md:p-4 cursor-pointer group/stat"
              >
                <div className="font-mono text-blueprint-light text-lg md:text-2xl font-bold group-hover/stat:text-terminal-green transition-colors">
                  1000+
                </div>
                <div className="font-mono text-secondary text-[8px] md:text-xs mt-1 uppercase tracking-wider">
                  Students
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="blueprint-corners p-2 md:p-4 cursor-pointer group/stat"
              >
                <div className="font-mono text-blueprint-light text-lg md:text-2xl font-bold group-hover/stat:text-terminal-green transition-colors">
                  3
                </div>
                <div className="font-mono text-secondary text-[8px] md:text-xs mt-1 uppercase tracking-wider">
                  Robots
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="blueprint-corners p-2 md:p-4 col-span-2 md:col-span-1 cursor-pointer group/stat"
              >
                <div className="font-mono text-blueprint-light text-lg md:text-2xl font-bold group-hover/stat:text-terminal-green transition-colors">
                  5+
                </div>
                <div className="font-mono text-secondary text-[8px] md:text-xs mt-1 uppercase tracking-wider">
                  Years Exp
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Orb Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-5 md:col-span-4 bento-box p-3 md:p-6 lg:p-8 min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden relative"
          >
            <TechOrb />
          </motion.div>

          {/* About Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="col-span-12 md:col-span-5 bento-box p-4 md:p-6 lg:p-8 group hover:shadow-lg hover:shadow-blueprint/10 transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-terminal-green">$</span>
              <span className={styles.blueprintLabel}>About.md</span>
            </div>
            <p className="font-sans text-secondary text-sm md:text-base leading-relaxed">
              A passionate Software Engineer (.NET) with a strong foundation in programming and robotics.
              Currently working at{" "}
              <span className="text-blueprint-light font-semibold">Orbitax</span>, where I build and enhance
              .NET-based applications. Alongside my professional work, I actively explore robotics, IoT, and
              automation projects — having successfully completed{" "}
              <span className="text-blueprint-light font-semibold">three humanoid robotics prototypes</span>.
              With deep enthusiasm for problem-solving and continuous learning, I aim to bridge the gap between
              software development and intelligent robotics.
            </p>
          </motion.div>

          {/* Current Focus Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="col-span-12 md:col-span-4 bento-box p-4 md:p-6 lg:p-8 terminal-window hover:shadow-lg hover:shadow-terminal-green/10 transition-shadow"
          >
            <div className="terminal-header mb-4">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-secondary">
                <span className="text-terminal-green">$</span> cat current_focus.txt
              </div>
              <div className="text-blueprint-light mt-3">
                &gt; .NET Development
              </div>
              <div className="text-blueprint-light">
                &gt; Robotics & IoT
              </div>
              <div className="text-blueprint-light">
                &gt; ROS2 & Embedded Systems
              </div>
              <div className="text-blueprint-light">
                &gt; Arduino & Raspberry Pi
              </div>
            </div>
          </motion.div>

          {/* Quick Links Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="col-span-12 md:col-span-3 bento-box p-4 md:p-6 lg:p-8 hover:shadow-lg hover:shadow-blueprint/10 transition-shadow"
          >
            <div className={`${styles.blueprintLabel} mb-4`}>Quick Links</div>
            <div className="space-y-3">
              <motion.a
                href="https://github.com/devjewel01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 font-mono text-sm text-secondary hover:text-blueprint-light transition-colors group cursor-pointer"
              >
                <motion.span
                  className="text-terminal-green"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jewel-nath"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 font-mono text-sm text-secondary hover:text-blueprint-light transition-colors group cursor-pointer"
              >
                <motion.span
                  className="text-terminal-green"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                >
                  →
                </motion.span>
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 font-mono text-sm text-secondary hover:text-blueprint-light transition-colors group cursor-pointer"
              >
                <motion.span
                  className="text-terminal-green"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                >
                  →
                </motion.span>
                <span>Contact</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about">
            <div className="w-[32px] h-[58px] rounded-3xl border-2 border-blueprint flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-2 rounded-full bg-blueprint mb-1"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBento;
