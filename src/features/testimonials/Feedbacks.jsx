import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="w-full group"
  >
    <div className="relative h-full bg-tertiary/30 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500">
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-terminal-green/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blueprint/10 blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative p-6 md:p-8 flex flex-col h-full">
        {/* Quote icon - terminal style */}
        <div className="font-mono text-terminal-green text-3xl leading-none mb-4 opacity-70">&gt;&gt;</div>

        {/* Testimonial text */}
        <p className="text-secondary/80 font-sans text-sm md:text-base leading-relaxed mb-6 flex-grow italic">
          "{testimonial}"
        </p>

        {/* Separator line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        {/* Author info */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-mono text-sm md:text-base font-semibold group-hover:text-terminal-green transition-colors duration-300">
              <span className="text-terminal-green/70">$</span> {name}
            </p>
            <p className="mt-1 text-secondary/70 font-mono text-xs">
              {designation}
            </p>
            <p className="text-secondary/50 font-mono text-xs">
              @ {company}
            </p>
          </div>

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg border-2 border-terminal-green/30 p-1 flex-shrink-0 group-hover:border-terminal-green/60 transition-all duration-300">
            <img
              src={image}
              alt={`feedback_by-${name}`}
              className="w-full h-full rounded object-cover"
            />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary font-sans text-base md:text-lg max-w-3xl leading-relaxed mb-10"
      >
        Feedback from colleagues, clients, and mentors I've worked with.
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
              testimonials.sh
            </span>
          </div>
          <div className="flex items-center gap-2 text-secondary/50 text-xs font-mono">
            <span className="hidden sm:inline">zsh</span>
            <span>●</span>
            <span className="hidden sm:inline">{testimonials.length} testimonials</span>
          </div>
        </div>

        {/* Command Prompt Line */}
        <div className="bg-black/20 border-b border-white/5 px-6 py-3 font-mono text-sm">
          <span className="text-terminal-green">➜</span>
          <span className="text-blueprint ml-2">~/portfolio</span>
          <span className="text-secondary/50 ml-2">cat testimonials.sh</span>
          <span className="animate-pulse ml-1">▊</span>
        </div>

        {/* Testimonials grid layout */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="bg-black/20 border-t border-white/5 px-6 py-2 font-mono text-xs text-secondary/50 flex items-center justify-between">
          <span>{testimonials.length} testimonials loaded successfully</span>
          <span className="hidden sm:inline">Press ESC to exit</span>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");