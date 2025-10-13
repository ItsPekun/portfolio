import { Youtube, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="w-screen bg-gray-900/80 border-gray-700 backdrop-blur-sm relative left-1/2 right-1/2 -mx-[50vw]">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-center space-x-10">
        <span className="text-gray-300 p-2">
          © 2025 todos los derechos reservados
        </span>
        <span className="text-gray-300">
          Sígueme en redes:
          <div className="flex justify-center gap-4">
            <a href="https://www.youtube.com/@pekundev2004" target="_blank">
              <Youtube className="transform hover:-translate-y-1 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com/itspekunyt/" target="_blank">
              <Instagram className="transform hover:-translate-y-1 hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
