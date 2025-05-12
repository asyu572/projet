import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import ParkingMap from '@/components/parking-map'
import BookingForm from '@/components/booking-form'

export default async function DashboardPage() {
  const { userId } = auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Parking</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-[500px]">
            <ParkingMap />
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  )
}