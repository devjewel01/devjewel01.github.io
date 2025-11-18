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
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bento-box p-8 xs:w-[320px] w-full hover:shadow-blueprint transition-all'
  >
    {/* Quote icon - terminal style */}
    <div className='font-mono text-blueprint text-[32px] leading-none mb-4'>&gt;&gt;</div>

    <div className='mt-1'>
      <p className='text-secondary font-sans text-[15px] md:text-[16px] leading-relaxed italic'>
        "{testimonial}"
      </p>

      <div className='mt-6 flex justify-between items-center gap-3 pt-6 border-t border-blueprint/20'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-mono text-[14px] md:text-[16px] font-semibold'>
            <span className='text-blueprint'>$</span> {name}
          </p>
          <p className='mt-1 text-secondary font-mono text-[11px] md:text-[12px]'>
            {designation}
          </p>
          <p className='text-secondary/70 font-mono text-[11px] md:text-[12px]'>
            @ {company}
          </p>
        </div>

        <div className='w-14 h-14 rounded border-2 border-blueprint/50 p-1 flex-shrink-0'>
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-full h-full rounded object-cover'
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12`}>
      <div className={`${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`pb-14 ${styles.paddingX} flex flex-wrap gap-6 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");