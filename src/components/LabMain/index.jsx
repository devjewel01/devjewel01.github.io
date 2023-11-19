import { courses } from "../../constants/lab"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import Navbar from "../Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-24">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white text-center md:text-5xl lg:text-6xl">Welcome to {`Jewel's`} Lab.</h1>
        <p className="mb-6 text-lg font-normal text-gray-200 text-center lg:text-xl sm:px-16 xl:px-48">Explore to get something exciting.</p>

        <div className="mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {courses.map((item, index) => (
            <motion.div key={item.id} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <Link to={item.link} className="block">
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
                >
                  <div className='relative w-full h-[230px]'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='w-full h-full object-cover rounded-2xl'
                    />
                  </div>

                  <div className='my-5'>
                    <h3 className='text-white font-bold text-[24px]'>{item.title}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{item.desc}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </span>
                </Tilt>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Index;