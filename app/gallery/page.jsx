"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { X } from "lucide-react"

// Sample gallery data
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hotel Exterior",
    category: "exterior",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Deluxe Room",
    category: "rooms",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Restaurant",
    category: "dining",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Swimming Pool",
    category: "amenities",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Spa Treatment Room",
    category: "spa",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Conference Room",
    category: "events",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Garden View",
    category: "exterior",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Executive Suite",
    category: "rooms",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Bar Lounge",
    category: "dining",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Fitness Center",
    category: "amenities",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Massage Room",
    category: "spa",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Wedding Setup",
    category: "events",
  },
  {
    id: 13,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Aerial View",
    category: "exterior",
  },
  {
    id: 14,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Family Room",
    category: "rooms",
  },
  {
    id: 15,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Breakfast Buffet",
    category: "dining",
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const categories = [
    { id: "all", name: "All" },
    { id: "exterior", name: "Exterior" },
    { id: "rooms", name: "Rooms" },
    { id: "dining", name: "Dining" },
    { id: "amenities", name: "Amenities" },
    { id: "spa", name: "Spa" },
    { id: "events", name: "Events" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/placeholder.svg?height=800&width=1600" alt="Gallery" fill priority className="object-cover" />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
              <p className="text-xl">Explore Hilltop Guesthouse through our photo gallery</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#553214] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64 md:h-72">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-5xl w-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>
                <div className="relative h-[70vh]">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white text-center mt-4 text-xl">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#553214] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Hilltop Guesthouse in Person</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay now and create your own memories at our beautiful property.
          </p>
          <Link
            href="/rooms"
            className="bg-white text-[#553214] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  )
}
