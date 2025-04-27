"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Users, Coffee, Wifi, Monitor, Mic } from "lucide-react"

export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source
            src="https://youtu.be/UJEUwEJ6gH4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference & Events</h1>
              <p className="text-xl">Perfect venues for your business meetings and special celebrations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">Event Spaces for Every Occasion</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hilltop Guesthouse offers versatile event spaces suitable for corporate meetings, conferences, weddings,
              and social gatherings. Our dedicated events team will ensure your event is a success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#553214] mb-4">Business Events</h3>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art conference facilities are designed to meet the needs of modern businesses. From
                small board meetings to large conferences, we have the perfect space for your corporate event.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Multiple meeting rooms with flexible layouts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Advanced audiovisual equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">High-speed internet access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Catering services with customizable menus</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Dedicated event coordinator</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-block"
              >
                Inquire About Business Events
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Business Conference"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden md:order-first lg:order-last"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Wedding Venue" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#553214] mb-4">Social Celebrations</h3>
              <p className="text-gray-600 mb-6">
                From intimate weddings to milestone celebrations, our beautiful venues provide the perfect backdrop for
                your special occasions. Our events team will work with you to create a memorable experience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Elegant banquet halls and outdoor spaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Customizable decoration packages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Gourmet catering with personalized menus</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Accommodation packages for guests</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Professional event planning services</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-block"
              >
                Plan Your Celebration
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">Our Event Venues</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of versatile venues designed to accommodate events of all sizes and types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Grand Ballroom",
                capacity: "Up to 200 guests",
                description: "Our largest venue, perfect for weddings and large conferences",
                image: "/placeholder.svg?height=400&width=600",
                features: ["200m² space", "Stage area", "Dance floor", "Premium sound system"],
              },
              {
                name: "Executive Boardroom",
                capacity: "Up to 20 guests",
                description: "Intimate setting ideal for board meetings and small gatherings",
                image: "/placeholder.svg?height=400&width=600",
                features: ["Oval conference table", "Executive chairs", "Smart TV displays", "Video conferencing"],
              },
              {
                name: "Garden Terrace",
                capacity: "Up to 100 guests",
                description: "Beautiful outdoor space with panoramic views",
                image: "/placeholder.svg?height=400&width=600",
                features: ["Covered pavilion", "Garden setting", "Scenic backdrop", "Outdoor lighting"],
              },
              {
                name: "Summit Conference Room",
                capacity: "Up to 80 guests",
                description: "Versatile space for medium-sized meetings and presentations",
                image: "/placeholder.svg?height=400&width=600",
                features: ["Flexible seating", "Projector & screen", "Breakout areas", "Natural lighting"],
              },
              {
                name: "Panorama Lounge",
                capacity: "Up to 50 guests",
                description: "Elegant space with stunning views, perfect for cocktail receptions",
                image: "/placeholder.svg?height=400&width=600",
                features: ["Panoramic windows", "Bar area", "Lounge seating", "Ambient lighting"],
              },
              {
                name: "Hilltop Suite",
                capacity: "Up to 30 guests",
                description: "Intimate venue for small gatherings and workshops",
                image: "/placeholder.svg?height=400&width=600",
                features: ["Cozy atmosphere", "Private entrance", "Dedicated restrooms", "Catering station"],
              },
            ].map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <Image src={venue.image || "/placeholder.svg"} alt={venue.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#553214] mb-1">{venue.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{venue.capacity}</p>
                  <p className="text-gray-600 mb-4">{venue.description}</p>
                  <ul className="space-y-1 mb-4">
                    {venue.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <Check className="h-4 w-4 text-[#553214] mr-1 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">Event Amenities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All our event spaces come equipped with premium amenities to ensure your event runs smoothly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Wifi className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="font-semibold">High-Speed WiFi</h3>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Monitor className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="font-semibold">AV Equipment</h3>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Mic className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="font-semibold">Sound Systems</h3>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Coffee className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="font-semibold">Catering</h3>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Users className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="font-semibold">Event Staff</h3>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <svg className="h-8 w-8 text-[#553214]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Security</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#553214] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our events team to discuss your requirements and check availability.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#553214] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
