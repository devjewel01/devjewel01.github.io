import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import RobotSVG from "./RobotSVG";

const HeroBento = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Robotics Engineer & Software Developer";

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
    <section className="relative w-full min-h-screen mx-auto pt-24 pb-16 blueprint-bg">
      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main Hero Box - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 bento-box p-8 md:p-12 min-h-[400px] flex flex-col justify-center scanline"
          >
            {/* Terminal-style greeting */}
            <div className="font-mono text-terminal-green text-sm mb-6">
              <span className="text-blueprint">jewel@portfolio</span>
              <span className="text-secondary">:</span>
              <span className="text-white">~</span>
              <span className="text-terminal-green">$</span>{" "}
              <span className="text-secondary">./introduce.sh</span>
            </div>

            {/* Name */}
            <h1 className={`${styles.heroHeadText} mb-4`}>
              Hi, I'm{" "}
              <span className="blueprint-text">Jewel Nath</span>
            </h1>

            {/* Typing effect subtitle */}
            <div className="min-h-[80px]">
              <p className={`${styles.heroSubText} flex items-center`}>
                {displayText}
                <span className="terminal-cursor ml-1"></span>
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="blueprint-corners p-4">
                <div className="font-mono text-blueprint-light text-2xl font-bold">
                  1000+
                </div>
                <div className="font-mono text-secondary text-xs mt-1 uppercase tracking-wider">
                  Students Trained
                </div>
              </div>
              <div className="blueprint-corners p-4">
                <div className="font-mono text-blueprint-light text-2xl font-bold">
                  3
                </div>
                <div className="font-mono text-secondary text-xs mt-1 uppercase tracking-wider">
                  Robots Built
                </div>
              </div>
              <div className="blueprint-corners p-4 col-span-2 md:col-span-1">
                <div className="font-mono text-blueprint-light text-2xl font-bold">
                  5+
                </div>
                <div className="font-mono text-secondary text-xs mt-1 uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Robot SVG Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bento-box p-8 min-h-[400px] flex items-center justify-center"
          >
            <RobotSVG className="max-w-full max-h-full" />
          </motion.div>

          {/* About Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5 bento-box p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-terminal-green">$</span>
              <span className={styles.blueprintLabel}>About.md</span>
            </div>
            <p className="font-sans text-secondary text-sm md:text-base leading-relaxed">
              I'm a robotics programmer with hands-on experience building robots like{" "}
              <span className="text-blueprint-light font-semibold">Niko</span>,{" "}
              <span className="text-blueprint-light font-semibold">Blueberry</span>, and{" "}
              <span className="text-blueprint-light font-semibold">Sheena</span>.
              As a trainer, I've taught{" "}
              <span className="text-blueprint-light font-semibold">1000+ students</span>{" "}
              robotics and programming, igniting their passion for technology.
            </p>
          </motion.div>

          {/* Current Focus Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bento-box p-6 md:p-8 terminal-window"
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
                &gt; Machine Learning
              </div>
              <div className="text-blueprint-light">
                &gt; Artificial Intelligence
              </div>
              <div className="text-blueprint-light">
                &gt; Robotics Development
              </div>
              <div className="text-blueprint-light">
                &gt; Embedded Systems
              </div>
            </div>
          </motion.div>

          {/* Quick Links Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-3 bento-box p-6 md:p-8"
          >
            <div className={`${styles.blueprintLabel} mb-4`}>Quick Links</div>
            <div className="space-y-3">
              <a
                href="https://github.com/devjewel01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-secondary hover:text-blueprint-light transition-colors group"
              >
                <span className="text-terminal-green">→</span>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/jewel-nath"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-secondary hover:text-blueprint-light transition-colors group"
              >
                <span className="text-terminal-green">→</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 font-mono text-sm text-secondary hover:text-blueprint-light transition-colors group"
              >
                <span className="text-terminal-green">→</span>
                <span>Contact</span>
              </a>
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
