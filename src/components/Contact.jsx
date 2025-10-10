import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Contacto</h2>

          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <p className="text-gray-300 text-lg mb-6">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a
              hacerlo realidad.
            </p>

            <div className="space-y-4">
              <div>
                <a
                  href="mailto:espedrozambrano@gmail.com"
                  className="text-xl text-white hover:text-purple-300 transition-colors"
                >
                  espedrozambrano@gmail.com
                </a>
              </div>

              <div>
                <a
                  href="https://github.com/ItsPekun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub: ItsPekun
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
