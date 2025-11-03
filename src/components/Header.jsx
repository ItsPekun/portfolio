import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const scrollSettings = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    hashSpy: true,
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-row justify-between space-y-0">
          <Link
            to="hero"
            {...scrollSettings}
            className="text-xl font-bold text-white cursor-pointer"
          >
            Pedro Zambrano
          </Link>
          {!isOpen && (
            <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
              <Menu color="#FFF" />
            </div>
          )}
          {isOpen && (
            <div className="cursor-pointer md:hidden z-20" onClick={toggleMenu}>
              <X color="#FFF" />
            </div>
          )}
          {isOpen ? (
            <div className="bg-gray-900/80 overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen flex flex-col space-y-0 text-center justify-center items-center gap-10 duration-300 ease-in">
              <Link
                to="about"
                {...scrollSettings}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                Sobre Mí
              </Link>
              <Link
                to="achievements"
                {...scrollSettings}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                Certificaciones
              </Link>
              <Link
                to="skills"
                {...scrollSettings}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                Habilidades
              </Link>
              <Link
                to="projects"
                {...scrollSettings}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                Proyectos
              </Link>
              <Link
                to="contact"
                {...scrollSettings}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                Contacto
              </Link>
            </div>
          ) : (
            <div className="bg-gray-900/80 overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen flex flex-col space-y-0 text-center justify-center items-center gap-10 duration-300 ease-in"></div>
          )}
          <div className="flex-row space-y-0 md:space-x-8 text-center hidden md:flex">
            <Link
              to="about"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              to="achievements"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Certificaciones
            </Link>
            <Link
              to="skills"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Habilidades
            </Link>
            <Link
              to="projects"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Proyectos
            </Link>
            <Link
              to="contact"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
