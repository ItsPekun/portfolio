import { Link } from "react-scroll";

function Header() {
  const scrollSettings = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    hashSpy: true,
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link
            to="hero"
            {...scrollSettings}
            className="text-xl font-bold text-white cursor-pointer"
          >
            Pedro Zambrano
          </Link>

          <div className="flex flex-col sm:flex-row sm:justify-start space-x-8">
            <Link
              to="about"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Sobre Mí
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
