import { BrowserRouter } from "react-router-dom";
import {
  // Blueprint/Terminal Theme Components
  TerminalNavbar,
  HeroBento,
  ProjectsBlueprint,
  TechTerminal,
  ContactTerminal,
  Experience,
  Feedbacks,
} from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary blueprint-bg'>
      {/* New Terminal Navbar */}
      <TerminalNavbar />

      {/* New Hero with Bento Grid Layout */}
      <HeroBento />

      {/* Blueprint-style Projects */}
      <ProjectsBlueprint />

      {/* Terminal-style Tech/Skills */}
      <TechTerminal />

      {/* Experience */}
      <Experience />

      {/* Testimonials */}
      <Feedbacks />

      {/* Terminal-style Contact */}
      <div className='relative z-0'>
        <ContactTerminal />
      </div>
    </div>
  );
}

export default App; 
