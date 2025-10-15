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
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <Link
            to="hero"
            {...scrollSettings}
            className="text-xl font-bold text-white cursor-pointer md:text-left"
          >
            Pedro Zambrano
          </Link>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
            <Link
              to="about"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors md:py-0"
            >
              Sobre Mí
            </Link>
            <Link
              to="skills"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors md:py-0"
            >
              Habilidades
            </Link>
            <Link
              to="projects"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors md:py-0"
            >
              Proyectos
            </Link>
            <Link
              to="contact"
              {...scrollSettings}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors md:py-0"
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
