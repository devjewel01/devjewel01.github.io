import { motion } from "framer-motion";
import { styles } from "../../styles";
import { projects } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { github } from "../../assets";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
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
        <div className="relative p-6 flex flex-col h-full">
          {/* Header section */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              {/* Index dot indicator */}
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
                <span className="font-mono text-xs text-secondary/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Separator */}
              <div className="w-px h-4 bg-white/10" />
            </div>

            {/* GitHub link */}
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group/link"
              title="View Source"
            >
              <svg
                className="w-4 h-4 text-secondary group-hover/link:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Project image */}
          <div className="relative w-full aspect-video mb-5 overflow-hidden rounded-md bg-black/20">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/50 to-transparent opacity-60" />
          </div>

          {/* Project title */}
          <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-terminal-green transition-colors duration-300">
            {name}
          </h3>

          {/* Description */}
          <p className="font-sans text-secondary/80 text-sm leading-relaxed mb-5 flex-grow">
            {description}
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, tagIndex) => (
              <span
                key={`${name}-${tag.name}-${tagIndex}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <span className="w-1 h-1 rounded-full bg-terminal-green/60" />
                {tag.name}
              </span>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    </>
  );
};

export default SectionWrapper(ProjectsBlueprint, "project");
