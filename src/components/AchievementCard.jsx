import { motion } from "framer-motion";

function AchievementCard({ achievement }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 h-full flex flex-col"
    >
        <h3 className="text-2xl font-bold text-white mb-3">{achievement.title}</h3>
        <h4 className="text-white mb-4 flex-grow font-semibold">Hecho en: {achievement.company}</h4>
        <p className="text-purple-200 text-md">Año: {achievement.year}</p>
    </motion.div>
  );
}

export default AchievementCard;
