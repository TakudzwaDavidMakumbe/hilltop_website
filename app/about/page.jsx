"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Award, Clock, Coffee } from "lucide-react"

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="About Hilltop Guesthouse"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl">Learn about our story, mission, and the team behind Hilltop Guesthouse</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Our Story" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Hilltop Guesthouse was founded in 2005 with a vision to create a unique hospitality experience that
                combines luxury with the natural beauty of our surroundings. What started as a small family-run
                establishment has now grown into one of the most sought-after destinations in the region.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been defined by a commitment to excellence, attention to detail, and a passion for
                creating memorable experiences for our guests. Over the years, we have continuously evolved and improved
                our facilities and services to meet the changing needs of our valued guests.
              </p>
              <p className="text-gray-600">
                Today, Hilltop Guesthouse stands as a testament to our dedication to providing exceptional hospitality
                in a stunning natural setting. We take pride in our rich history and look forward to welcoming you to
                experience the magic of Hilltop.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div>Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Luxury Rooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div>Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div>Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Hilltop Guesthouse, we are guided by a set of core values that define who we are and how we operate.
              These principles shape every aspect of our service and ensure that we deliver an exceptional experience to
              every guest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Exceptional Service</h3>
              <p className="text-gray-600">
                We are committed to providing personalized service that exceeds expectations and creates memorable
                experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Quality & Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in all aspects of our operations, from accommodations to dining and
                services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Sustainability</h3>
              <p className="text-gray-600">
                We are dedicated to environmentally responsible practices that preserve the natural beauty of our
                surroundings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Community</h3>
              <p className="text-gray-600">
                We value our role in the local community and strive to make a positive impact through various
                initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to making your stay at Hilltop Guesthouse exceptional.
              With years of experience in the hospitality industry, they bring passion and expertise to every aspect of
              our service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Doe", position: "General Manager", image: "/placeholder.svg?height=400&width=400" },
              { name: "Jane Smith", position: "Head Chef", image: "/placeholder.svg?height=400&width=400" },
              {
                name: "Michael Johnson",
                position: "Guest Relations Manager",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sarah Williams",
                position: "Events Coordinator",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Hospitality</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay at Hilltop Guesthouse and discover why our guests keep coming back.
          </p>
          <Link
            href="/rooms"
            className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-block"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  )
}
