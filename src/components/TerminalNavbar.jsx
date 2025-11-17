import { useState, useEffect } from "react";
import { styles } from "../styles";

const TerminalNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/home/jewel");

  const navItems = [
    { id: "about", title: "about", path: "/about" },
    { id: "project", title: "projects", path: "/projects" },
    { id: "lab", title: "lab", path: "/lab" },
    { id: "work", title: "experience", path: "/experience" },
    { id: "contact", title: "contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (id, path) => {
    setCurrentPath(path);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const scrollToTop = () => {
    setCurrentPath("/home/jewel");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm border-b border-blueprint/20" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Terminal-style branding */}
        <div
          onClick={scrollToTop}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="flex items-center gap-1">
            <span className="text-terminal-green font-mono text-lg">$</span>
            <span className="text-blueprint font-mono text-lg group-hover:text-blueprint-light transition-colors">
              jewel@portfolio
            </span>
            <span className="text-secondary font-mono text-lg">:</span>
            <span className="text-white font-mono text-lg">~</span>
          </div>
        </div>

        {/* Desktop Navigation - Terminal Style */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToElement(item.id, item.path)}
              className="font-mono text-sm text-secondary hover:text-blueprint transition-colors flex items-center gap-2 group"
            >
              <span className="text-terminal-dim group-hover:text-terminal-green transition-colors">
                cd
              </span>
              <span className="group-hover:text-blueprint-light transition-colors">
                {item.title}
              </span>
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="/Jewel Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-blueprint text-blueprint px-4 py-2 rounded hover:bg-blueprint/10 hover:shadow-terminal transition-all flex items-center gap-2"
          >
            <span>cat</span>
            <span>resume.pdf</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu navItems={navItems} scrollToElement={scrollToElement} />
      </div>

      {/* Current Path Indicator (optional) */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-1">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs text-blueprint/50">
              {currentPath}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Mobile Menu Component
const MobileMenu = ({ navItems, scrollToElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button - Terminal Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-mono text-blueprint text-xl focus:outline-none"
      >
        {isOpen ? "[x]" : "[≡]"}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 mx-4 terminal-window min-w-[200px]">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
          </div>

          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToElement(item.id, item.path);
                  setIsOpen(false);
                }}
                className="w-full text-left font-mono text-sm text-secondary hover:text-blueprint transition-colors flex items-center gap-2"
              >
                <span className="text-terminal-dim">$</span>
                <span>cd {item.title}</span>
              </button>
            ))}

            <a
              href="/Jewel Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left font-mono text-sm text-secondary hover:text-blueprint transition-colors flex items-center gap-2 pt-3 border-t border-blueprint/20"
            >
              <span className="text-terminal-dim">$</span>
              <span>cat resume.pdf</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalNavbar;
