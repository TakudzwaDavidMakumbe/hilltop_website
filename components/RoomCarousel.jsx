"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ChevronLeft, ChevronRight, X, Info } from "lucide-react"

export default function RoomCarousel({ title, description, price, images, features, details }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
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
          <div className="flex space-x-2">
            <button
              onClick={() => setShowDetails(true)}
              className="bg-gray-100 text-gray-700 px-3 py-2 text-sm rounded-md hover:bg-gray-200 transition-all duration-300 flex items-center"
            >
              <Info className="h-4 w-4 mr-1" /> Details
            </button>
            <Link
              href={`/rooms/${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-[#553214] text-white px-4 py-2 text-sm rounded-md hover:bg-[#6b4019] transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Room Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-primary">{title}</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close details"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="relative h-64 mb-6">
                <Image src={images[0] || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Description</h4>
                <p className="text-gray-600">{details}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Features</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-primary font-bold text-xl">
                  ${price} <span className="text-gray-500 font-normal text-sm">/ night</span>
                </div>
                <Link
                  href={`/rooms/${title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300"
                >
                  Book This Room
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
