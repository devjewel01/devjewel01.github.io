import { motion } from "framer-motion";

const TechOrb = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Orb Container */}
      <div className="relative w-64 h-64">
        {/* Outer Glow Rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blueprint/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-terminal-green/30"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Core Orb */}
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-br from-blueprint/20 via-terminal-green/20 to-blueprint-light/20 backdrop-blur-sm border border-blueprint/50 shadow-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(5, 191, 219, 0.3)",
              "0 0 40px rgba(0, 255, 203, 0.5)",
              "0 0 20px rgba(5, 191, 219, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner Circuit Pattern */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
          >
            {/* Hexagonal Grid */}
            <motion.path
              d="M 100 40 L 140 60 L 140 100 L 100 120 L 60 100 L 60 60 Z"
              stroke="#05BFDB"
              strokeWidth="1.5"
              fill="none"
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M 100 60 L 120 70 L 120 90 L 100 100 L 80 90 L 80 70 Z"
              stroke="#00FFCB"
              strokeWidth="1"
              fill="rgba(0, 255, 203, 0.1)"
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Center Dot */}
            <motion.circle
              cx="100"
              cy="80"
              r="4"
              fill="#00FFCB"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Connecting Lines */}
            <motion.line
              x1="100"
              y1="40"
              x2="100"
              y2="60"
              stroke="#05BFDB"
              strokeWidth="1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.line
              x1="140"
              y1="60"
              x2="120"
              y2="70"
              stroke="#05BFDB"
              strokeWidth="1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.line
              x1="140"
              y1="100"
              x2="120"
              y2="90"
              stroke="#05BFDB"
              strokeWidth="1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </svg>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 font-mono text-blueprint-light text-sm bg-blueprint/10 px-3 py-1 rounded border border-blueprint/30"
          animate={{
            y: [-8, -12, -8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          .NET
        </motion.div>

        <motion.div
          className="absolute top-12 -left-8 font-mono text-terminal-green text-sm bg-terminal-green/10 px-3 py-1 rounded border border-terminal-green/30"
          animate={{
            x: [-8, -12, -8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          ROS2
        </motion.div>

        <motion.div
          className="absolute top-12 -right-8 font-mono text-blueprint-light text-sm bg-blueprint/10 px-3 py-1 rounded border border-blueprint/30"
          animate={{
            x: [8, 12, 8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          IoT
        </motion.div>

        <motion.div
          className="absolute bottom-12 -left-10 font-mono text-terminal-green text-sm bg-terminal-green/10 px-3 py-1 rounded border border-terminal-green/30"
          animate={{
            x: [-10, -14, -10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          C#
        </motion.div>

        <motion.div
          className="absolute bottom-12 -right-10 font-mono text-blueprint-light text-sm bg-blueprint/10 px-3 py-1 rounded border border-blueprint/30"
          animate={{
            x: [10, 14, 10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          React
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 font-mono text-terminal-green text-sm bg-terminal-green/10 px-3 py-1 rounded border border-terminal-green/30"
          animate={{
            y: [8, 12, 8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          Arduino
        </motion.div>

        {/* Data Flow Lines */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-blueprint-light rounded-full"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-80px)`,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blueprint/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechOrb;
