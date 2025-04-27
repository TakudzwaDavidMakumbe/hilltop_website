"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ServiceCard from "@/components/ServiceCard"

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/placeholder.svg?height=800&width=1600" alt="Our Services" fill priority className="object-cover" />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl">Discover the exceptional services we offer at Hilltop Guesthouse</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">Exceptional Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Hilltop Guesthouse, we pride ourselves on offering a range of premium services to make your stay
              comfortable, enjoyable, and memorable. Our dedicated staff is committed to providing personalized service
              to meet your every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Fine Dining"
              description="Experience exquisite cuisine prepared by our expert chefs using locally sourced ingredients. Our restaurant offers a diverse menu of local and international dishes."
              icon="utensils"
            />
            <ServiceCard
              title="Spa & Wellness"
              description="Rejuvenate your body and mind with our range of spa treatments and wellness activities. Our spa facilities include massage rooms, sauna, and a relaxation lounge."
              icon="spa"
            />
            <ServiceCard
              title="Conference Facilities"
              description="State-of-the-art conference rooms equipped with modern technology for your business needs. Perfect for meetings, workshops, and corporate events."
              icon="briefcase"
            />
            <ServiceCard
              title="Outdoor Activities"
              description="Explore the beautiful surroundings with guided tours, hiking, and other outdoor activities. Our experienced guides will help you discover the natural beauty of the area."
              icon="mountain"
            />
            <ServiceCard
              title="Airport Shuttle"
              description="Convenient airport transfers to ensure a smooth start and end to your journey. Our comfortable vehicles and professional drivers will get you to your destination safely."
              icon="car"
            />
            <ServiceCard
              title="24/7 Room Service"
              description="Round-the-clock room service to cater to your needs at any time of the day. Our extensive menu offers a variety of options for all tastes and preferences."
              icon="clock"
            />
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">Premium Dining Experience</h2>
              <p className="text-gray-600 mb-6">
                Our restaurant offers a sophisticated dining experience with a menu that changes seasonally to showcase
                the freshest local ingredients. Our executive chef creates innovative dishes that blend traditional
                flavors with modern techniques.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're enjoying a romantic dinner, a family meal, or a business lunch, our attentive staff will
                ensure your dining experience is exceptional. We also cater to special dietary requirements and offer a
                curated selection of fine wines to complement your meal.
              </p>
              <Link
                href="/contact"
                className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-block"
              >
                Make a Reservation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Fine Dining" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden md:order-first lg:order-last"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Spa & Wellness" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">Spa & Wellness Center</h2>
              <p className="text-gray-600 mb-6">
                Our spa and wellness center is designed to provide a tranquil escape from the stresses of everyday life.
                Indulge in a range of treatments including massages, facials, and body wraps, all using premium products
                and techniques.
              </p>
              <p className="text-gray-600 mb-6">
                The wellness center also features a fully equipped fitness room, yoga studio, and meditation space. Our
                wellness experts are available to create personalized programs to help you achieve your health and
                wellness goals during your stay.
              </p>
              <Link
                href="/contact"
                className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-block"
              >
                Book a Treatment
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#553214] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Premium Services</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay at Hilltop Guesthouse and enjoy our exceptional services and amenities.
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
