import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[100%] h-[100%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div className='relative h-full glass-card overflow-hidden transition-all duration-500 group'>
        {/* Gradient accent on hover */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-terminal-green/10 blur-3xl' />
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-blueprint/10 blur-3xl' />
        </div>

        {/* Content wrapper */}
        <div className='relative p-6 flex flex-col h-full'>
          <div>
            <h3 className='font-sans text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-terminal-green transition-colors duration-300'>
              {experience.title}
            </h3>
            <p
              className='font-mono text-secondary/80 text-sm mb-4'
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>

          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Bottom accent line */}
          <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
