"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Rooms", href: "/rooms" },
  { name: "Conference & Events", href: "/events" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${scrolled ? "py-2" : "py-3"}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/images/logo.png" alt="Hilltop Guesthouse Logo" fill className="object-contain" />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-bold text-primary whitespace-nowrap"
              >
                Hilltop Guesthouse
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm text-gray-800 hover:text-primary font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/rooms"
              className="bg-[#553214] text-white px-3 py-2 text-xs lg:text-sm rounded-md hover:bg-[#6b4019] transition-all duration-300 ml-1 whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-800 hover:text-primary py-2 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/rooms"
                onClick={() => setIsOpen(false)}
                className="bg-[#553214] text-white px-6 py-2 text-sm rounded-md hover:bg-[#6b4019] transition-all duration-300 text-center"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
