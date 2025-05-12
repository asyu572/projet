'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { format } from 'date-fns'

type Booking = {
  id: string
  date: Date
  duration: number
  location: string
  status: 'active' | 'completed' | 'cancelled'
}

export default function BookingList() {
  const [bookings] = useState<Booking[]>([
    {
      id: '1',
      date: new Date(),
      duration: 2,
      location: 'Central Parking A',
      status: 'active'
    },
    {
      id: '2',
      date: new Date(),
      duration: 1,
      location: 'Central Parking B',
      status: 'completed'
    }
  ])

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <Card key={booking.id} className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{booking.location}</h3>
              <p className="text-gray-600">
                {format(booking.date, 'PPP')} - {booking.duration} hours
              </p>
              <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                booking.status === 'active' ? 'bg-green-100 text-green-800' :
                booking.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                'bg-red-100 text-red-800'
              }`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>
            <div className="space-x-2">
              <Button variant="outline">View Details</Button>
              {booking.status === 'active' && (
                <Button variant="destructive">Cancel</Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}