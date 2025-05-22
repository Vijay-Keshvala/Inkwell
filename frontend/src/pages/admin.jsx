import React, { useState } from 'react'
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Analytics', icon: ChartBarIcon, href: '#', current: false },
  { name: 'Users', icon: UserGroupIcon, href: '#', current: false },
  { name: 'Settings', icon: Cog6ToothIcon, href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SimpleDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <h1 className="text-xl font-bold text-indigo-600">MyDashboard</h1>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 h-6 w-6 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        {/* Top nav */}
        <header className="flex items-center justify-between flex-shrink-0 px-4 py-4 bg-white border-b border-gray-200 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
          <BellIcon className="w-6 h-6 text-gray-400" />
        </header>

        <main className="flex-1 relative overflow-y-auto focus:outline-none p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Overview</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">1,200</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">New Signups</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">75</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Active Sessions</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">320</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Server Load</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">65%</p>
            </div>
          </div>

          {/* Example Chart placeholder */}
          <section className="mt-10 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Visitors</h3>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400 italic">
              Chart Placeholder
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
