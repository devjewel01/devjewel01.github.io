import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import "./Tech.css"

const Tech = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have used so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Technologies.
      </h2>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28 tech-icon-container'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-full h-full object-contain tech-icon'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
