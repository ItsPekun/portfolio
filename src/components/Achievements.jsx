import {achievementsData} from "../data/achievementsData.js"
import AchievementCard from "./AchievementCard.jsx"
import { motion } from "framer-motion"

function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Certificaciones
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {achievementsData.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements