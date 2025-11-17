import { BrowserRouter } from "react-router-dom";
import {
  // New Blueprint/Terminal Theme Components
  TerminalNavbar,
  HeroBento,
  ProjectsBlueprint,
  TechTerminal,
  ContactTerminal,
  // Keeping Experience, Feedbacks, and Lab from original
  Experience,
  Feedbacks,
  Lab,
} from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary blueprint-bg'>
      {/* New Terminal Navbar */}
      <TerminalNavbar />

      {/* New Hero with Bento Grid Layout */}
      <HeroBento />

      {/* New Blueprint-style Projects */}
      <ProjectsBlueprint />

      {/* Lab Section (keeping from original) */}
      <div className='relative z-0'>
        <Lab />
      </div>

      {/* New Terminal-style Tech/Skills */}
      <TechTerminal />

      {/* Experience (keeping from original) */}
      <Experience />

      {/* Testimonials (keeping from original) */}
      <Feedbacks />

      {/* New Terminal-style Contact */}
      <div className='relative z-0'>
        <ContactTerminal />
      </div>
    </div>
  );
}

export default App; 
