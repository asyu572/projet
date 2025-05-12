import { Separator } from '@/components/ui/separator'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Smart Parking</h1>
        </div>
        <nav className="mt-6">
          <Link 
            href="/dashboard" 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50"
          >
            Dashboard
          </Link>
          <Link 
            href="/dashboard/bookings" 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50"
          >
            My Bookings
          </Link>
          <Link 
            href="/dashboard/history" 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50"
          >
            History
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-8 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}