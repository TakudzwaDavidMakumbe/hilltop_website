"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function RoomCard({ title, description, price, image, features }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="h-4 w-4 text-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-6">
          <div className="text-primary font-bold">
            ${price} <span className="text-gray-500 font-normal text-sm">/ night</span>
          </div>
          <Link
            href={`/rooms/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-[#553214] text-white px-6 py-2 text-sm rounded-md hover:bg-[#6b4019] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
