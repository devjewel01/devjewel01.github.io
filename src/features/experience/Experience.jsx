import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full group"
    >
      <div className="relative h-full bg-tertiary/30 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500">
        {/* Gradient accent on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blueprint/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-terminal-green/10 blur-3xl" />
        </div>

        {/* Content wrapper */}
        <div className="relative p-6 md:p-8 flex flex-col h-full">
          {/* Header section with timeline indicator */}
          <div className="flex items-start gap-4 mb-6">
            {/* Icon with glow effect */}
            <div className="relative flex-shrink-0">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border-2 border-blueprint/30 group-hover:border-blueprint/60 transition-all duration-500 relative overflow-hidden"
                style={{ backgroundColor: experience.iconBg }}
              >
                {/* Icon glow on hover */}
                <div className="absolute inset-0 bg-blueprint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10"
                />
              </div>

              {/* Pulsing indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-terminal-green rounded-full animate-pulse" />
            </div>

            {/* Title and company */}
            <div className="flex-grow min-w-0">
              <h3 className="font-mono text-lg md:text-xl font-bold text-white group-hover:text-blueprint transition-colors duration-300 mb-2 break-words">
                {experience.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <p className="font-sans text-sm md:text-base text-secondary/90 font-semibold break-words">
                  {experience.company_name}
                </p>
                <div className="hidden sm:block w-px h-4 bg-white/10" />
                <p className="font-mono text-xs md:text-sm text-terminal-green/70">
                  {experience.date}
                </p>
              </div>
            </div>
          </div>

          {/* Separator line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Description points */}
          <div className="space-y-3 flex-grow">
            {experience.points.map((point, pointIndex) => (
              <div
                key={`experience-point-${index}-${pointIndex}`}
                className="flex items-start gap-3 group/point"
              >
                {/* Custom bullet point */}
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-terminal-green/60 group-hover/point:bg-terminal-green transition-colors duration-300" />
                </div>

                <p className="text-secondary/80 text-sm md:text-base leading-relaxed font-sans group-hover/point:text-secondary transition-colors duration-300">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blueprint/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary font-sans text-base md:text-lg max-w-3xl leading-relaxed mb-10"
        >
          My professional journey spans software engineering, robotics education, and entrepreneurship.
          From building enterprise solutions to mentoring the next generation of innovators, each role has
          shaped my multidisciplinary approach to technology.
        </motion.p>
      </div>

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
              work_experience.sh
            </span>
          </div>
          <div className="flex items-center gap-2 text-secondary/50 text-xs font-mono">
            <span className="hidden sm:inline">zsh</span>
            <span>●</span>
            <span className="hidden sm:inline">{experiences.length} roles</span>
          </div>
        </div>

        {/* Command Prompt Line */}
        <div className="bg-black/20 border-b border-white/5 px-6 py-3 font-mono text-sm">
          <span className="text-terminal-green">➜</span>
          <span className="text-blueprint ml-2">~/portfolio</span>
          <span className="text-secondary/50 ml-2">cat work_experience.sh</span>
          <span className="animate-pulse ml-1">▊</span>
        </div>

        {/* Experience grid layout */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="bg-black/20 border-t border-white/5 px-6 py-2 font-mono text-xs text-secondary/50 flex items-center justify-between">
          <span>{experiences.length} roles loaded successfully</span>
          <span className="hidden sm:inline">Press ESC to exit</span>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
