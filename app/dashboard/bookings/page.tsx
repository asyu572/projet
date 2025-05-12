import BookingList from '@/components/booking-list'
import { Separator } from '@/components/ui/separator'

export default function BookingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <Separator className="my-6" />
      <BookingList />
    </div>
  )
}