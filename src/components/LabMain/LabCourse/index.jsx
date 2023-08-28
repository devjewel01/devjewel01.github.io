import Navbar from "../../Navbar"
import { courseIntros } from "../../../constants/lab"
import { useNavigate, useParams } from "react-router-dom"
import python from "../../../constants/python"
import java from "../../../constants/java"

const Index = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  let courseDays;
  if(courseId === 'python'){
    courseDays = python;
  } else if(courseId === 'java'){
    courseDays = java
  }
  const courseIntro = courseIntros.find((item) => item.id === courseId);

  const handleClick = (itemId) => {
    navigate(`/lab/course/${courseId}/${itemId}`);
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-24">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white text-center md:text-5xl lg:text-6xl">{courseIntro.title}</h1>
        <p className="mb-6 text-lg font-normal text-gray-200 text-center lg:text-xl sm:px-16 xl:px-48">{courseIntro.intro}</p>

        <div className="mt-16 px-5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {courseDays.map((item) => (
            <div key={item.id} className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg h-56 w-full" src={item.img} alt={item.title} />
              </a>
              <div className="px-3 pb-5">
                <h5 className="my-5 text-base font-medium text-black text-[14px]">{item.desc}</h5>
                <hr className="mb-3"/>
                <div className="flex items-center justify-between">
                  <span className="text-black font-medium text-[24px]">{item.title}</span>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleClick(item.id)}>
                    {`Let's Go`}
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Index;