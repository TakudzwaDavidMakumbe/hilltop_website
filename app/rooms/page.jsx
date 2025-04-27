"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Filter, Search } from "lucide-react"
import RoomCard from "@/components/RoomCard"

// Sample room data
const roomsData = [
  {
    id: 1,
    title: "Deluxe King Room",
    description: "Spacious room with king-sized bed and mountain view",
    price: 150,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Mountain View", "Free WiFi", "Breakfast Included", "Air Conditioning"],
    capacity: 2,
    type: "deluxe",
  },
  {
    id: 2,
    title: "Executive Suite",
    description: "Luxurious suite with separate living area and premium amenities",
    price: 250,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Valley View", "Mini Bar", "Jacuzzi", "King Bed", "Lounge Area"],
    capacity: 2,
    type: "suite",
  },
  {
    id: 3,
    title: "Family Room",
    description: "Perfect for families with extra space and multiple beds",
    price: 200,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Garden View", "Kids Area", "Connecting Rooms", "Multiple Beds"],
    capacity: 4,
    type: "family",
  },
  {
    id: 4,
    title: "Standard Twin Room",
    description: "Comfortable room with twin beds and essential amenities",
    price: 120,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Twin Beds", "Work Desk", "Free WiFi", "Breakfast Optional"],
    capacity: 2,
    type: "standard",
  },
  {
    id: 5,
    title: "Premium Mountain View",
    description: "Enjoy stunning mountain views from this premium room",
    price: 180,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Panoramic View", "Balcony", "Queen Bed", "Premium Toiletries"],
    capacity: 2,
    type: "premium",
  },
  {
    id: 6,
    title: "Presidential Suite",
    description: "Our most luxurious accommodation with exclusive amenities",
    price: 350,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Private Terrace", "Living Room", "Dining Area", "Butler Service", "Spa Bath"],
    capacity: 4,
    type: "suite",
  },
]

export default function Rooms() {
  const [filteredRooms, setFilteredRooms] = useState(roomsData)
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    capacity: "all",
    roomType: "all",
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const applyFilters = (currentFilters) => {
    let filtered = roomsData

    // Apply price filter
    filtered = filtered.filter(
      (room) => room.price >= currentFilters.priceRange[0] && room.price <= currentFilters.priceRange[1],
    )

    // Apply capacity filter
    if (currentFilters.capacity !== "all") {
      filtered = filtered.filter((room) => room.capacity >= Number.parseInt(currentFilters.capacity))
    }

    // Apply room type filter
    if (currentFilters.roomType !== "all") {
      filtered = filtered.filter((room) => room.type === currentFilters.roomType)
    }

    // Apply search term
    if (searchTerm) {
      filtered = filtered.filter(
        (room) =>
          room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          room.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredRooms(filtered)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    applyFilters(filters)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/placeholder.svg?height=800&width=1600" alt="Our Rooms" fill priority className="object-cover" />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Rooms & Suites</h1>
              <p className="text-xl">Find the perfect accommodation for your stay</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <form onSubmit={handleSearch} className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search rooms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </form>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md md:w-auto"
                >
                  <Filter className="h-5 w-5" />
                  Filters
                </button>
              </div>

              {showFilters && (
                <div className="grid md:grid-cols-3 gap-6 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                    <select
                      value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
                      onChange={(e) => {
                        const [min, max] = e.target.value.split("-").map(Number)
                        handleFilterChange("priceRange", [min, max])
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="0-500">All Prices</option>
                      <option value="0-100">Under $100</option>
                      <option value="100-200">$100 - $200</option>
                      <option value="200-300">$200 - $300</option>
                      <option value="300-500">$300+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                    <select
                      value={filters.capacity}
                      onChange={(e) => handleFilterChange("capacity", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="all">Any Capacity</option>
                      <option value="1">1+ Person</option>
                      <option value="2">2+ People</option>
                      <option value="3">3+ People</option>
                      <option value="4">4+ People</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                    <select
                      value={filters.roomType}
                      onChange={(e) => handleFilterChange("roomType", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="all">All Types</option>
                      <option value="standard">Standard</option>
                      <option value="deluxe">Deluxe</option>
                      <option value="premium">Premium</option>
                      <option value="suite">Suite</option>
                      <option value="family">Family</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Room Listings */}
          {filteredRooms.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  title={room.title}
                  description={room.description}
                  price={room.price}
                  image={room.image}
                  features={room.features}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No rooms match your criteria</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
              <button
                onClick={() => {
                  setFilters({
                    priceRange: [0, 500],
                    capacity: "all",
                    roomType: "all",
                  })
                  setSearchTerm("")
                  setFilteredRooms(roomsData)
                }}
                className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
