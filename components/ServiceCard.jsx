"use client"

import { motion } from "framer-motion"
import { Utensils, Briefcase, Mountain, Car, Clock, SpadeIcon as Spa } from "lucide-react"

export default function ServiceCard({ title, description, icon }) {
  const getIcon = () => {
    switch (icon) {
      case "utensils":
        return <Utensils className="h-10 w-10 text-primary" />
      case "briefcase":
        return <Briefcase className="h-10 w-10 text-primary" />
      case "mountain":
        return <Mountain className="h-10 w-10 text-primary" />
      case "car":
        return <Car className="h-10 w-10 text-primary" />
      case "clock":
        return <Clock className="h-10 w-10 text-primary" />
      case "spa":
        return <Spa className="h-10 w-10 text-primary" />
      default:
        return <Utensils className="h-10 w-10 text-primary" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
