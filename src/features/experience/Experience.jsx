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
        background: "#161B22",
        color: "#fff",
        border: "1px solid #30363D",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(5, 191, 219, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #161B22" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        border: "3px solid #05BFDB",
        boxShadow: "0 0 20px rgba(5, 191, 219, 0.3)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white font-mono text-[20px] md:text-[24px] font-bold'>
          {experience.title}
        </h3>
        <p className='text-blueprint font-mono text-[14px] md:text-[16px] font-semibold mt-1'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 space-y-2 font-sans'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-secondary text-[13px] md:text-[14px] pl-1 flex items-start gap-2'
          >
            <span className='text-terminal-green mt-1 flex-shrink-0'>→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
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