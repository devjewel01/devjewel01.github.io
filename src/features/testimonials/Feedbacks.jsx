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
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative p-6 md:p-8 flex flex-col h-full">
        {/* Quote icon */}
        <div className="text-white/20 text-5xl leading-none mb-4">"</div>

        {/* Testimonial text */}
        <p className="text-secondary/80 font-sans text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {testimonial}
        </p>

        {/* Separator line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        {/* Author info */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-sans text-sm md:text-base font-semibold">
              {name}
            </p>
            <p className="mt-1 text-secondary/70 font-sans text-xs">
              {designation}
            </p>
            <p className="text-secondary/50 font-sans text-xs">
              {company}
            </p>
          </div>

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg border-2 border-white/10 p-1 flex-shrink-0 group-hover:border-white/30 transition-all duration-300">
            <img
              src={image}
              alt={`feedback_by-${name}`}
              className="w-full h-full rounded object-cover"
            />
          </div>
        </div>
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

      {/* Testimonials grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");