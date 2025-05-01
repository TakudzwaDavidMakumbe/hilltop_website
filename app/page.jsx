"use client"
import Head from "next/head"; // Import Head component
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import RoomCarousel from "@/components/RoomCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="p0FWXbcVKXcMEL+OilnNyg"
          async
        ></script>
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/UJEUwEJ6gH4?autoplay=1&mute=1&loop=1&playlist=UJEUwEJ6gH4&controls=0&showinfo=0&rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full object-cover"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to Hilltop Guesthouse
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8">
                Experience luxury and comfort with breathtaking views
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/rooms"
                  className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300"
                >
                  Book Now
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-[#553214] text-[#553214] px-6 py-3 rounded-md hover:bg-[#553214] hover:text-white transition-all duration-300 bg-white/20 border-white text-white hover:bg-white hover:text-primary"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24 z-30 bg-white rounded-lg shadow-xl p-6">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-6">
                Experience the Perfect Getaway at Hilltop
              </h2>
              <p className="text-gray-600 mb-6">
                Nestled in the serene hills, Hilltop Guesthouse offers a perfect blend of luxury, comfort, and natural
                beauty. Our guesthouse is designed to provide you with an unforgettable experience, whether you're here
                for a relaxing vacation, a romantic getaway, or a productive business trip.
              </p>
              <p className="text-gray-600 mb-8">
                With stunning panoramic views, exceptional service, and world-class amenities, we ensure that your stay
                with us is nothing short of extraordinary.
              </p>
              <Link
                href="/about"
                className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-flex items-center"
              >
                Discover More <ChevronRight className="ml-2 h-4 w-4" />
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
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                alt="Hilltop Guesthouse"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">Our Featured Rooms</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience comfort and luxury in our carefully designed rooms. Each room is equipped with modern amenities
              to make your stay memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCarousel
              title="Deluxe King Room"
              description="Spacious room with king-sized bed and mountain view"
              price={150}
              images={[
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
                "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
              ]}
              features={["Mountain View", "Free WiFi", "Breakfast Included"]}
              details="Our Deluxe King Room offers a spacious retreat with a comfortable king-sized bed, elegant furnishings, and a private balcony with stunning mountain views. The room features a modern bathroom with premium amenities, a work desk, and high-speed WiFi. Perfect for couples or business travelers seeking comfort and style."
            />
            <RoomCarousel
              title="Executive Suite"
              description="Luxurious suite with separate living area and premium amenities"
              price={250}
              images={[
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
                "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
              ]}
              features={["Valley View", "Mini Bar", "Jacuzzi"]}
              details="The Executive Suite provides the ultimate luxury experience with a separate living area, bedroom with a premium king-sized bed, and a spacious bathroom featuring a jacuzzi tub. Enjoy panoramic valley views from your private terrace, a fully stocked mini bar, and exclusive access to our Executive Lounge. Ideal for those seeking a premium stay experience."
            />
            <RoomCarousel
              title="Family Room"
              description="Perfect for families with extra space and multiple beds"
              price={200}
              images={[
                "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
                "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
              ]}
              features={["Garden View", "Kids Area", "Connecting Rooms"]}
              details="Our Family Room is specially designed for families traveling together. The spacious accommodation features a master bedroom with a queen-sized bed and a separate area with two twin beds. The room includes a dedicated kids' corner with games and activities, a garden view, and the option for connecting rooms for larger families. Enjoy family-friendly amenities and plenty of space for everyone."
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-flex items-center"
            >
              View All Rooms <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a range of services to make your stay comfortable and memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Fine Dining"
              description="Experience exquisite cuisine prepared by our expert chefs using locally sourced ingredients."
              icon="utensils"
            />
            <ServiceCard
              title="Spa & Wellness"
              description="Rejuvenate your body and mind with our range of spa treatments and wellness activities."
              icon="spa"
            />
            <ServiceCard
              title="Conference Facilities"
              description="State-of-the-art conference rooms equipped with modern technology for your business needs."
              icon="briefcase"
            />
            <ServiceCard
              title="Outdoor Activities"
              description="Explore the beautiful surroundings with guided tours, hiking, and other outdoor activities."
              icon="mountain"
            />
            <ServiceCard
              title="Airport Shuttle"
              description="Convenient airport transfers to ensure a smooth start and end to your journey."
              icon="car"
            />
            <ServiceCard
              title="24/7 Room Service"
              description="Round-the-clock room service to cater to your needs at any time of the day."
              icon="clock"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-[#553214] text-white px-6 py-3 rounded-md hover:bg-[#6b4019] transition-all duration-300 inline-flex items-center"
            >
              Explore All Services <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#553214] mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our guests have to say about their experience at Hilltop
              Guesthouse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Tatenda Moyo"
              location="Borrowdale, Harare"
              quote="The view from my room was breathtaking! The staff was incredibly friendly and the food was delicious. Will definitely come back."
              rating={5}
              image="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            />
            <TestimonialCard
              name="Chiedza Mutasa"
              location="Avondale, Harare"
              quote="Perfect getaway for our anniversary. The room was luxurious and the spa services were top-notch. Highly recommend!"
              rating={5}
              image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            />
            <TestimonialCard
              name="Farai Ndoro"
              location="Mount Pleasant, Harare"
              quote="The conference facilities were excellent for our business retreat. Great amenities and professional service."
              rating={4}
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Hilltop Guesthouse?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay now and enjoy our special offers. We look forward to welcoming you!
          </p>
          <Link
            href="/rooms"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}
