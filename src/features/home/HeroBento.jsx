import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";

// Floating Background Icons Component
const FloatingIcons = () => {
  const icons = [
    // Robots
    { type: 'robot', x: '10%', y: '20%', delay: 0, duration: 8 },
    { type: 'robot', x: '85%', y: '60%', delay: 2.5, duration: 10 },
    { type: 'robot', x: '70%', y: '15%', delay: 5, duration: 9 },

    // Code brackets
    { type: 'code', symbol: '<>', x: '15%', y: '70%', delay: 1, duration: 7 },
    { type: 'code', symbol: '{·}', x: '80%', y: '30%', delay: 3.5, duration: 8 },
    { type: 'code', symbol: '</>', x: '25%', y: '45%', delay: 6, duration: 9.5 },

    // AI brain/chip icons
    { type: 'chip', x: '90%', y: '80%', delay: 2, duration: 7.5 },
    { type: 'chip', x: '20%', y: '85%', delay: 4.5, duration: 8.5 },
    { type: 'chip', x: '60%', y: '75%', delay: 7, duration: 9 },

    // Circuit nodes
    { type: 'node', x: '40%', y: '25%', delay: 3, duration: 6.5 },
    { type: 'node', x: '50%', y: '90%', delay: 5.5, duration: 10 },
    { type: 'node', x: '75%', y: '50%', delay: 1.5, duration: 7.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: icon.x, top: icon.y }}
          animate={{
            y: [0, -60, 0],
            x: [0, 30, -15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon.type === 'robot' && (
            <svg className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(5,191,219,0.6)]" viewBox="0 0 50 50" fill="none">
              <rect x="15" y="10" width="20" height="15" stroke="#05BFDB" strokeWidth="1.5" rx="2" />
              <circle cx="20" cy="16" r="1.5" fill="#00FFCB" />
              <circle cx="30" cy="16" r="1.5" fill="#00FFCB" />
              <line x1="25" y1="5" x2="25" y2="10" stroke="#05BFDB" strokeWidth="1.5" />
              <circle cx="25" cy="4" r="2" fill="#00FFCB" />
              <rect x="18" y="25" width="14" height="18" stroke="#05BFDB" strokeWidth="1.5" rx="2" />
              <circle cx="25" cy="34" r="3" stroke="#05BFDB" strokeWidth="1.5" fill="none" />
              <line x1="15" y1="30" x2="10" y2="30" stroke="#05BFDB" strokeWidth="1.5" />
              <line x1="35" y1="30" x2="40" y2="30" stroke="#05BFDB" strokeWidth="1.5" />
            </svg>
          )}
          {icon.type === 'code' && (
            <span className="font-mono text-2xl md:text-4xl text-blueprint font-bold drop-shadow-[0_0_10px_rgba(5,191,219,0.7)]">
              {icon.symbol}
            </span>
          )}
          {icon.type === 'chip' && (
            <svg className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(0,255,203,0.6)]" viewBox="0 0 50 50" fill="none">
              <rect x="15" y="15" width="20" height="20" stroke="#05BFDB" strokeWidth="1.5" rx="2" />
              <rect x="20" y="20" width="10" height="10" stroke="#00FFCB" strokeWidth="1" rx="1" />
              {[12, 18, 24, 30, 36].map(y => (
                <g key={y}>
                  <line x1="10" y1={y} x2="15" y2={y} stroke="#05BFDB" strokeWidth="1" />
                  <line x1="35" y1={y} x2="40" y2={y} stroke="#05BFDB" strokeWidth="1" />
                </g>
              ))}
            </svg>
          )}
          {icon.type === 'node' && (
            <svg className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_6px_rgba(0,255,203,0.8)]" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="3" fill="#00FFCB" />
              <circle cx="20" cy="20" r="8" stroke="#05BFDB" strokeWidth="1" opacity="0.7" />
              <circle cx="20" cy="20" r="12" stroke="#05BFDB" strokeWidth="0.5" opacity="0.5" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

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
    <section className="relative w-full min-h-screen mx-auto flex items-center justify-center blueprint-bg overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-blueprint"
            style={{ left: `${i * 5}%` }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-blueprint"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(5, 191, 219, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(0, 255, 203, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(5, 191, 219, 0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 80%, rgba(0, 255, 203, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(5, 191, 219, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Background Icons */}
      <FloatingIcons />

      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-terminal-green text-xs md:text-sm mb-8 flex items-center justify-center gap-2"
          >
            <span className="text-blueprint">jewel@portfolio</span>
            <span className="text-secondary">:</span>
            <span className="text-white">~</span>
            <span className="text-terminal-green">$</span>
            <span className="text-secondary">./introduce.sh</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blueprint-light via-terminal-green to-blueprint bg-clip-text text-transparent">
              Jewel Nath
            </span>
          </motion.h1>

          {/* Typing effect subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="min-h-[40px] md:min-h-[50px] mb-12"
          >
            <p className="text-lg md:text-2xl text-secondary flex items-center justify-center">
              {displayText}
              <span className="terminal-cursor ml-1"></span>
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            <motion.a
              href="https://github.com/devjewel01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-tertiary border border-blueprint/30 rounded-lg font-mono text-sm text-secondary hover:text-blueprint-light hover:border-blueprint transition-all cursor-pointer backdrop-blur-sm"
            >
              GitHub →
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jewel-nath"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-tertiary border border-blueprint/30 rounded-lg font-mono text-sm text-secondary hover:text-blueprint-light hover:border-blueprint transition-all cursor-pointer backdrop-blur-sm"
            >
              LinkedIn →
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-blueprint/10 border border-blueprint rounded-lg font-mono text-sm text-blueprint-light hover:bg-blueprint/20 transition-all cursor-pointer backdrop-blur-sm"
            >
              Contact Me →
            </motion.a>
          </motion.div>

          {/* Quick Stats - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-blueprint-light">1000+</div>
              <div className="font-mono text-xs text-secondary mt-1 uppercase tracking-wider">Students</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-blueprint-light">3</div>
              <div className="font-mono text-xs text-secondary mt-1 uppercase tracking-wider">Robots</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-blueprint-light">5+</div>
              <div className="font-mono text-xs text-secondary mt-1 uppercase tracking-wider">Years Exp</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about">
          <div className="w-[28px] h-[50px] rounded-3xl border-2 border-blueprint/50 flex justify-center items-start p-2 hover:border-blueprint transition-colors">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-blueprint"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroBento;
