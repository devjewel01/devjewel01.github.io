import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full"
    >
      <div className="bento-box p-6 hover:shadow-blueprint transition-all duration-300 group">
        {/* Blueprint-style header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {/* Project number */}
            <div className="font-mono text-blueprint text-xs mb-2 uppercase tracking-[0.2em]">
              Project #{String(index + 1).padStart(2, '0')}
            </div>

            {/* Project name */}
            <h3 className="font-mono font-bold text-white text-xl md:text-2xl mb-2">
              {name}
            </h3>
          </div>

          {/* GitHub link button */}
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 ml-4 w-10 h-10 rounded border border-blueprint/50 hover:border-blueprint hover:bg-blueprint/10 flex items-center justify-center transition-all group/btn"
            title="View Source Code"
          >
            <svg
              className="w-5 h-5 text-blueprint group-hover/btn:text-blueprint-light transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Project image with blueprint overlay */}
        <div className="relative w-full h-48 md:h-56 mb-4 overflow-hidden rounded border border-blueprint/30 group-hover:border-blueprint/60 transition-colors">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Blueprint grid overlay */}
          <div className="absolute inset-0 bg-blueprint/5 group-hover:bg-blueprint/10 transition-all" />

          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blueprint opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blueprint opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blueprint opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blueprint opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Description */}
        <p className="font-sans text-secondary text-sm leading-relaxed mb-4 min-h-[80px]">
          {description}
        </p>

        {/* Technology tags - terminal style */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <div
              key={`${name}-${tag.name}-${tagIndex}`}
              className="font-mono text-xs px-3 py-1 border border-blueprint/40 text-blueprint rounded-sm hover:bg-blueprint/10 transition-colors"
            >
              #{tag.name}
            </div>
          ))}
        </div>

        {/* Measurement line decoration (blueprint style) */}
        <div className="mt-4 pt-4 border-t border-blueprint/20">
          <div className="flex items-center gap-2 font-mono text-xs text-blueprint/50">
            <span>⎯⎯⎯</span>
            <span className="uppercase tracking-wider">Technical Specs</span>
            <span className="flex-1 border-b border-dashed border-blueprint/20"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsBlueprint = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary font-sans text-base md:text-lg max-w-3xl leading-relaxed"
        >
          The following projects showcase my skills through real-world examples.
          Each project includes technical specifications, source code repositories,
          and demonstrates my ability to solve complex problems with robotics and software.
        </motion.p>
      </div>

      {/* Blueprint grid layout for projects */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Terminal style footer */}
      <motion.div
        variants={fadeIn("up", "spring", projects.length * 0.3, 0.75)}
        className="mt-12 terminal-window p-4"
      >
        <div className="terminal-header mb-3">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
        </div>
        <div className="font-mono text-sm text-secondary px-4 pb-2">
          <span className="text-terminal-green">$</span> ls -la projects/
          <br />
          <span className="text-blueprint">total {projects.length} projects</span>
          <br />
          <span className="text-secondary/50">
            All projects are open source and available on GitHub
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ProjectsBlueprint, "project");
