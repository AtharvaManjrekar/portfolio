import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-xl font-semibold tracking-tight text-gray-900 transition-colors hover:bg-gray-100"
        >
          AM
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-[15px] font-medium text-gray-600 transition-colors hover:text-gray-950"
            >
              {item.name}
            </button>
          ))}

          <a
            href="/Atharva_Manjrekar_Portfolio_Resume.pdf"
            download="Atharva_Manjrekar_Portfolio_Resume.pdf"
           
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="border-b border-gray-100 py-4 text-left text-[15px] font-medium text-gray-600 transition-colors hover:text-gray-950"
                >
                  {item.name}
                </button>
              ))}

              <a
                href="/Atharva_Manjrekar_Resume.pdf"
                download="Atharva_Manjrekar_Portfolio_Resume.pdf"
                
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 rounded-lg bg-gray-900 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
