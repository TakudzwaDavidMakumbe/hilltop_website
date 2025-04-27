"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialCard({ name, location, quote, rating, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden">
          <Image
            src={
              image ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" ||
              "/placeholder.svg"
            }
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      <div className="text-center">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </motion.div>
  )
}
