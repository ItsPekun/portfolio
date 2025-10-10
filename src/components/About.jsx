import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Sobre Mí
          </h2>
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy TSU en Informática con fortaleza en el desarrollo backend,
              especializado en la creación de APIs REST funcionales y
              eficientes. Me apasiona encontrar soluciones tecnológicas que
              resuelvan problemas reales, combinando lógica robusta con
              interfaces atractivas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
