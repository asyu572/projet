'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DatePicker } from '@/components/ui/date-picker'

export default function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Book a Parking Spot</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <DatePicker
            selected={date}
            onSelect={setDate}
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="time">Time</Label>
          <Input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="duration">Duration (hours)</Label>
          <Input
            type="number"
            id="duration"
            min="1"
            max="24"
            defaultValue="1"
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Book Now
      </Button>
    </form>
  )
}