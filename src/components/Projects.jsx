import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Sistema de Gestión de Biblioteca",
      description:
        "Solución web para modernizar y centralizar el control de préstamos y inventario de una biblioteca pública, eliminando el sistema manual basado en fichas físicas propenso a pérdidas.",
      contribution:
        "Adaptación y mejora del sistema. Implementación de funcionalidades clave como filtrado de búsquedas y control robusto del flujo de préstamos.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      status: "Completado",
      githubLink: "#",
      liveDemoLink: null,
    },
    {
      id: 2,
      title: "Sistema de Alquiler de Vehículos",
      description:
        "Aplicación de escritorio para digitalizar el proceso de alquiler de flota vehicular, reemplazando el sistema obsoleto de libretas manuales.",
      contribution:
        "Implementación y mantenimiento. Gestión de dependencias con entornos virtuales y corrección de bugs críticos para garantizar estabilidad en producción.",
      technologies: ["Python", "Tkinter", "MySQL", "SQLite3"],
      status: "En Desarrollo",
      githubLink: "#",
      liveDemoLink: null,
    },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Proyectos
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
