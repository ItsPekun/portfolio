import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 h-full flex flex-col"
    >
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Mi Contribución:</h4>
        <p className="text-purple-200 text-sm">{project.contribution}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-sky-600/20 text-sky-300 rounded-full text-xs border border-sky-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4 mt-auto">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Código Fuente
          </a>
        )}
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Live Demo
          </a>
        )}
        {!project.liveDemoLink && project.status === "Completado" && (
          <span className="text-gray-500 text-sm">No implementado</span>
        )}
      </div>

      <div className="mt-3">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            project.status === "Completado"
              ? "bg-green-500/20 text-green-300 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
          }`}
        >
          {project.status}
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
