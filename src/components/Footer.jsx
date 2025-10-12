import { Youtube, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900/80 border-gray-700 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-center space-x-10">
        <span className="text-gray-300 p-2">
          © 2025 todos los derechos reservados
        </span>
        <span className="text-gray-300">
          Sígueme en redes:
          <div className="flex justify-center gap-4">
            <a href="https://www.youtube.com/@pekundev2004">
              <Youtube className=""/>
            </a>
            <a href="https://www.instagram.com/itspekunyt/">
               <Instagram />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
