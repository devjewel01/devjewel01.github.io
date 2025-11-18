import { useState, useEffect } from "react";
import { styles } from "../../styles";

const TerminalNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "about", title: "About" },
    { id: "project", title: "Projects" },
    { id: "tech", title: "Tech Skills" },
    { id: "work", title: "Experience" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Modern branding */}
        <div
          onClick={scrollToTop}
          className="cursor-pointer group"
        >
          <h1 className="text-xl font-bold bg-gradient-to-r from-blueprint-light via-terminal-green to-blueprint bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Jewel Nath
          </h1>
        </div>

        {/* Desktop Navigation - Modern Style */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToElement(item.id)}
              className="text-sm text-secondary hover:text-white transition-colors relative group"
            >
              <span>{item.title}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blueprint to-terminal-green group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="/Jewel Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-blueprint text-blueprint px-4 py-2 rounded-lg hover:bg-blueprint/10 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu navItems={navItems} scrollToElement={scrollToElement} />
      </div>
    </nav>
  );
};

// Mobile Menu Component
const MobileMenu = ({ navItems, scrollToElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button - Modern Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 mx-4 bg-tertiary/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl min-w-[200px] overflow-hidden">
          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToElement(item.id);
                  setIsOpen(false);
                }}
                className="w-full text-left text-sm text-secondary hover:text-white transition-colors py-2"
              >
                {item.title}
              </button>
            ))}

            <a
              href="/Jewel Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left text-sm text-blueprint hover:text-blueprint-light transition-colors py-2 pt-3 border-t border-white/10"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalNavbar;
