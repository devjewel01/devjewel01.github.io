import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, BinaryCanvas, Lab } from "./components";

const App = () => {
  return (
    // <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero /> 
        </div>
        <About />
        <Projects />
        <div className='relative z-0'>
          <Lab/>
          {/* <BinaryCanvas /> */}
        </div>
        
        <Tech />
        <Experience />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* <BinaryCanvas /> */}
        </div>
      </div>
  );
}

export default App; 
