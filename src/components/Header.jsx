import { Link } from "react-scroll";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            className="text-xl font-bold text-white cursor-pointer"
          >
            Pedro Zambrano
          </Link>

          <div className="flex space-x-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Habilidades
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Proyectos
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
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
