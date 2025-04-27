"use client"

import { useState } from "react"
import { Calendar, Users, Search } from "lucide-react"

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking logic here
    console.log({ checkIn, checkOut, guests, rooms })
    // Redirect to rooms page with query params
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>

      <div className="lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>

      <div className="lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={guests}
            onChange={(e) => setGuests(Number.parseInt(e.target.value))}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
        <select
          value={rooms}
          onChange={(e) => setRooms(Number.parseInt(e.target.value))}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Room" : "Rooms"}
            </option>
          ))}
        </select>
      </div>

      <div className="lg:col-span-1">
        <label className="block text-sm font-medium text-transparent mb-1">Search</label>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primaryLight text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors"
        >
          <Search className="h-5 w-5 mr-2" />
          Check Availability
        </button>
      </div>
    </form>
  )
}
