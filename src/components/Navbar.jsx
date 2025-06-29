import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          OmarFaruq.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-lg ${
                    isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-200"
                  } hover:text-blue-500`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 text-xl text-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-gray-700 dark:text-gray-200">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg ${
                      isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-200"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-lg text-gray-700 dark:text-gray-200 flex items-center gap-2"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />} Toggle Theme
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
