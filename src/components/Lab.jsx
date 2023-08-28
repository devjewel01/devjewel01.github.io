import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";


const Lab = () => {
  return (
    <Tilt className='xs:w-full w-full'>
      <motion.div
        initial={{ opacity: 2, y: -100 }} // Optional initial animation, you can remove this line if not needed
        animate={{ opacity: 1, y: 0 }} // Optional animation, you can remove this line if not needed
        className='w-full bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-white'
      >
        <div className='flex items-center mb-4'>
          <motion.i
            className='fas fa-laptop-code text-white text-4xl mr-4'
            initial={{ y: -50 }} // Optional initial animation for computer icon
            animate={{ y: 0 }} // Optional animation for computer icon
          />
          <h3 className='text-white text-3xl font-bold'>
            Jewel Code Lab
          </h3>
        </div>
        <p className='text-white text-center'>
          Welcome to Jewel Code Lab, where coding magic happens! Join us on a journey of exploration and innovation in the world of Programming and Robotics.
        </p>
        <button
          className='mt-4 px-6 py-3 bg-white text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500'
        >
          <Link to={'lab'}>
            Explore Now
          </Link>
        </button>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(Lab, "lab");
