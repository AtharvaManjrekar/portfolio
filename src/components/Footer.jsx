import React from "react";

function Footer() {
  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Atharva Manjrekar
        </p>

        <button
          onClick={scrollToHome}
          className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-950"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
