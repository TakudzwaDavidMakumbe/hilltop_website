"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Wifi, Coffee, Dumbbell, Utensils, Car, Tv } from "lucide-react"

export default function Amenities() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Our Amenities"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Amenities</h1>
              <p className="text-xl">Discover the premium facilities and services available at Hilltop Guesthouse</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">Premium Amenities for Your Comfort</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Hilltop Guesthouse, we offer a wide range of amenities designed to enhance your stay and provide the
              utmost comfort and convenience. From wellness facilities to dining options, we have everything you need
              for a memorable experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-[#553214]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Wifi className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#553214]">Complimentary Wi-Fi</h3>
              <p className="text-gray-600 mb-4">
                Stay connected with high-speed internet access available throughout the property. Perfect for both
                leisure and business travelers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">High-speed connection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Available in all areas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Secure network</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-[#553214]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Dumbbell className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#553214]">Fitness Center</h3>
              <p className="text-gray-600 mb-4">
                Maintain your fitness routine in our well-equipped gym featuring modern cardio and strength training
                equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Modern equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Open 24/7</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Personal training available</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-[#553214]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#553214]">Fine Dining</h3>
              <p className="text-gray-600 mb-4">
                Enjoy exquisite cuisine at our on-site restaurant featuring a diverse menu of local and international
                dishes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Gourmet menu</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Local ingredients</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Extensive wine selection</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-[#553214]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Coffee className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#553214]">Spa & Wellness</h3>
              <p className="text-gray-600 mb-4">
                Rejuvenate your body and mind with our range of spa treatments and wellness activities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Massage therapy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Sauna and steam room</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Beauty treatments</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-[#553214]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#553214]">Transportation Services</h3>
              <p className="text-gray-600 mb-4">
                Convenient airport transfers and local transportation services to help you explore the area.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Airport shuttle</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Car rental assistance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Local tour arrangements</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-[#553214]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Tv className="h-8 w-8 text-[#553214]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#553214]">In-Room Entertainment</h3>
              <p className="text-gray-600 mb-4">
                Enjoy premium entertainment options in the comfort of your room with smart TVs and streaming services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Smart TVs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Streaming services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">On-demand movies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Swimming Pool Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Swimming Pool" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">Infinity Pool with Panoramic Views</h2>
              <p className="text-gray-600 mb-6">
                Our stunning infinity pool offers breathtaking views of the surrounding landscape. Take a refreshing dip
                or relax on the sun loungers while enjoying the serene atmosphere.
              </p>
              <p className="text-gray-600 mb-6">
                The pool area features a poolside bar serving refreshing beverages and light snacks, perfect for a day
                of relaxation and leisure.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Temperature-controlled water</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Poolside service</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Towel service</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Children's pool area</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Center Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">Business Center & Meeting Rooms</h2>
              <p className="text-gray-600 mb-6">
                Our fully equipped business center provides all the resources you need to stay productive during your
                stay. From printing services to private meeting rooms, we have everything to support your business
                needs.
              </p>
              <p className="text-gray-600 mb-6">
                The business center is open 24/7, ensuring you can work according to your schedule and meet any
                deadlines.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">High-speed internet</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Printing and scanning services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Private meeting rooms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#553214] mr-2 mt-0.5" />
                  <span className="text-gray-600">Video conferencing facilities</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden md:order-first lg:order-last"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Business Center" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#553214] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Premium Amenities</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay at Hilltop Guesthouse and enjoy all our exceptional amenities and services.
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
